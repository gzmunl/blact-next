import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://blactsystems.com"),
  title: {
    default: "Blact Systems — İleri Teknoloji Mühendislik",
    template: "%s | Blact Systems",
  },
  description:
    "Blact Systems — Eklemeli imalat, kompozit teknolojisi, insansız araçlar ve sürdürülebilirlik alanlarında yenilikçi mühendislik çözümleri.",
  keywords: [
    "eklemeli imalat",
    "SLM",
    "WAAM",
    "kompozit teknolojisi",
    "karbon fiber",
    "insansız hava araçları",
    "İHA",
    "insansız deniz araçları",
    "sürdürülebilirlik",
    "mühendislik",
    "Blact Systems",
  ],
  authors: [{ name: "Blact Systems" }],
  creator: "Blact Systems",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Blact Systems — İleri Teknoloji Mühendislik",
    description:
      "Eklemeli imalat, kompozit teknolojisi, insansız araçlar ve sürdürülebilirlik alanlarında yenilikçi mühendislik çözümleri.",
    type: "website",
    locale: "tr_TR",
    siteName: "Blact Systems",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blact Systems — İleri Teknoloji Mühendislik",
    description:
      "Eklemeli imalat, kompozit teknolojisi, insansız araçlar ve sürdürülebilirlik alanlarında yenilikçi mühendislik çözümleri.",
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
        <link rel="preload" href="/fonts/Nasa.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@500;600;700&family=Noto+Sans:wght@700;800;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/style.css?v=5" />
      </head>
      <body>{children}</body>
    </html>
  );
}
