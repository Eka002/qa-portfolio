import type { Metadata } from "next";
import "./globals.css";

function getTrustedSiteOrigin(): URL | undefined {
  const configuredOrigin = process.env.PUBLIC_SITE_ORIGIN;
  if (!configuredOrigin) return undefined;

  try {
    const url = new URL(configuredOrigin);
    const isLocal = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    if (url.protocol !== "https:" && !isLocal) return undefined;
    return url;
  } catch {
    return undefined;
  }
}

export function generateMetadata(): Metadata {
  const base = getTrustedSiteOrigin();
  const socialImages = base
    ? [{ url: new URL("/og.png", base), width: 1200, height: 630, alt: "Екатерина Дедяшкина — QA Engineer" }]
    : [];

  return {
    ...(base ? { metadataBase: base } : {}),
    title: "Екатерина Дедяшкина — QA Engineer | Web, API, Backend, Automation",
    description: "Портфолио QA Engineer Екатерины Дедяшкиной: Web, API, Backend, PostgreSQL, Python automation, E2E testing, production diagnostics и реальные QA-кейсы.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "Екатерина Дедяшкина — QA Engineer | Web, API, Backend, Automation",
      description: "Web, API, Backend, PostgreSQL, Python automation, E2E testing и production diagnostics.",
      type: "website",
      images: socialImages,
    },
    twitter: {
      card: "summary_large_image",
      title: "Екатерина Дедяшкина — QA Engineer | Web, API, Backend, Automation",
      description: "Web, API, Backend, PostgreSQL, Python automation, E2E testing и production diagnostics.",
      images: socialImages.map((image) => image.url),
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
