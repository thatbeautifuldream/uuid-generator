import { v4 as uuidv4 } from "uuid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random UUID Generator",
  description:
    "Generate a random UUID (Universally Unique Identifier) with each page load.",
  keywords: ["UUID", "GUID", "random", "generator", "unique identifier"],
  openGraph: {
    title: "Random UUID Generator",
    description:
      "Generate a random UUID (Universally Unique Identifier) with each page load.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Random UUID Generator",
    description:
      "Generate a random UUID (Universally Unique Identifier) with each page load.",
  },
};

export default function Home() {
  const uuid = uuidv4();
  return uuid;
}
