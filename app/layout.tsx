import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

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
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMw1Kp4c4H7AM5rZZZ2xjL4vyjOUqA7n7yb3Lh3"
          crossOrigin="anonymous"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
