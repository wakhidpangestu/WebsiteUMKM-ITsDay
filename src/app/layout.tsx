import { ClientThemeProvider } from "../components/ClientThemeProvider";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const UserCursor = dynamic(() => import("@/components/UserCursor"), { ssr: false });

export const metadata: Metadata = {
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
        url: "https://i.pinimg.com/736x/71/a9/3b/71a93baf542ec4eb1a5b3ab88ee4ed32.jpg",
        width: 1200,
        height: 630,
        alt: "Siomay Bandung Legendaris - Tong Hee Love",
      },
    ],
    type: "website",
    locale: "id_ID",
    url: "https://tongheelove.vercel.app/", 
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
        {/* Lingkaran gradient blur orange di atas-tengah halaman */}
        <div className="fixed top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#fe9100cc] rounded-full blur-[160px] z-[-10] pointer-events-none" />
        <ClientThemeProvider>
          {children}
        </ClientThemeProvider>
        <UserCursor />
      </body>
    </html>
  );
}
