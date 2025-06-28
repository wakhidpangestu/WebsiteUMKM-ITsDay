"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Laptop, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ICON_SIZE = 16;
const CIRCLE_TRANSITION_DURATION = 0.7;
const CIRCLE_EASING = (t: number) =>
  t < 0.5
    ? 8 * t * t * t * t
    : 1 - Math.pow(-2 * t + 2, 4) / 2; // easeInOutQuart

// Komponen ThemeSwitcher dioptimasi untuk default theme system dan performa
const ThemeSwitcher = ({ mobile = false }: { mobile?: boolean }) => {
  const [mounted, setMounted] = useState(false);
  const [circleActive, setCircleActive] = useState(false);
  const [circleKey, setCircleKey] = useState(0);
  const [circleColor, setCircleColor] = useState("#fff");
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!theme) setTheme("system");
  }, [theme, setTheme]);
  useEffect(() => setMounted(true), []);

  // Ganti theme dan trigger animasi circle: animasi dulu, baru ganti theme
  const handleChange = useCallback((val: string) => {
    if (val === theme) return;
    let targetColor = "#fff";
    if (val === "dark") targetColor = "#18181b";
    else if (val === "system" && typeof window !== "undefined") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      targetColor = isDark ? "#18181b" : "#fff";
    }
    setCircleColor(targetColor);
    setCircleActive(true);
    setCircleKey((k) => k + 1);
    setTimeout(() => {
      setTheme(val);
      setCircleActive(false);
    }, CIRCLE_TRANSITION_DURATION * 1000);
  }, [setTheme, theme]);
  if (!mounted) return null;

  // Hitung ukuran dan posisi lingkaran animasi
  const getCircleStyle = () => {
    if (!buttonRef.current) return { top: 0, left: 0, width: 0, height: 0 };
    const btn = buttonRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const dx = Math.max(btn.left, vw - btn.right);
    const dy = Math.max(btn.top, vh - btn.bottom);
    const radius = Math.sqrt(dx * dx + dy * dy) + Math.max(btn.width, btn.height);
    const size = radius * 2;
    return {
      width: size,
      height: size,
      top: btn.top + btn.height / 2 - radius,
      left: btn.left + btn.width / 2 - radius,
    };
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button ref={buttonRef} variant="ghost" size="sm">
            <span style={{ display: "inline-flex" }}>
              <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                  <motion.span
                    key="light"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: "inline-flex" }}
                  >
                    <Sun size={ICON_SIZE} className="text-muted-foreground" />
                  </motion.span>
                ) : theme === "dark" ? (
                  <motion.span
                    key="dark"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: "inline-flex" }}
                  >
                    <Moon size={ICON_SIZE} className="text-muted-foreground" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="system"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: "inline-flex" }}
                  >
                    <Laptop size={ICON_SIZE} className="text-muted-foreground" />
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={`w-content ${mobile ? 'ml-2 mr-4 mt-3' : ''}`} align="start">
          <DropdownMenuRadioGroup value={theme || "system"} onValueChange={handleChange}>
            <DropdownMenuRadioItem className="flex gap-2" value="light">
              <Sun size={ICON_SIZE} className="text-muted-foreground" />
              <span>Light</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem className="flex gap-2" value="dark">
              <Moon size={ICON_SIZE} className="text-muted-foreground" />
              <span>Dark</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem className="flex gap-2" value="system">
              <Laptop size={ICON_SIZE} className="text-muted-foreground" />
              <span>System</span>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Circle Mask Transition */}
      <AnimatePresence>
        {circleActive && typeof window !== "undefined" && (
          <motion.div
            key={circleKey}
            initial={{ scale: 0, opacity: 0.7 }}
            animate={{ scale: 1.7, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: CIRCLE_TRANSITION_DURATION, ease: CIRCLE_EASING }}
            style={{
              position: "fixed",
              zIndex: 9999,
              pointerEvents: "none",
              background: circleColor,
              borderRadius: "50%",
              ...getCircleStyle(),
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export { ThemeSwitcher };
