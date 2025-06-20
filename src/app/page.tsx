"use client";

import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const sections = ["home", "menu", "pesan"];
    const observers = new Map<string, IntersectionObserver>();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sections.includes(sectionId)) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50% 0px",
      threshold: 0.3,
    };

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        observer.observe(element);
        observers.set(sectionId, observer);
      }
    });

    // Fallback scroll listener untuk mobile
    const handleScroll = () => {
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FE9100]/50 via-background to-orange-50/30 dark:from-[#FE9100]/20 dark:via-background dark:to-orange-950/10">
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
