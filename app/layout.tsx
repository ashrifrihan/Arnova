import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arnova.tech"),
  title: "Arnova — Build what’s next",
  description:
    "Arnova designs intelligent digital products, AI experiences, and software systems for ambitious teams.",
  keywords: ["Arnova", "AI", "software", "digital products", "technology", "startup", "Ashrif Rihan"],
  openGraph: {
    title: "Arnova — Build what’s next",
    description:
      "Intelligent digital products, AI experiences, and software systems built for what’s next.",
    url: "https://www.arnova.tech",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arnova",
  alternateName: "Arnova Technologies",
  url: "https://www.arnova.tech",
  email: "rihan@arnova.tech",
  foundingDate: "2025-03",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK"
  },
  founder: {
    "@type": "Person",
    name: "Ashrif Rihan",
    jobTitle: "Founder & Lead AI Engineer",
    email: "rihan@arnova.tech",
    url: "https://ashrifrihan.me",
    sameAs: [
      "https://github.com/ashrifrihan",
      "https://ashrifrihan.me"
    ]
  },
  sameAs: [
    "https://github.com/ashrifrihan"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
