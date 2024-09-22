import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Random UUID Generator",
    template: "%s | Random UUID Generator",
  },
  description:
    "Generate a random UUID (Universally Unique Identifier) with each page load.",
  keywords: ["UUID", "GUID", "random", "generator", "unique identifier"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name or Company",
  publisher: "Your Name or Company",
  robots: "index, follow",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
