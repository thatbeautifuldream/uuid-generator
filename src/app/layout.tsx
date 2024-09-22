import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random UUID Generator",
  description:
    "Generate a random UUID (Universally Unique Identifier) with each page load.",
  keywords: ["UUID", "random", "generator", "unique identifier"],
  creator: "Milind Mishra",
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
