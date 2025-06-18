"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Truck, Percent, Clock } from "lucide-react";

interface PromotionCardProps {
  title: string;
  description: string;
  discount?: string;
  icon: React.ReactNode;
  className?: string;
}

const PromotionCard = ({
  title = "Promo Spesial",
  description = "Nikmati siomay asli Bandung dari Tong Hee Love – enak, terjangkau, dan penuh kejutan! Cek promo menarik kami di bawah ini:",
  discount,
  icon,
  className = "",
}: PromotionCardProps) => (
  <Card className={`overflow-hidden glass-card ${className}`}>
    <CardContent className="p-6 flex flex-col h-full">
      <div className="mb-4 text-primary">{icon}</div>
      {discount && (
        <Badge variant="destructive" className="self-start mb-2 text-lg px-3 py-1">
          {discount}
        </Badge>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      <Button
        variant="outline"
        className="mt-auto group w-full"
        onClick={() =>
          window.open(
            `https://wa.me/6281282829139?text=Halo, saya tertarik dengan promo ${title}`,
            "_blank"
          )
        }
      >
        Pesan Sekarang
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </CardContent>
  </Card>
);

const PromotionSection = () => (
  <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-[#FE9100]/10 to-white dark:from-[#FE9100]/30 dark:to-black">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Promo Spesial</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Nikmati siomay asli Bandung dari Tong Hee Love – enak, terjangkau, dan penuh kejutan! Cek promo menarik kami di bawah ini:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PromotionCard
          title="Free Ongkir Suka-Suka"
          description={"Ada pesanan? Bisa dapet ongkir gratis, tergantung yang ngasih 😉\nNggak ada minimal order, pokoknya tanya aja dulu! Berlaku untuk sekitar Depok & sekitarnya."}
          icon={<Truck className="h-10 w-10" />}
          className="border-l-4 border-l-[#FE9100] hover:border-l-orange-400 transition-colors"
        />
        <PromotionCard
          title="Diskon Spesial Akhir Pekan"
          description={"Pesan porsi ketiga di akhir pekan dan dapetin potongan 50%!\nCocok buat kumpul bareng keluarga sambil nikmatin siomay pare, kol, tahu, dll."}
          discount="50% OFF"
          icon={<Percent className="h-10 w-10" />}
          className="border-l-4 border-l-red-500 hover:border-l-red-400 transition-colors"
        />
        <PromotionCard
          title="Happy Hour Ngemil Sore"
          description={"Setiap hari dari jam 14.00 – 17.00, semua menu diskon 25%!\nPas banget buat ngemil sore, harga mulai dari 2 ribu aja per biji!"}
          discount="25% OFF"
          icon={<Clock className="h-10 w-10" />}
          className="border-l-4 border-l-blue-500 hover:border-l-blue-400 transition-colors"
        />
      </div>
      <div className="mt-12 text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#FE9100] to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white shadow-lg"
          onClick={() =>
            window.open(
              `https://wa.me/6281282829139?text=Halo, saya ingin mengetahui semua promo yang tersedia di Siomay Alek`,
              "_blank"
            )
          }
        >
          Lihat Semua Promo
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  </section>
);

export default PromotionSection;
