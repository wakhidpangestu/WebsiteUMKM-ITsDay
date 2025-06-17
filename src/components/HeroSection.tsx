"use client";

import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, MapPin, Star } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  tagline?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  sellingPoints?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}

export default function HeroSection({
  title = "Tong Hee Love",
  tagline = "Siomay Autentik Khas Bandung dengan Cita Rasa Juara",
  ctaText = "Pesan Sekarang",
  ctaLink = "#order",
  backgroundImage = "/home.jpg",
  sellingPoints = [
    {
      icon: <Star className="h-5 w-5 text-yellow-400" />,
      title: "Kualitas Premium",
      description: "Dibuat dari bahan segar pilihan setiap hari",
    },
    {
      icon: <MapPin className="h-5 w-5 text-red-500" />,
      title: "Asli Bandung",
      description: "Resep tradisional turun temurun sejak 1998",
    },
  ],
}: HeroSectionProps) {
  return (
    <section className="relative h-screen min-h-[600px] w-full bg-background overflow-hidden gradient-bg">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {tagline}
          </p>
        </div>

        <Button
          size="lg"
          className="bg-[#FE9100] hover:bg-[#e07f00] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
          onClick={() =>
            window.open(
              `https://wa.me/6281282829139?text=Halo, saya ingin memesan siomay dari Siomay Alek`,
              "_blank",
            )
          }
        >
          {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        {/* Selling Points Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {sellingPoints.map((point, index) => (
            <Card
              key={index}
              className="glass-card hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-md">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {point.title}
                  </h3>
                  <p className="text-white/80">{point.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
