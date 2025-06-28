"use client";

import React, { memo } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Star } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  isPopular?: boolean;
}

interface MenuSectionProps {
  menuItems?: MenuItem[];
}

const defaultMenuItems: MenuItem[] = [
  {
    id: "1",
    name: "Siomay Legenda Bandung",
    description:
      "Campuran siomay khas Bandung dengan tahu, kentang, dan kol, disajikan dengan bumbu kacang rahasia keluarga sejak 1998.",
    price: 12000,
    image:
      "https://i.pinimg.com/736x/ed/1d/7c/ed1d7ced5cf82af5eec2f8dae6b0e566.jpg",
    rating: 5.0,
    isPopular: true,
  },
  {
    id: "2",
    name: "Batagor Mantul (Manis Gurih Betul)",
    description:
      "Batagor garing disiram bumbu kacang manis pedas khas Bandung, cocok jadi camilan sore.",
    price: 12000,
    image:
      "https://i.pinimg.com/736x/75/a9/a8/75a9a845472f03524b89985d3092b882.jpg",
    rating: 4.9,
    isPopular: true,
  },
  {
    id: "3",
    name: "Paket Keluarga Hemat",
    description:
      "Isi 6 porsi campuran siomay, tahu, batagor, kentang, pare, dan kol. Hemat, lengkap, dan siap santap ramai-ramai!",
    price: 65000,
    image:
      "https://i.pinimg.com/736x/5f/8f/cd/5f8fcdd8a98a28a68cb688c829605dee.jpg",
    rating: 4.8,
  },
];

const MenuSection = memo(function MenuSection({ menuItems = defaultMenuItems }: MenuSectionProps) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  return (
    <section id="menu" className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-orange-50/20 dark:to-orange-950/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Menu Pilihan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nikmati berbagai pilihan siomay dan batagor autentik dengan cita rasa khas Bandung yang tak terlupakan
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden bg-white/20 dark:bg-black/20 border-0 shadow-md group transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                  priority={item.isPopular}
                />
                {item.isPopular && (
                  <Badge
                    variant="destructive"
                    className="absolute top-3 left-3 bg-gradient-to-r from-orange-400 to-orange-600"
                  >
                    Popular
                  </Badge>
                )}
                {item.rating && (
                  <div className="absolute top-3 right-3 bg-black/50 rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-white text-xs font-medium">{item.rating}</span>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold" style={{ color: "#FE9100" }}>
                    {formatPrice(item.price)}
                  </span>
                  <Button
                    size="sm"
                    style={{ background: "#FE9100", color: "#fff" }}
                    className="transition-colors duration-200 ease-out hover:bg-[#e07f00] hover:scale-105 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    onClick={() => {
                      const message = encodeURIComponent(`Halo, saya ingin memesan ${item.name} (${formatPrice(item.price)}) dari Tong Hee Love.`);
                      window.open(`https://wa.me/6281282829139?text=${message}`, "_blank");
                    }}
                  >
                    <Plus className="h-4 w-4 mr-1" /> Pesan
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

export default MenuSection;
