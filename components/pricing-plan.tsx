"use client";
import type { PricingPlan } from "@/lib/pricing-plans";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';

type TooltipContent = {
  [key: string]: string;
};

interface PricingPlanProps {
  plan: PricingPlan;
}

export default function PricingPlan({ plan }: { plan: PricingPlan }) {
  // Tooltip content for keywords
  const tooltips: TooltipContent = {
    "Ijazah": "Traditional certification granting permission to teach",
    "Sanad-Verified": "Curriculum verified through authentic scholarly chains",
    "Makharij": "Proper articulation points of Arabic letters",
    "Tajweed": "Rules of Quranic recitation",
    "Qira'at": "Different methods of Quranic recitation"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative p-8 rounded-2xl shadow-lg flex flex-col h-full 
        ${plan.isHighlighted
          ? "border-2 border-orange-500 bg-white dark:bg-slate-800"
          : "border border-orange-100 dark:border-slate-700 bg-orange-50 dark:bg-slate-800"
        }`}
    >
      {plan.isHighlighted && (
        <div className="absolute top-0 right-0 -mt-4 mr-6 bg-orange-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Most Popular
        </div>
      )}

      {plan.discount && (
        <div className="absolute top-0 left-0 -mt-4 ml-6 bg-amber-500 text-white px-3 py-1 rounded-full text-sm">
          {plan.discount} OFF
        </div>
      )}

      <h3 className="text-2xl font-bold text-orange-900 dark:text-white mb-4">{plan.title}</h3>

      <div className="mb-6">
        {plan.originalPrice && (
          <span className="text-xl line-through text-orange-400 mr-2">
            ${plan.originalPrice}
          </span>
        )}
        <span className="text-4xl font-bold text-orange-600 dark:text-orange-400">${plan.price}</span>
        <span className="text-orange-500 dark:text-orange-300">/month</span>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => {
          // Parse feature text for tooltips
          const parts = feature.split(/(\*\*.*?\*\*)/g).map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              const keyword = part.slice(2, -2);
              return (
                <span
                  key={i}
                  data-tooltip-id="pricing-tooltip"
                  data-tooltip-content={tooltips[keyword]}
                  className="border-b border-dashed border-orange-400 cursor-help mx-1"
                >
                  {keyword}
                  <Info className="w-3 h-3 inline-block ml-1 mb-[2px]" />
                </span>
              );
            }
            return part;
          });

          return (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 shrink-0" />
              <span className="text-orange-700 dark:text-slate-300">{parts}</span>
            </li>
          );
        })}
      </ul>

      <Tooltip id="pricing-tooltip" className="max-w-[250px] z-[100] dark:!bg-slate-700 dark:!text-white" />

      <div className="h-[80px]">
        <Button className="w-full text-lg h-14 bg-orange-600 hover:bg-orange-700 cursor-pointer text-white">
          Get Started
        </Button>
      </div>

      {plan.isHighlighted && (
        <div className="mt-6 pt-6 border-t border-orange-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <Avatar key={i} className="w-10 h-10 border-2 border-white">
                  <AvatarImage src={`/images/avatar-${i}.jpg`} />
                  <AvatarFallback className="bg-orange-100 text-orange-600">
                    S{i}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-sm text-orange-600">
              Hundreds of students benefit!
            </p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-slate-700 rounded-lg">
            <h4 className="text-lg font-semibold text-orange-900 dark:text-white mb-2">
              Best of our Program
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-orange-700 dark:text-slate-300">
              <li>Sanad-Verified Curriculum</li>
              <li>Traditional Teaching Methods</li>
              <li>Modern Doubt Protection</li>
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
}