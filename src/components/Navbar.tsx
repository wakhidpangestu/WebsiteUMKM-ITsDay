"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Home, Utensils, ShoppingCart } from "lucide-react";

interface NavbarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export default function Navbar({
  activeSection = "home",
  onSectionChange = () => {},
}: NavbarProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "menu", label: "Menu", icon: Utensils },
    { id: "pesan", label: "Pesan", icon: ShoppingCart },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-white/20 dark:border-white/10 hidden md:block">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <img
                src="/logo-light.png"
                alt="Logo"
                className="w-10 h-10 object-contain dark:hidden"
              />
              <img
                src="/logo.png"
                alt="Logo"
                className="w-10 h-10 object-contain hidden dark:block"
              />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Tong Hee Love
              </span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-green-500/20 text-green-400 shadow-lg"
                        : "text-foreground/80 hover:text-foreground hover:bg-white/10 dark:hover:bg-white/5"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Theme Switcher */}
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
                <Button
                size="sm"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg"
                onClick={() => onSectionChange("pesan")}
                >
                Pesan Sekarang
                </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar - iOS Style Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-md border-t border-white/20 dark:border-white/10 md:hidden">
        <div className="flex items-center justify-around py-2 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-green-500/20 text-green-400"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}

          {/* Theme Switcher for Mobile */}
          <div className="flex flex-col items-center space-y-1 px-3 py-2">
            <ThemeSwitcher />
            <span className="text-xs font-medium text-foreground/60">
              Theme
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
