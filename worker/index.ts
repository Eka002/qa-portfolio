/** Cloudflare Worker entry point for the QA portfolio. */
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS?: Fetcher;
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const SECURITY_HEADERS: Readonly<Record<string, string>> = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "img-src 'self' data:",
    "font-src 'self'",
    "style-src 'self' 'unsafe-inline'",
    "script-src 'self' 'unsafe-inline'",
    "connect-src 'self'",
    "upgrade-insecure-requests",
  ].join("; "),
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-Permitted-Cross-Domain-Policies": "none",
};

const STATIC_FILE_SIGNAL = Symbol.for("vinext.static-file-signal");

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const requestUrl = new URL(request.url);
    const isLocalRequest = requestUrl.hostname === "localhost" || requestUrl.hostname === "127.0.0.1";

    if (requestUrl.protocol !== "https:" && !isLocalRequest) {
      requestUrl.protocol = "https:";
      return Response.redirect(requestUrl.toString(), 308);
    }

    const canServeAsset = request.method === "GET" || request.method === "HEAD";
    const looksLikeAsset = requestUrl.pathname.startsWith("/_next/") || /\.[a-z0-9]+$/i.test(requestUrl.pathname);
    const assetResponse = canServeAsset && looksLikeAsset && env.ASSETS
      ? await env.ASSETS.fetch(request)
      : undefined;
    const response = assetResponse && assetResponse.status !== 404
      ? assetResponse
      : await handler.fetch(request, env, ctx);
    const headers = new Headers(response.headers);

    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
      headers.set(name, value);
    }

    headers.set("Strict-Transport-Security", "max-age=31536000");

    const securedResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });

    const staticFilePath = Reflect.get(response, STATIC_FILE_SIGNAL);
    if (typeof staticFilePath === "string") {
      Object.defineProperty(securedResponse, STATIC_FILE_SIGNAL, { value: staticFilePath });
    }

    return securedResponse;
  },
};

export default worker;
