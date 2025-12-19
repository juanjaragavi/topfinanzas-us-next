"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AboutUs() {
  const faqs = [
    {
      question: "What services does Top Finanzas offer?",
      answer: (
        <p>
          Top Finanzas offers financial advice, practical tools, and educational
          resources. For more details,{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            visit our main page
          </Link>
          .
        </p>
      ),
    },
    {
      question: "How can I improve my personal finances?",
      answer: (
        <p>
          Start by evaluating your income and expenses, setting a budget, and
          establishing clear financial goals. Find more tips on our{" "}
          <Link href="/blog" className="text-blue-600 hover:underline">
            blog
          </Link>
          .
        </p>
      ),
    },
    {
      question: "Does Top Finanzas offer personalized advice?",
      answer: (
        <p>
          Yes, we offer personalized services tailored to your financial needs
          and goals. For more information,{" "}
          <Link href="/contact-us" className="text-blue-600 hover:underline">
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
          set spending limits.
        </p>
      ),
    },
    {
      question: "How can I contact Top Finanzas?",
      answer: (
        <p>
          You can contact us through our online form, email, phone, or by{" "}
          <Link href="/contact-us" className="text-blue-600 hover:underline">
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
          in our{" "}
          <Link href="/blog" className="text-blue-600 hover:underline">
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
          strategies in our{" "}
          <Link href="/blog" className="text-blue-600 hover:underline">
            savings article
          </Link>
          .
        </p>
      ),
    },
    {
      question: "Does Top Finanzas offer free financial tools?",
      answer: (
        <p>
          Yes, we offer calculators and other tools on our website.
        </p>
      ),
    },
    {
      question: "How can I wisely invest my money?",
      answer: (
        <p>
          Research your options and consider speaking with a financial advisor.
          Learn more about{" "}
          <Link href="/blog" className="text-blue-600 hover:underline">
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
          We are currently developing an app to improve the user experience.
        </p>
      ),
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen flex flex-col px-4 sm:px-6">
        <div className="container mx-auto px-4 py-8 max-w-7xl bg-white">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
            Top Finanzas: Your guide in the world of personal finance
          </h1>

          <div className="mb-12">
            <Image
              src="https://media.topfinanzas.com/images/placeholder.webp"
              alt="Top Finanzas Team"
              width={1180}
              height={307}
              className="w-full h-auto object-cover shadow-sm"
              priority
            />
          </div>

          <section className="mb-16">
            <p className="font-bold text-lg mb-6 text-gray-900">
              At Top Finanzas, we firmly believe that good financial management
              is the key to a fuller and more peaceful life.
            </p>

            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              We are convinced that effective and responsible financial
              management is not only crucial for economic stability but also
              essential for achieving a more fulfilling and serene life. We
              understand that financial peace of mind is a critical component of
              overall well-being, and we strive to provide you with the tools
              and knowledge necessary to achieve it.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Our goal is simple: to provide you with practical and
              easy-to-understand advice that empowers you financially, no matter
              where you are in your journey.
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our approach focuses on breaking down complex financial concepts
              into simple, actionable advice tailored to different levels of
              experience and financial knowledge. From beginners in personal
              finance to individuals with investment experience, our aim is to
              offer you a clear and accessible guide that strengthens your
              financial autonomy.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Our Commitment
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-bold">📚 Quality Information:</span> We
                are committed to providing up-to-date and relevant content,
                based on the latest trends and data in the financial sector. Our
                priority is to ensure you have access to truthful and useful
                information, allowing you to make informed decisions.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-bold">🌟 Community and Support:</span> We
                are dedicated to building an inclusive and supportive community
                where you can find help and advice at every step of your
                financial journey. From interactive forums to online events, we
                aim to create a space for mutual learning and growth.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-bold">📊 Tangible Results:</span> Our
                focus is on helping you see concrete, practical improvements in
                how you manage your money. Whether you&apos;re saving for a
                specific goal or improving your credit score, we&apos;re here to
                help you achieve tangible and beneficial results.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Empowering Your Financial Decisions
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Top Finanzas, we understand that every step in your financial
              journey is important. Whether you&apos;re just beginning to
              organize your personal finances or exploring advanced investment
              strategies, our content is carefully designed to give you the
              confidence and knowledge needed to make sound financial decisions.
              We accompany you at every stage, from choosing the most suitable
              credit card for your needs to offering strategies for planning
              your retirement.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#7abb41]">
              Frequently Asked Questions
            </h2>

            <div className="max-w-4xl mx-auto">
              {/* Splitting FAQs into two columns as per typical layout, or keeping single column but styled closer to screens */}
              <div className="grid grid-cols-1 gap-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 py-4">
                    <h3 className="font-bold text-[#7abb41] mb-2 flex items-start">
                      <span className="mr-2 text-xs mt-1">▲</span>
                      {faq.question}
                    </h3>
                    <div className="text-gray-700 pl-5">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
