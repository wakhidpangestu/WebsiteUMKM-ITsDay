import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onFinish?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [showLoading, setShowLoading] = useState(true);
  const [startCircle, setStartCircle] = useState(false);

  useEffect(() => {
    // Step 1: Wait for 3 seconds
    const timer = setTimeout(() => {
      setStartCircle(true);
    }, 3000);

    // Step 2: After circle animation, hide everything
    const finishTimer = setTimeout(() => {
      setShowLoading(false);
      if (onFinish) onFinish();
    }, 4600); // Allow 1.6s for the circle animation

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  if (!showLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden">
      {/* Logo GIF Animation */}
      {!startCircle && (
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGxwdjAyOWdrZXlvaDBvbXM1em1leXNzc2J0YXo5cG0yamJhNzl4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XkO29MOnJ7fHfwu0IM/giphy.gif"
          alt="Loading..."
          className="w-64 h-64 md:w-80 md:h-80 object-contain"
        />
      )}

      {/* Circle Transition */}
      <AnimatePresence>
        {startCircle && (
          <motion.div
            initial={{ width: 0, height: 0, borderRadius: "100%", top: 0, left: "50%", x: "-50%", y: 0 }}
            animate={{
              width: "3000px",
              height: "3000px",
              top: 0,
              left: "50%",
              x: "-50%",
              y: 0,
              transition: { duration: 1.6, ease: "easeInOut" }
            }}
            exit={{ opacity: 0 }}
            className="fixed z-50"
            style={{
              background: typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "#fff" : "#18181b"
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingScreen;
