"use client";

// [ React Imports ]
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';

// [ Third Party Imports ]
import { motion } from "framer-motion";

// [ Library Imports ]
import { containerVariants, itemVariants } from "@/lib/motionVariants";

// [ Loading Compoent(s) ]
import { Button } from "@/components/ui/button";
import { DemoAlert } from "@/components/demo-alert";
import LandingNavbar from "@/components/landing-navbar";

// [ Loading Sections ]
import HeroSection from "@/components/sections/hero";
import ChallengesSection from "@/components/sections/challenges";
import DemoSection from "@/components/sections/demo";
import TestimonialsSection from "@/components/sections/testimonials";
import PricingSection from "@/components/sections/pricing";



export default function PrimaryLanding() {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-slate-900">
      {/* Navbar */}
      <LandingNavbar />

      {/* Corner Disclaimer */}
      <DemoAlert />

      {/* Hero Section */}
      <HeroSection />

      {/* Problems and Solutions Section */}
      <ChallengesSection />

      {/* Teacher Profile */}
      <DemoSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}