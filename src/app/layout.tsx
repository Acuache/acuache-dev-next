import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { BackgroundArt } from "@/components/layout/background-art";
import { SITE_URL } from "@/lib/site";

const nebula = localFont({
  src: [
    {
      path: "../fonts/Nebula/Nebula-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Nebula/Nebula-Hollow.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-nebula",
  display: "swap",
});

const montserrat = localFont({
  src: "../fonts/Montserrat/Montserrat-Regular.ttf",
  weight: "400",
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "★ Acuache | Portafolio ★",
    template: "%s | Acuache",
  },
  description:
    "Portafolio de Michael Acuache, desarrollador frontend autodidacta en crecimiento, con interés en diseño, UX/UI y la creación de experiencias web modernas y cuidadas.",
  authors: [{ name: "Michael Acuache Yalle" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "★ Acuache | Portafolio ★",
    description:
      "Portafolio de Michael Acuache, desarrollador frontend autodidacta en crecimiento.",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "★ Acuache | Portafolio ★",
    description:
      "Portafolio de Michael Acuache, desarrollador frontend autodidacta en crecimiento.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101010",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="es"
      className={`dark ${nebula.variable} ${montserrat.variable} antialiased`}
    >
      <body className="max-w-5xl mx-auto p-4 xs:p-6 xl:p-0 overflow-x-hidden">
        <BackgroundArt />
        {children}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
