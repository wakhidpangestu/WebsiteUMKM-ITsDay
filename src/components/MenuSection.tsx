"use client";

import React from "react";
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
    name: "Siomay Original",
    description:
      "Siomay ikan tenggiri dengan bumbu kacang khas, tahu, kentang rebus, dan kerupuk",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=400&q=80",
    rating: 4.8,
    isPopular: true,
  },
  {
    id: "2",
    name: "Siomay Spesial",
    description:
      "Siomay premium dengan telur puyuh, bakso ikan, dan sayuran segar",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&q=80",
    rating: 4.9,
    isPopular: true,
  },
  {
    id: "3",
    name: "Siomay Jumbo",
    description:
      "Porsi besar dengan siomay, batagor, tahu isi, dan pelengkap lengkap",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&q=80",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Batagor Crispy",
    description: "Batagor goreng crispy dengan bumbu kacang dan sambal khas",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80",
    rating: 4.6,
  },
  {
    id: "5",
    name: "Paket Keluarga",
    description:
      "Paket hemat untuk 4-5 orang dengan variasi siomay dan batagor",
    price: 65000,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
    rating: 4.8,
    isPopular: true,
  },
  {
    id: "6",
    name: "Siomay Vegetarian",
    description: "Siomay tahu dan sayuran dengan bumbu kacang tanpa daging",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    rating: 4.5,
  },
];

export default function MenuSection({
  menuItems = defaultMenuItems,
}: MenuSectionProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section
      id="menu"
      className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-green-50/20 dark:to-green-950/20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Menu Pilihan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nikmati berbagai pilihan siomay dan batagor autentik dengan cita
            rasa khas Bandung yang tak terlupakan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden backdrop-blur-md bg-white/20 dark:bg-black/20 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.isPopular && (
                  <Badge
                    variant="destructive"
                    className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500"
                  >
                    Popular
                  </Badge>
                )}
                {item.rating && (
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-white text-xs font-medium">
                      {item.rating}
                    </span>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {formatPrice(item.price)}
                  </span>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg"
                    onClick={() =>
                      window.open(
                        `https://wa.me/6281380319934?text=Halo, saya ingin memesan ${item.name} - ${formatPrice(item.price)}`,
                        "_blank",
                      )
                    }
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Pesan
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 text-lg shadow-lg"
            onClick={() =>
              window.open(
                `https://wa.me/6281380319934?text=Halo, saya ingin melihat menu lengkap Siomay Alek`,
                "_blank",
              )
            }
          >
            Lihat Menu Lengkap
          </Button>
        </div>
      </div>
    </section>
  );
}
