import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blact Systems — İleri Teknoloji Mühendislik",
  description:
    "Eklemeli imalat, kompozit teknolojisi, insansız araçlar ve sürdürülebilirlik alanlarında yenilikçi mühendislik çözümleri sunan ileri teknoloji şirketi.",
  openGraph: {
    title: "Blact Systems — İleri Teknoloji Mühendislik",
    description:
      "Eklemeli imalat, kompozit teknolojisi, insansız araçlar ve sürdürülebilirlik alanlarında yenilikçi mühendislik çözümleri.",
    url: "https://blactsystems.com",
    images: ["/images/hero-laser.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blact Systems — İleri Teknoloji Mühendislik",
    description:
      "Eklemeli imalat, kompozit teknolojisi, insansız araçlar ve sürdürülebilirlik alanlarında yenilikçi mühendislik çözümleri.",
    images: ["/images/hero-laser.png"],
  },
  alternates: {
    canonical: "https://blactsystems.com",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
