// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import "./globals.css";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's already imported

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodrigo: Webentwickler",
  description:
    "Willkommen in Rodrigos Portfolio. Mit umfassender Erfahrung in der Webentwicklung erstellt Rodrigo saubere, dynamische und responsive Websites. Er hat sich auf Projekte in der Pharmaindustrie spezialisiert und beherrscht Plattformen wie Contentstack und Drupal. Fließend in Deutsch und Englisch, setzt er Kundenvisionen aus PDFs oder Figma-Modellen in funktionale Weblösungen um. Entdecken Sie seine Projekte und erleben Sie Innovation und Leidenschaft in der Webentwicklung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}