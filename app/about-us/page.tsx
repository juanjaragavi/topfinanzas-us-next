"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutUsPage() {
  // State for FAQ accordion
  const [openFAQs, setOpenFAQs] = useState<{ [key: number]: boolean }>({});

  // Toggle FAQ open/closed state
  const toggleFAQ = (index: number) => {
    setOpenFAQs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // FAQ data structure
  const faqs = [
    {
      question: "What services does Top Finanzas offer?",
      answer: (
        <p>
          Top Finanzas offers financial advice, practical tools, and educational
          resources. For more details,
          <Link href="/" className="text-blue-600 hover:underline ml-1">
            visit our homepage
          </Link>
          .
        </p>
      ),
    },
    {
      question: "How can I improve my personal finances?",
      answer: (
        <p>
          Start by evaluating your income and expenses, establishing a budget,
          and setting clear financial goals. Find more advice on
          <Link href="/blog" className="text-blue-600 hover:underline ml-1">
            our blog
          </Link>
          .
        </p>
      ),
    },
    {
      question: "Does Top Finanzas offer personalized advice?",
      answer: (
        <p>
          Yes, we offer personalized services tailored to your needs and
          financial goals. For more information,
          <Link
            href="/contact-us"
            className="text-blue-600 hover:underline ml-1"
          >
            click here
          </Link>
          .
        </p>
      ),
    },
    {
      question: "How do I create an effective budget?",
      answer: (
        <p>
          Identify your income, list your expenses, prioritize your needs, and
          establish spending limits.
        </p>
      ),
    },
    {
      question: "How can I contact Top Finanzas?",
      answer: (
        <p>
          You can contact us through our online form, email, or phone by
          <Link
            href="/contact-us"
            className="text-blue-600 hover:underline ml-1"
          >
            clicking here
          </Link>
          .
        </p>
      ),
    },
    {
      question:
        "What resources does Top Finanzas offer to learn about investments?",
      answer: (
        <p>
          We offer articles, tutorials, and webinars on investments. Learn more
          in our
          <Link href="/blog" className="text-blue-600 hover:underline ml-1">
            investment section
          </Link>
          .
        </p>
      ),
    },
    {
      question: "How can I improve my credit score?",
      answer: (
        <p>
          Pay your bills on time, reduce your debts, and regularly review your
          credit report.
        </p>
      ),
    },
    {
      question: "What are the best strategies to save money?",
      answer: (
        <p>
          Automate your savings and regularly review your expenses. Find more
          strategies in our
          <Link href="/blog" className="text-blue-600 hover:underline ml-1">
            savings article
          </Link>
          .
        </p>
      ),
    },
    {
      question: "Does Top Finanzas offer free financial tools?",
      answer: <p>Yes, we offer calculators and other tools on our website.</p>,
    },
    {
      question: "How can I wisely invest my money?",
      answer: (
        <p>
          Research your options and consider speaking with a financial advisor.
          Learn more about
          <Link href="/blog" className="text-blue-600 hover:underline ml-1">
            investment options
          </Link>
          .
        </p>
      ),
    },
    {
      question: "Does Top Finanzas have a mobile app?",
      answer: (
        <p>
          We are currently developing an app to enhance the user experience.
        </p>
      ),
    },
    {
      question: "How do I manage credit card debt?",
      answer: (
        <p>
          Make payments above the minimum and consider consolidating your debts.
        </p>
      ),
    },
    {
      question:
        "Does Top Finanzas offer advice on retirement and long-term planning?",
      answer: (
        <p>
          Yes, we provide information and resources for your retirement and
          long-term financial security.
        </p>
      ),
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="space-y-12">
        {/* Hero Section with Image */}
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-lg mb-8">
          <Image
            src="https://storage.googleapis.com/media-topfinanzas-com/images/NOSOTROS2.jpg"
            alt="About Top Finanzas"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg px-4">
              Top Finanzas: Your guide in the world of personal finance
            </h1>
          </div>
        </div>

        {/* Introduction */}
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          <p className="font-medium text-xl text-[#2E74B5]">
            At Top Finanzas, we firmly believe that good financial management is
            the key to a fuller and more peaceful life.
          </p>
          <p>
            We are convinced that effective and responsible financial management
            is not only crucial for economic stability but also essential for
            achieving a more fulfilling and serene life. We understand that
            financial peace of mind is a critical component of overall
            well-being, and we strive to provide you with the tools and
            knowledge necessary to achieve it.
          </p>
          <p>
            Our goal is simple: to provide you with practical and
            easy-to-understand advice that empowers you financially, no matter
            where you are in your journey.
          </p>
          <p>
            Our approach focuses on breaking down complex financial concepts
            into simple, actionable advice tailored to different levels of
            experience and financial knowledge. From beginners in personal
            finance to individuals with investment experience, our aim is to
            offer you a clear and accessible guide that strengthens your
            financial autonomy.
          </p>
        </div>

        {/* Our Commitment Section */}
        <div className="py-8">
          <h2 className="text-3xl font-bold text-[#2E74B5] mb-8 text-center">
            Our Commitment
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border-t-4 border-[#2E74B5] shadow-sm">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3 text-[#2E74B5]">
                Quality Information
              </h3>
              <p className="text-gray-600">
                We are committed to providing up-to-date and relevant content,
                based on the latest trends and data in the financial sector. Our
                priority is to ensure you have access to truthful and useful
                information, allowing you to make informed decisions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-t-4 border-[#2E74B5] shadow-sm">
              <div className="text-3xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-3 text-[#2E74B5]">
                Community and Support
              </h3>
              <p className="text-gray-600">
                We are dedicated to building an inclusive and supportive
                community where you can find help and advice at every step of
                your financial journey. From interactive forums to online
                events, we aim to create a space for mutual learning and growth.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border-t-4 border-[#2E74B5] shadow-sm">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-[#2E74B5]">
                Tangible Results
              </h3>
              <p className="text-gray-600">
                Our focus is on helping you see concrete, practical improvements
                in how you manage your money. Whether you&apos;re saving for a
                specific goal or improving your credit score, we&apos;re here to
                help you achieve tangible and beneficial results.
              </p>
            </div>
          </div>
        </div>

        {/* Empowering Section */}
        <div className="bg-[#f0f7ff] p-8 md:p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-[#2E74B5] mb-6">
            Empowering Your Financial Decisions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Top Finanzas, we understand that every step in your financial
            journey is important. Whether you&apos;re just beginning to organize
            your personal finances or exploring advanced investment strategies,
            our content is carefully designed to give you the confidence and
            knowledge needed to make sound financial decisions. We accompany you
            at every stage, from choosing the most suitable credit card for your
            needs to offering strategies for planning your retirement.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="py-8">
          <h2 className="text-3xl font-bold text-[#2E74B5] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors"
                  aria-expanded={openFAQs[index] || false}
                >
                  <h3 className="font-semibold text-lg text-left flex items-center">
                    <span
                      className={`text-green-500 mr-2 transition-transform duration-300 ${
                        openFAQs[index] ? "rotate-90" : ""
                      }`}
                    >
                      ▸
                    </span>
                    {faq.question}
                  </h3>
                  <span className="text-gray-400">
                    {openFAQs[index] ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {openFAQs[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 border-t text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
