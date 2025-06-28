"use client";

import Image from "next/image";
import AnimatedTextReveal from "@/components/AnimatedTextReveal";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const About = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y - rect.height / 2) / rect.height) * -10;
      const rotateY = ((x - rect.width / 2) / rect.width) * 10;
      setRotation({ x: rotateX, y: rotateY });
    };
    const reset = () => setRotation({ x: 0, y: 0 });

    const el = cardRef.current;
    el?.addEventListener("mousemove", handleMouseMove);
    el?.addEventListener("mouseleave", reset);
    return () => {
      el?.removeEventListener("mousemove", handleMouseMove);
      el?.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section className="min-h-screen bg-background flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 py-20 gap-16">
      {/* Text Content */}
      <motion.div
        className="w-full md:w-1/2 max-w-xl text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 md:mb-8 text-neutral-900 dark:text-neutral-100">
          Tentang{" "}
          <span
            className="transition bg-gradient-to-r from-orange-400 to-orange-600 bg-[length:0%_100%] bg-no-repeat hover:bg-[length:100%_100%] hover:text-transparent bg-clip-text hover:bg-clip-text cursor-pointer duration-300"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "inherit",
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundSize = "0% 100%";
              (e.currentTarget as HTMLElement).style.webkitTextFillColor = "inherit";
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundSize = "100% 100%";
              (e.currentTarget as HTMLElement).style.webkitTextFillColor = "transparent";
            }}
          >
            Tong Hee Love
          </span>
        </h2>
        <AnimatedTextReveal
          text="Tong Hee Love adalah pelopor siomay autentik khas Bandung yang telah hadir sejak 1998. Kami berkomitmen menghadirkan cita rasa juara dengan bahan-bahan segar pilihan setiap hari, mengusung resep tradisional turun-temurun, dan pelayanan ramah untuk setiap pelanggan."
          className="text-base sm:text-lg mb-4 leading-relaxed text-neutral-800 dark:text-neutral-100 text-justify"
        />
        <AnimatedTextReveal
          text="Dengan pengalaman lebih dari 20 tahun, kami terus berinovasi tanpa meninggalkan keaslian rasa. Nikmati siomay premium, saus kacang khas, dan pengalaman kuliner Bandung yang tak terlupakan bersama Tong Hee Love."
          className="text-base sm:text-lg leading-relaxed text-neutral-800 dark:text-neutral-100 text-justify"
        />
      </motion.div>

      {/* Single 3D Hover Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div
          ref={cardRef}
          className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-xl overflow-hidden shadow-xl border cursor-pointer"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src="https://i.pinimg.com/736x/ee/5e/6e/ee5e6e0a45c0cf6a3ac53efea2ce55a0.jpg"
            alt="Tong Hee Love"
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
