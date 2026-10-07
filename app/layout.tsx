import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arnova.tech"),
  title: "Arnova — Build what’s next",
  description:
    "Arnova designs intelligent digital products, AI experiences, and software systems for ambitious teams.",
  keywords: ["Arnova", "AI", "software", "digital products", "technology", "startup"],
  openGraph: {
    title: "Arnova — Build what’s next",
    description:
      "Intelligent digital products, AI experiences, and software systems built for what’s next.",
    url: "https://arnova.tech",
    siteName: "Arnova",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnova — Build what’s next",
    description:
      "Intelligent digital products, AI experiences, and software systems built for what’s next."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
