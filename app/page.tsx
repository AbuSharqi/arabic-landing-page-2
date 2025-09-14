"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Moon, Sword, Shield, BookText, Quote, User } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
import LandingNavbar from "@/components/landing-navbar";
import { useRouter } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DemoAlert } from "@/components/demo-alert";
import { Keyboard } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import PricingPlan from "@/components/pricing-plan";
import { pricingPlans } from "@/lib/pricing-plans";
import {
  Clock, Frown, TrendingDown, RefreshCw, Lightbulb,
  Rocket, Target, FastForward, MessageCircle, Award,
  Flag, Gauge, CheckCircle, Trophy, BarChart
} from 'lucide-react';
import ProfilePicturePlaceholder from "@/lib/profile-picture-placeholder.jpg";
import Link from "next/link";
import HeroSection from "@/components/sections/hero";
import ChallengesSection from "@/components/sections/challenges";
import DemoSection from "@/components/sections/demo";
import TestimonialsSection from "@/components/sections/testimonials";

const faqs = [
  {
    question: "How long does it take to complete the Quran course?",
    answer: "The duration varies based on your commitment and prior knowledge. Most students complete our foundational program in 6-9 months with regular study. We offer flexible pacing options to accommodate different schedules."
  },
  {
    question: "Are your instructors certified?",
    answer: "Yes, all our instructors hold traditional Ijazah (certification) in Quranic recitation and Tajweed. Many are graduates of prestigious institutions like Al-Azhar University and have extensive teaching experience."
  },
  {
    question: "What if I miss a class?",
    answer: "All sessions are recorded and available in your student portal. You can review missed classes at your convenience and schedule make-up sessions with your instructor if needed."
  },
  {
    question: "Do I need prior Arabic knowledge?",
    answer: "No, our courses are designed for all levels. We have specialized tracks for complete beginners that start with Arabic alphabet recognition and build up to fluent Quran recitation."
  },
  {
    question: "Can children enroll in these courses?",
    answer: "Absolutely! We have specialized programs for children aged 6+ with child-friendly teaching methods, interactive activities, and parental progress tracking. All our children's instructors are trained in child education."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function PrimaryLanding() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('traditional');
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'l' || e.key === 'L') {
        setShowLeaderboard(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen dark:bg-slate-900">
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

      <motion.section
        id="pricing"
        className="py-16 bg-white dark:bg-slate-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-900 dark:text-white mb-4">
              Transform Your Learning
            </h2>
            <p className="text-orange-600 dark:text-orange-400 max-w-2xl mx-auto">
              Choose the path that fits your journey to Quranic mastery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch mb-20">
            {pricingPlans.map((plan, index) => (
              <PricingPlan key={index} plan={plan} />
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-orange-900 dark:text-white mb-3">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-orange-200 dark:border-slate-700"
                >
                  <AccordionTrigger className="cursor-pointer text-lg font-medium text-orange-500 dark:text-slate-200 hover:no-underline hover:text-orange-700 dark:hover:text-orange-300 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-orange-700 dark:text-slate-300 pb-4 text-md leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-orange-700 dark:text-slate-300">
                Still have questions?{" "}
                <a
                  href=""
                  className="text-orange-600 dark:text-orange-400 font-semibold hover:underline"
                >
                  Contact our support team
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}