"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import OptionButton from "../ui/option-button";
import { step2Strings } from "@/lib/strings";
import ProgressIndicator from "../ProgressIndicator";
import VisitorCounter from "../VisitorCounter";

interface Step2Props {
  formData: {
    income: string;
  };
  updateFormData: (data: { income: string }) => void;
}

export default function Step2({ formData, updateFormData }: Step2Props) {
  const [selected, setSelected] = useState(formData.income);

  const options = step2Strings.options;

  const handleSelect = (id: string) => {
    setSelected(id);
    updateFormData({ income: id });
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <ProgressIndicator step={2} />

      <div className="text-center mt-2 sm:mt-8">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-800 leading-tight">
          ¿Cuál es tu <span className="text-[#2E74B5]">ingreso mensual?</span>
        </h1>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-8"
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

      <div className="mt-6 sm:mt-16 flex justify-center scale-75 sm:scale-100 origin-center">
        <VisitorCounter />
      </div>
    </div>
  );
}
