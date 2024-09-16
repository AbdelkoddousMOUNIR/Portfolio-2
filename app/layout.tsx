import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppContext from "@/context/appContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "portfolio",
  description: "my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppContext>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" type="image/png" />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </AppContext>
  );
}
