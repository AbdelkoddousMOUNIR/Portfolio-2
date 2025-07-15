// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdelkoddous MOUNIR Portfolio",
  description: "Hi I'm Abdelkoddous MOUNIR, a full stack developer based in Morocco",
  keywords: ["Abdelkoddous MOUNIR", "Abdelkoddous", "MOUNIR", "full stack developer"],
  openGraph: {
    title: "Abdelkoddous MOUNIR Portfolio",
    description: "Hi I'm Abdelkoddous MOUNIR, a full stack developer based in Morocco",
    url: "https://abdelkoddousmounir.digild.com",
    siteName: "Abdelkoddous MOUNIR",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://example.com/banner.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:site_name" content="Abdelkoddous MOUNIR" />
        {/* JSON-LD for Google Site Name */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Abdelkoddous MOUNIR",
              "alternateName": "Abdelkoddous",
              "url": "https://abdelkoddousmounir.digild.com"
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

