"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import OptionButton from "../ui/option-button";
import { step1Strings } from "@/lib/strings";
import ProgressIndicator from "../ProgressIndicator";
import VisitorCounter from "../VisitorCounter";

interface Step1Props {
  formData: {
    preference: string;
  };
  updateFormData: (data: { preference: string }) => void;
}

export default function Step1({ formData, updateFormData }: Step1Props) {
  const [selected, setSelected] = useState(formData.preference);

  const options = step1Strings.options;

  const handleSelect = (id: string) => {
    setSelected(id);
    updateFormData({ preference: id });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <ProgressIndicator step={1} />

      <div className="text-center space-y-2 sm:space-y-4">
        <h1 className="text-xl sm:text-3xl font-bold text-[#2E74B5] leading-tight">
          {step1Strings.title}
        </h1>
        <p className="text-gray-700 font-bold text-sm sm:text-lg leading-tight">
          Answer so our technology can choose{" "}
          <span className="text-[#2E74B5]">the best credit card for you</span>
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-base sm:text-2xl font-bold text-gray-800 leading-tight">
          {step1Strings.question}
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-2 sm:mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, staggerChildren: 0.1 }}
      >
        {options.map((option, index) => (
          <OptionButton
            key={option.id}
            id={option.id}
            label={option.label}
            selected={selected === option.id}
            onClick={() => handleSelect(option.id)}
            delay={0.1 * index}
          />
        ))}
      </motion.div>

      <div className="mt-4 sm:mt-12 flex justify-center scale-75 sm:scale-100 origin-center">
        <VisitorCounter />
      </div>
    </div>
  );
}
