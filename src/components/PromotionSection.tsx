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
  title = "Special Offer",
  description = "Get amazing deals on our products",
  discount,
  icon,
  className = "",
}: PromotionCardProps) => {
  return (
    <Card className={`overflow-hidden glass-card ${className}`}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 text-primary">{icon}</div>
        {discount && (
          <Badge
            variant="destructive"
            className="self-start mb-2 text-lg px-3 py-1"
          >
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
              `https://wa.me/6281380319934?text=Halo, saya tertarik dengan promo ${title}`,
              "_blank",
            )
          }
        >
          Order Now
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

const PromotionSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Special Promotions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enjoy exclusive offers and discounts on our authentic Indonesian
            siomay. Limited time offers you don't want to miss!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PromotionCard
            title="Free Delivery"
            description="Order above Rp 100.000 and get free delivery to your doorstep. Valid for orders within Bandung area."
            icon={<Truck className="h-10 w-10" />}
            className="border-l-4 border-l-green-500 hover:border-l-green-400 transition-colors"
          />

          <PromotionCard
            title="Weekend Special"
            description="Get 50% off on your second order every weekend. Perfect for family gatherings and weekend parties!"
            discount="50% OFF"
            icon={<Percent className="h-10 w-10" />}
            className="border-l-4 border-l-red-500 hover:border-l-red-400 transition-colors"
          />

          <PromotionCard
            title="Happy Hour"
            description="Order between 2-5 PM and get 25% off on all menu items. Perfect for your afternoon cravings!"
            discount="25% OFF"
            icon={<Clock className="h-10 w-10" />}
            className="border-l-4 border-l-blue-500 hover:border-l-blue-400 transition-colors"
          />
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg"
            onClick={() =>
              window.open(
                `https://wa.me/6281380319934?text=Halo, saya ingin mengetahui semua promo yang tersedia di Siomay Alek`,
                "_blank",
              )
            }
          >
            View All Promotions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
