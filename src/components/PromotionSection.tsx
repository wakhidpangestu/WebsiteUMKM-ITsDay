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
  title = "Penawaran Spesial",
  description = "Dapatkan promo menarik untuk produk kami",
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
          Nikmati penawaran eksklusif dan diskon untuk siomay asli Indonesia kami. Promo terbatas yang tidak boleh Anda lewatkan!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PromotionCard
          title="Gratis Ongkir"
          description="Pesan di atas Rp 100.000 dan dapatkan gratis ongkir ke rumah Anda. Berlaku untuk wilayah Bandung."
          icon={<Truck className="h-10 w-10" />}
          className="border-l-4 border-l-[#FE9100] hover:border-l-orange-400 transition-colors"
        />
        <PromotionCard
          title="Spesial Akhir Pekan"
          description="Dapatkan diskon 50% untuk pesanan kedua setiap akhir pekan. Cocok untuk kumpul keluarga dan pesta akhir pekan!"
          discount="50% OFF"
          icon={<Percent className="h-10 w-10" />}
          className="border-l-4 border-l-red-500 hover:border-l-red-400 transition-colors"
        />
        <PromotionCard
          title="Happy Hour"
          description="Pesan antara pukul 14.00-17.00 dan dapatkan diskon 25% untuk semua menu. Cocok untuk ngemil sore Anda!"
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
