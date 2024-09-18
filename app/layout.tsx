import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppContext from "@/context/appContext";
import { ThemeProvider } from "../components/theme-provider";

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
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </AppContext>
  );
}
