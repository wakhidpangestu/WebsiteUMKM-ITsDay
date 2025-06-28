"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedTextReveal({ text, className = "" }: { text: string; className?: string }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.035 }, 
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 16, filter: "blur(6px)" }, 
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.38, ease: [0.42, 0, 0.58, 1] }, 
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={child} className="mr-2 inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
