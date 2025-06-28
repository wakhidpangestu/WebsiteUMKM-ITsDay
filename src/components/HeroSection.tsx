"use client";

import React, { memo, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, MapPin, Star } from "lucide-react";
import Head from "next/head";
interface SellingPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HeroSectionProps {
  title?: string;
  tagline?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  sellingPoints?: SellingPoint[];
  fetchPriority?: "auto" | "high" | "low";
}

const HeroSection = memo(function HeroSection({
  title = "Tong Hee Love",
  tagline = "Siomay Autentik Khas Bandung dengan Cita Rasa Juara",
  ctaText = "Pesan Sekarang",
  ctaLink = "#order",
  backgroundImage = "https://i.pinimg.com/736x/71/a9/3b/71a93baf542ec4eb1a5b3ab88ee4ed32.jpg",
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
  fetchPriority = "auto",
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current) {
    
    }
  }, []);

  // Handler for image load (for analytics or effects)
  const handleImageLoad = () => {

  };

  return (
    <>
      <Head>
        {/* Only preload fonts or critical assets actually used above the fold */}
        <link
          rel="preload"
          href="/fonts/Inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <section
        ref={sectionRef}
        className="relative w-full min-h-screen bg-background flex flex-col justify-center items-center overflow-hidden"
      >
        {/* Responsive aspect ratio wrapper for hero image */}
        <div className="absolute inset-0 w-full h-full aspect-[16/9] max-h-screen">
          <Image
            src={backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover w-auto h-full"
            priority={fetchPriority === "high"}
            fetchPriority={fetchPriority}
            sizes="100vw"
            onLoad={handleImageLoad}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        {/* Content Layer - Unified for all devices */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full min-h-screen px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center w-full py-12 min-h-[60vh]">
            <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md max-w-[90vw] md:max-w-3xl mb-2 md:mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-base xs:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 md:mb-8 max-w-[85vw] md:max-w-2xl">
              {tagline}
            </p>
            <Button
              size="lg"
              className="group bg-[#FE9100] hover:bg-[#e07f00] text-white text-base md:text-xl px-6 md:px-10 py-3 md:py-4 rounded-full shadow-lg w-auto min-w-[140px] mb-8 md:mb-12"
              onClick={() =>
                window.open(
                  `https://wa.me/6281282829139?text=Halo, saya ingin memesan siomay dari Tong Hee Love!`,
                  "_blank"
                )
              }
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Button>
            {/* Selling Points - Always visible, responsive grid */}
            <div className="mt-4 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
              {sellingPoints.map((point, index) => (
                <Card
                  key={index}
                  className="group bg-white/10 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300"
                  style={{ border: 'none', perspective: 800 }}
                >
                  <CardContent
                    className="flex items-start gap-4 p-6 relative group-hover:-rotate-x-3 group-hover:rotate-y-3 transition-transform duration-300"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Glassmorphism background */}
                    <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:bg-white/20 group-hover:backdrop-blur-lg transition-all duration-300" style={{ zIndex: 1 }} />
                    <div className="p-3 bg-white/20 rounded-full relative z-10">
                      {point.icon}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold text-white">
                        {point.title}
                      </h3>
                      <p className="text-white/80">{point.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default HeroSection;
