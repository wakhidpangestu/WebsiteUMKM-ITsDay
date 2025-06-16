import { TempoInit } from "@/components/tempo-init";
import { ClientThemeProvider } from "../components/ClientThemeProvider";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tong Hee Love - Siomay Indonesia Asli",
  description:
    "Rasakan cita rasa asli siomay Indonesia di Tong Hee Love. Bahan segar, resep tradisional, dan pemesanan online yang mudah. Gratis ongkir dengan diskon spesial hingga 50%.",
  keywords:
    "siomay, makanan Indonesia, kuliner asli, pesan online, antar makanan, resep tradisional, UMKM, usaha kecil",
  openGraph: {
    title: "Tong Hee Love - Siomay Indonesia Asli",
    description:
      "Pesan siomay Indonesia asli dan segar secara online. Resep tradisional dengan kemudahan modern.",
    images: [
      {
        url: "/home.jpg",
        width: 1200,
        height: 630,
        alt: "Siomay Indonesia Lezat - Tong Hee Love",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tong Hee Love - Siomay Indonesia Asli",
    description:
      "Pesan siomay Indonesia asli dan segar secara online. Resep tradisional dengan kemudahan modern.",
    images: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#22c55e" />
        <link
          rel="canonical"
          href="#"
        />
      </head>
      <body className={inter.className}>
        <ClientThemeProvider>
          {children}
          <TempoInit />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
