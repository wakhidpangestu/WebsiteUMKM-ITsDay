"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/About";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Dynamic import for heavy sections
const MenuSection = dynamic(
  () => import("@/components/MenuSection"),
  { loading: () => <div className="h-96 flex items-center justify-center">Loading menu...</div> }
);
const PromotionSection = dynamic(
  () => import("@/components/PromotionSection"),
  { loading: () => <div className="h-96 flex items-center justify-center">Loading promo...</div> }
);
const ContactSection = dynamic(
  () => import("@/components/ContactSection"),
  { loading: () => <div className="h-96 flex items-center justify-center">Loading contact...</div> }
);

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section = ({ id, children }: SectionProps) => (
  <section
    id={id}
    style={{ minHeight: "1px" }}
    className="transition-all duration-700"
  >
    {children}
  </section>
);

const MemoNavbar = memo(Navbar);

const Home = memo(function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  const scrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleLoaded = () => setIsLoading(false);
    if (document.readyState === "complete") {
      setTimeout(handleLoaded, 800);
    } else {
      window.addEventListener("load", () => setTimeout(handleLoaded, 800));
    }
    return () => {
      window.removeEventListener("load", handleLoaded);
    };
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "menu", "promo", "pesan"];
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
        const observer = new IntersectionObserver(
          observerCallback,
          observerOptions
        );
        observer.observe(element);
        observers.set(sectionId, observer);
      }
    });
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
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <>
          <MemoNavbar activeSection={activeSection} onSectionChange={scrollToSection} />
          <main>
            <Section id="home">
              {/* Set fetchPriority='high' on the HeroSection's main image for LCP optimization */}
              <HeroSection fetchPriority="high" />
            </Section>
            <Section id="about">
              <AboutSection />
            </Section>
            <Section id="menu">
              <MenuSection />
            </Section>
            <Section id="promo">
              <PromotionSection />
            </Section>
            <Section id="pesan">
              <ContactSection />
            </Section>
          </main>
        </>
      )}
      <SpeedInsights />
    </div>
  );
});

export default Home;
