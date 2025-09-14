"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AlertTriangle } from 'lucide-react';
import { Card } from "@/components/ui/card";

export function DemoAlert() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the alert after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50, scale: isVisible ? 1 : 0.95 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed bottom-4 right-4 z-50 pointer-events-none"
    >
      <Card className="p-4 bg-yellow-500/90 backdrop-blur-lg border-yellow-600 text-white rounded-lg shadow-lg max-w-xs">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-white flex-shrink-0" />
          <p className="text-sm font-medium">
            Disclaimer: All statistics shown are for demonstration purposes only.
          </p>
        </div>
      </Card>
    </motion.div>
  );
}