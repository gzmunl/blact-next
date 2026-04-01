import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blact Systems — İleri Teknoloji Mühendislik",
  description:
    "Blact Systems — Eklemeli imalat, kompozit teknolojisi, insansız araçlar ve sürdürülebilirlik alanlarında yenilikçi mühendislik çözümleri.",
  openGraph: {
    title: "Blact Systems — İleri Teknoloji Mühendislik",
    description:
      "Eklemeli imalat, kompozit teknolojisi, insansız araçlar ve sürdürülebilirlik alanlarında yenilikçi mühendislik çözümleri.",
    type: "website",
  },
  icons: {
    icon: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Rajdhani:wght@500;600;700&family=Noto+Sans:wght@700;800;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
