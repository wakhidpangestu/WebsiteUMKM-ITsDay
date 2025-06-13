"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import PromotionSection from "@/components/PromotionSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 via-background to-emerald-50/30 dark:from-green-950/20 dark:via-background dark:to-emerald-950/10">
      <Navbar activeSection={activeSection} onSectionChange={scrollToSection} />

      <main>
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* Menu Section */}
        <section id="menu">
          <MenuSection />
        </section>

        {/* Promotional Section */}
        <PromotionSection />

        {/* Contact Section */}
        <section id="pesan">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
