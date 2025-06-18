import { ClientThemeProvider } from "../components/ClientThemeProvider";
import { Inter } from "next/font/google";
import UserCursor from "@/components/UserCursor";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tong Hee Love | Siomay Bandung Legendaris - Fresh, Lezat, & Asli!",
  description:
    "Nikmati siomay Bandung legendaris dengan cita rasa otentik, bumbu kacang spesial, dan bahan segar setiap hari. Pesan online, gratis ongkir, diskon spesial, dan pengalaman kuliner yang tak terlupakan hanya di Tong Hee Love!",
  keywords:
    "siomay, siomay bandung, siomay asli, siomay enak, siomay legendaris, kuliner bandung, makanan tradisional, pesan siomay, siomay online, UMKM, halal, bumbu kacang, promo siomay, gratis ongkir",
  openGraph: {
    title: "Tong Hee Love | Siomay Bandung Legendaris - Fresh, Lezat, & Asli!",
    description:
      "Nikmati siomay Bandung legendaris dengan cita rasa otentik, bumbu kacang spesial, dan bahan segar setiap hari. Pesan online, gratis ongkir, diskon spesial, dan pengalaman kuliner yang tak terlupakan hanya di Tong Hee Love!",
    images: [
      {
        url: "/home.jpg",
        width: 1200,
        height: 630,
        alt: "Siomay Bandung Legendaris - Tong Hee Love",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tong Hee Love | Siomay Bandung Legendaris - Fresh, Lezat, & Asli!",
    description:
      "Nikmati siomay Bandung legendaris dengan cita rasa otentik, bumbu kacang spesial, dan bahan segar setiap hari. Pesan online, gratis ongkir, diskon spesial, dan pengalaman kuliner yang tak terlupakan hanya di Tong Hee Love!",
    images: [
      "/home.jpg",
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
        <meta name="theme-color" content="#FE9100" />
        <link rel="canonical" href="#" />
      </head>
      <body className={`${inter.className} cursor-none`}>
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
        <UserCursor />
      </body>
    </html>
  );
}
