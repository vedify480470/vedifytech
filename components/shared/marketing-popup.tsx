"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

const SHOW_DELAY_MS = 1500;

export function MarketingPopup() {
  const [isOpen, setIsOpen] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { x: "110%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { x: "110%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed right-4 top-36 z-50 sm:right-6 sm:top-40"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10">
            <button
              type="button"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
              className="absolute right-2 top-2 z-10 flex size-7 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
            >
              <X className="size-4" />
            </button>
            <Image
              src="/marketing/6111535989319733610.jpg"
              alt="Vedify Solutions marketing banner"
              width={480}
              height={630}
              className="h-auto w-72 object-cover sm:w-100"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
