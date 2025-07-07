import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdelkoddous MOUNIR Portfolio",
  description: "Hi I'm Abdelkoddous MOUNIR full stack developer based in Morocco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
