"use client";

import React, { useEffect, useState, memo, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Home, Utensils, ShoppingCart } from "lucide-react";

// Tambahkan tipe props pada komponen Navbar agar tidak error di TypeScript dan lebih clean.
interface NavbarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

// Komponen Navbar dioptimasi untuk performa dan aksesibilitas
const Navbar = memo(function Navbar({
  activeSection = "home",
  onSectionChange = () => {},
}: NavbarProps) {
  const [showMobileTheme, setShowMobileTheme] = useState(false);
  useEffect(() => setShowMobileTheme(true), []);
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "menu", label: "Menu", icon: Utensils },
    { id: "pesan", label: "Pesan", icon: ShoppingCart },
  ];
  // Gunakan useCallback untuk handler
  const handleSectionChange = useCallback(
    (id: string) => onSectionChange(id),
    [onSectionChange]
  );
  return (
    <>
      {/* Mobile Theme Switcher */}
      <div className="fixed top-3 right-3 z-[60] block md:hidden">
        <div
          className={`backdrop-blur-md bg-white/30 dark:bg-black/30 rounded-full shadow-lg border border-white/30 dark:border-white/10 px-5 py-2 flex items-center transition-all duration-500 ease-out ${
            showMobileTheme
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 -translate-y-4"
          }`}
          style={{ borderRadius: "999px", minWidth: 0 }}
        >
          <ThemeSwitcher mobile />
        </div>
      </div>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-white/20 dark:border-white/10 hidden md:flex lg:flex">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
            {/* Logo */}
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <Image
                  src="/logo-light.png"
                  alt="Logo Light"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain dark:hidden"
                  priority
                />
                <Image
                  src="/logo.png"
                  alt="Logo Dark"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain hidden dark:block"
                  priority
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#FE9100] to-[#FE9100] bg-clip-text text-transparent">
                Tong Hee Love
              </span>
            </div>
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center justify-center space-x-8 mt-2 md:mt-0">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSectionChange(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-[#FE9100]/20 text-[#FE9100] shadow-lg"
                        : "text-foreground/80 hover:text-[#FE9100] hover:bg-[#FE9100]/20"
                    }`}
                    aria-current={
                      activeSection === item.id ? "page" : undefined
                    }
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
            {/* Theme Switcher & CTA */}
            <div className="flex items-center justify-center md:justify-end space-x-2 md:space-x-4 mt-2 md:mt-0">
              <ThemeSwitcher />
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#FE9100] to-[#FE9100] hover:from-orange-600 hover:to-orange-700 text-white shadow-lg"
                onClick={() => handleSectionChange("pesan")}
              >
                Pesan Sekarang
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile & Tablet Navbar */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-full shadow-lg flex sm:flex md:flex lg:hidden w-[95vw] max-w-md mx-auto px-3 py-1 transition-all duration-300">
        <div className="flex flex-1 items-center justify-around w-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`flex flex-col items-center justify-center gap-1 text-xs font-medium focus:outline-none transition-colors duration-200
                  ${isActive ? "text-neutral-900 dark:text-white" : "text-neutral-600 dark:text-white/70"}`}
                style={{ minWidth: 0, background: "none", border: "none" }}
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={`px-5 py-1.5 rounded-full transition-all duration-300 flex items-center justify-center
                    ${isActive ? "bg-orange-600/60" : "bg-transparent"}`}
                  style={{ minHeight: 30 }}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
});

export default Navbar;
