"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { FeaturedPostCard } from "@/components/ui/featured-post-card";
import { motion, AnimatePresence } from "framer-motion";
import { BlogLayout } from "@/components/mdx/blog-layout"; // Assuming this layout is suitable
import { Button } from "@/components/ui/button"; // For pagination

// Define the structure for each post item, adding category
interface PostItem {
  title: string;
  slug: string;
  description: string;
  image: string;
  category: "Personal Finance" | "Financial Solutions";
  categoryPath: string;
  date?: string; // Optional date
}

// Helper function to clean titles
const cleanTitle = (title: string): string => {
  return title.split("|")[0].split(":")[0].split(" - ")[0].trim();
};

export default function BlogArchivePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const postsPerPage = 9; // Display 9 posts per page (3x3 grid)

  // Categories for filtering
  const categories = {
    all: "All Articles",
    personalFinance: "Personal Finance",
    financialSolutions: "Financial Solutions",
    creditCards: "Credit Cards",
    loans: "Loans",
  };

  // Combine posts from both categories
  const allPosts: PostItem[] = [
    {
      title: "Chase Sapphire Preferred Credit Card Benefits",
      slug: "chase-sapphire-preferred-credit-card-benefits",
      description:
        "Unlock exceptional travel rewards with the Chase Sapphire Preferred Credit Card. Earn 3x points on dining, enjoy a 60,000-point sign-up bonus, and travel with built-in protections.",
      image:
        "https://media.topfinanzas.com/images/chase-sapphire-preferred-credit-card-benefits.webp",
      date: "February 27, 2026",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Chase Sapphire Preferred Credit Card Requirements",
      slug: "chase-sapphire-preferred-credit-card-requirements",
      description:
        "Discover the Chase Sapphire Preferred Credit Card requirements and application tips. Learn how to meet eligibility criteria.",
      image:
        "https://media.topfinanzas.com/images/chase-sapphire-preferred-credit-card-requirements.webp",
      date: "February 27, 2026",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Citi Simplicity Card Benefits",
      slug: "citi-simplicity-card-benefits",
      description:
        "Say goodbye to late fees and hello to financial freedom. The Citi Simplicity Card offers no late fees, no annual fee, and a lengthy 0% intro APR period.",
      image:
        "https://media.topfinanzas.com/images/citi-simplicity-card-benefits.webp",
      date: "February 27, 2026",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Citi Simplicity Card Requirements",
      slug: "citi-simplicity-card-requirements",
      description:
        "Zero fees, zero hassle—here’s how to qualify. The Citi Simplicity Card is an excellent choice for those seeking convenience and cost-saving benefits.",
      image:
        "https://media.topfinanzas.com/images/citi-simplicity-card-requirements.webp",
      date: "February 27, 2026",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Benefits of the Discover it Student Cash Back Card",
      slug: "benefits-of-the-discover-it-student-cash-back-card",
      description:
        "The Discover it Student Cash Back Card is tailor-made for students who want to build credit and earn rewards simultaneously. Packed with features, it’s the ideal companion for college life.",
      image:
        "https://media.topfinanzas.com/images/benefits-of-the-discover-it-student-cash-back-card.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Requirements for the Discover it Student Cash Back Card",
      slug: "requirements-for-the-discover-it-student-cash-back-card",
      description:
        "A student’s gateway to credit benefits: The Discover it Student Cash Back Card offers unmatched rewards for students looking to establish credit.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-the-discover-it-student-cash-back-card.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Benefits: VentureOne Rewards from Capital One",
      slug: "benefits-capital-one-ventureone-rewards",
      description:
        "Unlock simplicity & travel rewards: The Capital One VentureOne Card offers hassle-free perks with no annual fee—perfect for stress-free adventures!",
      image:
        "https://media.topfinanzas.com/images/benefits-capital-one-ventureone-rewards.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Requirements for Capital One VentureOne Rewards Credit Card",
      slug: "requirements-for-capital-one-ventureone-rewards-credit-card",
      description:
        "Embark on a journey of rewards: Your path to simplicity and savings. Check credit score and documentation requirements for the Capital One VentureOne.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-capital-one-ventureone-rewards-credit-card.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Capital One Venture X Rewards Credit Card Benefits",
      slug: "capital-one-venture-x-rewards-credit-card-benefits",
      description:
        "Unlock luxury & rewards: Elevate every journey with exclusive perks, premium travel benefits, and accelerated rewards tailored for frequent travelers.",
      image:
        "https://media.topfinanzas.com/images/capital-one-venture-x-rewards-credit-card-benefits.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Capital One Venture X Rewards Credit Card Requirements",
      slug: "capital-one-venture-x-rewards-credit-card-requirements",
      description:
        "Elevate your travel experience with Venture X. Check credit score, income, and residency requirements to qualify for premium rewards.",
      image:
        "https://media.topfinanzas.com/images/capital-one-venture-x-rewards-credit-card-requirements.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Capital One Spark Cash Plus Benefits",
      slug: "capital-one-spark-cash-plus-benefits",
      description:
        "Unleash unlimited rewards for your business with the Capital One Spark Cash Plus. Earn 2% cash back on every purchase.",
      image:
        "https://media.topfinanzas.com/images/capital-one-spark-cash-plus-benefits.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Wells Fargo Autograph Card benefits: Maximize your rewards",
      slug: "wells-fargo-autograph-card-benefits",
      description:
        "Unlock the full potential of your everyday spending with rewards that match your lifestyle. No annual fee and 3x points on popular categories.",
      image:
        "https://media.topfinanzas.com/images/wells-fargo-autograph-card-benefits.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Wells Fargo Autograph Card Requirements",
      slug: "wells-fargo-autograph-card-requirements",
      description:
        "The Wells Fargo Autograph Card offers versatile rewards for everyday spending. Understanding the qualifications is the first step.",
      image:
        "https://media.topfinanzas.com/images/wells-fargo-autograph-card-requirements.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Titanium Rewards Visa Signature credit card benefits",
      slug: "titanium-rewards-visa-signature-credit-card-benefits",
      description:
        "Turn your everyday expenses into extraordinary rewards with unmatched earning potential.",
      image:
        "https://media.topfinanzas.com/images/titanium-rewards-visa-signature-credit-card-benefits.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Titanium Rewards Visa Signature credit card requirements",
      slug: "titanium-rewards-visa-signature-credit-card-requirements",
      description:
        "The Titanium Rewards Visa Signature Card by Andrews Federal Credit Union offers exceptional rewards on everyday spending categories.",
      image:
        "https://media.topfinanzas.com/images/titanium-rewards-visa-signature-credit-card-requirements.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "The benefits of the Capital One Platinum Secured Credit Card",
      slug: "benefits-of-the-capital-one-platinum-secured-credit-card",
      description:
        "If you’re building or rebuilding your credit, the Capital One Platinum Secured Credit Card is your perfect ally.",
      image:
        "https://media.topfinanzas.com/images/benefits-of-the-capital-one-platinum-secured-credit-card.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Requirements of the Capital One Platinum Secured Credit Card",
      slug: "requirements-of-the-capital-one-platinum-secured-credit-card",
      description:
        "A secured option to build credit effortlessly: The Capital One Platinum Secured Credit Card is designed for those starting their credit journey.",
      image:
        "https://media.topfinanzas.com/images/requirements-of-the-capital-one-platinum-secured-credit-card.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Capital One Spark Cash Plus Requirements",
      slug: "capital-one-spark-cash-plus-requirements",
      description:
        "Power your business with unlimited cash back. Check credit score, business revenue, and entity requirements for the Spark Cash Plus.",
      image:
        "https://media.topfinanzas.com/images/capital-one-spark-cash-plus-requirements.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "American Express Platinum Card Requirements",
      slug: "american-express-platinum-card-requirements",
      description:
        "The Platinum Card from American Express offers outstanding perks. Check credit score, income, and residency requirements to qualify.",
      image:
        "https://media.topfinanzas.com/images/american-express-platinum-card-requirements.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Ink Business Unlimited Credit Card Benefits",
      slug: "ink-business-unlimited-credit-card-benefits",
      description:
        "With no annual fee and unlimited 1.5% cash back, Ink Business Unlimited is an essential tool for scaling your business.",
      image:
        "https://media.topfinanzas.com/images/ink-business-unlimited-credit-card-benefits.webp",
      date: "January 28, 2026",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Ink Business Unlimited® Credit Card Requirements",
      slug: "ink-business-unlimited-credit-card-requirements",
      description:
        "Need to qualify for Ink Business Unlimited? Check credit score needs, business proof, and income requirements to unlock unlimited cash back.",
      image:
        "https://media.topfinanzas.com/images/ink-business-unlimited-credit-card-requirements.webp",
      date: "January 27, 2026",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Discover the Benefits of the American Express® Gold Card",
      slug: "benefits-of-the-american-express-gold-card",
      description:
        "Maximize rewards on dining, travel, and daily spending. Turn expenses into experiences with the Amex Gold Card. Unlock its benefits today!",
      image:
        "https://media.topfinanzas.com/images/benefits-of-the-american-express-gold-card.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title:
        "Requirements to Qualify for the American Express® Gold Card: What You Need to Know",
      slug: "requirements-to-qualify-for-the-american-express-gold-card",
      description:
        "Unlock the Gold Standard: Great credit, steady income, and endless rewards await. See if the Amex Gold Card is for you!",
      image:
        "https://media.topfinanzas.com/images/requirements-to-qualify-for-the-american-express-gold-card.webp",
      date: "January 27, 2026",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title:
        "Benefits of the Citi® Diamond Preferred® Card: The best choice for balance transfers",
      slug: "benefits-of-the-citi-diamond-preferred-card",
      description:
        "Save big with 0% APR for 21 months on balance transfers. The Citi® Diamond Preferred® Card is your go-to tool to manage debt smarter—no annual fee!",
      image:
        "https://media.topfinanzas.com/images/benefits-of-the-citi-diamond-preferred-card.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Requirements to Qualify for the Citi® Diamond Preferred® Card",
      slug: "requirements-to-qualify-for-the-citi-diamond-preferred-card",
      description:
        "Good credit, steady income, and a clean history—qualify for the Citi® Diamond Preferred® Card and enjoy 0% APR for 21 months.",
      image:
        "https://media.topfinanzas.com/images/requirements-to-qualify-for-the-citi-diamond-preferred-card.webp",
      date: "January 27, 2026",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title:
        "Benefits of the Wells Fargo Reflect® Card: Maximize your savings on interest",
      slug: "benefits-of-the-wells-fargo-reflect-card",
      description:
        "Save big with 0% APR for 21 months on purchases and balance transfers. The Wells Fargo Reflect® Card makes managing debt simple and cost-effective—no annual fee required!",
      image:
        "https://media.topfinanzas.com/images/benefits-of-the-wells-fargo-reflect-card.webp",
      date: "January 27, 2026",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Requirements to Qualify for the Wells Fargo Reflect® Card",
      slug: "requirements-to-qualify-for-the-wells-fargo-reflect-card",
      description:
        "Good credit unlocks 21 months of 0% APR with the Wells Fargo Reflect® Card. Simplify your finances today!",
      image:
        "https://media.topfinanzas.com/images/requirements-to-qualify-for-the-wells-fargo-reflect-card.webp",
      date: "January 27, 2026",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Requirements to qualify for the Discover it® Cash Back",
      slug: "requirements-to-qualify-for-the-discover-it-cash-back",
      description:
        "Qualifying for the Discover it® Cash Back card requires good credit. Learn about the credit score, income, and history requirements.",
      image:
        "https://media.topfinanzas.com/images/requirements-to-qualify-for-the-discover-it-cash-back.webp",
      date: "January 27, 2026",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title:
        "Benefits of the Discover it® Cash Back: Smart rewards and savings",
      slug: "benefits-of-the-discover-it-cash-back",
      description:
        "The Discover it® Cash Back offers flexible rewards, 5% cash back in rotating categories, and no annual fee. Learn why it might be the perfect tool for you.",
      image:
        "https://media.topfinanzas.com/images/benefits-of-the-discover-it-cash-back.webp",
      date: "January 27, 2026",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title:
        "Benefits Capital One Savor Cash Rewards Credit Card: Maximize Your Rewards",
      slug: "benefits-capital-one-savor-cash-rewards-credit-card",
      description:
        "A card designed for life’s tasty moments. Explore the unlimited cash back and travel perks of the Capital One Savor Card.",
      image:
        "https://media.topfinanzas.com/images/benefits-capital-one-savor-cash-rewards-credit-card.webp",
      date: "January 27, 2026",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Requirements for the Capital One Savor Cash Rewards Credit Card",
      slug: "requirements-for-the-capital-one-savor-cash-rewards-credit-card",
      description:
        "The Capital One Savor Card is targeted at individuals with excellent credit. Learn about the requirements, eligibility factors, and how to apply.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-the-capital-one-savor-cash-rewards-credit-card.webp",
      date: "January 27, 2026",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title:
        "Benefits for the Bank of America® Travel Rewards Credit Card for Students",
      slug: "benefits-for-the-bank-of-america-travel-rewards-credit-card-for-students",
      description:
        "The Bank of America® Travel Rewards Credit Card for Students is designed for young adventurers looking to make the most of their travel experiences.",
      image:
        "https://media.topfinanzas.com/images/benefits-for-the-bank-of-america-travel-rewards-credit-card-for-students.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title:
        "Requirements for the Bank of America® Travel Rewards Credit Card for Students",
      slug: "requirements-for-the-bank-of-america-travel-rewards-credit-card-for-students",
      description:
        "Essential steps to qualify for the perfect student credit card. Learn about the requirements and application process for the Bank of America® Travel Rewards Credit Card for Students.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-the-bank-of-america-travel-rewards-credit-card-for-students.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title:
        "Benefits for the Bank of America® Unlimited Cash Rewards Credit Card for Students",
      slug: "benefits-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students",
      description:
        "The Bank of America® Unlimited Cash Rewards Credit Card for Students is the ultimate tool for those looking to earn while they spend.",
      image:
        "https://media.topfinanzas.com/images/benefits-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title:
        "Requirements for the Bank of America® Unlimited Cash Rewards Credit Card for Students",
      slug: "requirements-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students",
      description:
        "A complete guide to meeting application requirements for U.S.-based students looking to build credit responsibly with Bank of America.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-the-bank-of-america-unlimited-cash-rewards-credit-card-for-students.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Benefits QuickBridge Loans",
      slug: "benefits-quickbridge-loans",
      description:
        "QuickBridge Loans provide fast, flexible funding for small businesses to grow, manage cash flow, or invest—without the red tape.",
      image:
        "https://media.topfinanzas.com/images/benefits-quickbridge-loans.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "QuickBridge Loans Requirements",
      slug: "quickbridge-loans-requirements",
      description:
        "A straightforward guide to securing your next business loan. Learn about QuickBridge Loans eligibility requirements and application process.",
      image:
        "https://media.topfinanzas.com/images/quickbridge-loans-requirements.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Bank of America Business Loans Requirements: Your Best Option",
      slug: "bank-of-america-business-loans-requirements",
      description:
        "Unlock the financing you need for your business with simple requirements. Learn about Bank of America's business loan eligibility and application process.",
      image:
        "https://media.topfinanzas.com/images/bank-of-america-business-loans-requirements.webp",
      date: "October 24, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Bank of America Business Loan Benefits",
      slug: "bank-of-america-business-loans-benefits",
      description:
        "Maximize your business potential with Bank of America. Discover tailored loans, credit lines, and rewards designed to fuel your growth.",
      image:
        "https://media.topfinanzas.com/images/bank-of-america-business-loans-benefits.webp",
      date: "October 31, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "National Funding Benefits",
      slug: "national-funding-benefits",
      description:
        "As a small business owner, finding reliable and fast financing options can be one of the most challenging aspects of running your business. Discover the benefits of National Funding.",
      image:
        "https://media.topfinanzas.com/images/national-funding-benefits.webp",
      date: "October 24, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Requirements for National Funding Loans",
      slug: "requirements-for-national-funding-loans",
      description:
        "Unlock your business potential with National Funding. Learn about the requirements, application journey, and eligibility factors for quick and flexible financing.",
      image:
        "https://media.topfinanzas.com/images/requirements-for-national-funding-loans.webp",
      date: "October 24, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Smarter financing for your business: Fundbox benefits",
      slug: "smarter-financing-for-your-business-fundbox-benefits",
      description:
        "Simplifying cash flow management for modern businesses. Fundbox offers flexible lines of credit to keep your operations moving.",
      image:
        "https://media.topfinanzas.com/images/smarter-financing-for-your-business-fundbox-benefits.webp",
      date: "October 24, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title: "Fundbox Loan Requirements",
      slug: "fundbox-loan-requirements",
      description:
        "Fundbox offers small business owners an easy way to manage cash flow. Learn about the requirements, eligibility factors, and how to apply.",
      image:
        "https://media.topfinanzas.com/images/fundbox-loan-requirements.webp",
      date: "October 24, 2025",
      category: "Financial Solutions",
      categoryPath: "financial-solutions",
    },
    {
      title:
        "Yours, Mine, or Ours? How to Strategically Combine Finances After Marriage (or Moving In)",
      slug: "yours-mine-or-ours-how-to-strategically-combine-finances-after-marriage-or-moving-in",
      description:
        "Moving in with a partner or getting married is a huge, exciting step. But what about your finances? This guide will walk you through how to tackle this conversation.",
      image:
        "https://media.topfinanzas.com/images/yours-mine-or-ours-how-to-strategically-combine-finances-after-marriage-or-moving-in.webp",
      date: "September 17, 2025",
      category: "Personal Finance",
      categoryPath: "personal-finance",
    },
    {
      title: "Good Debt vs. Bad Debt: How to Tell the Difference",
      slug: "good-debt-vs-bad-debt-how-to-tell-the-difference",
      description:
        "If you’re just starting your career, the word “debt” probably sounds like a four-letter word. We’re often taught that borrowing money is bad and should be avoided at all costs. While that’s good advice for avoiding financial trouble, it’s not the whole story.",
      image:
        "https://media.topfinanzas.com/images/good-debt-vs-bad-debt-how-to-tell-the-difference.webp",
      date: "September 3, 2025",
      category: "Personal Finance",
      categoryPath: "personal-finance",
    },
    {
      title:
        "The Magic of Compound Interest: How Your Money Can Grow Over Time",
      slug: "good-debt-vs-bad-debt-how-to-tell-the-difference-2",
      description:
        "Understanding this single concept is one of the most powerful things you can do for your personal finance journey, turning small, consistent savings into significant wealth down the road.",
      image:
        "https://media.topfinanzas.com/images/good-debt-vs-bad-debt-how-to-tell-the-difference-2.webp",
      date: "September 5, 2025",
      category: "Personal Finance",
      categoryPath: "personal-finance",
    },
    {
      title: "Investing for Beginners: A Simple Guide to Getting Started",
      slug: "investing-for-beginners-a-simple-guide-to-getting-started",
      description:
        "This guide will break down the basics of investing into simple, actionable steps. It’s a crucial part of taking control of your personal finance and building long-term wealth.",
      image:
        "https://media.topfinanzas.com/images/investing-for-beginners-a-simple-guide-to-getting-started.webp",
      date: "September 10, 2025",
      category: "Personal Finance",
      categoryPath: "personal-finance",
    },
    {
      title:
        "A Savvy Traveler's Guide: Using Credit Card Points for Thanksgiving Travel",
      slug: "a-savvy-travelers-guide-using-credit-card-points-for-thanksgiving-travel",
      description:
        "Master your travel rewards to save on Thanksgiving travel. Learn how to use credit card points strategically to book flights, hotels, and more without breaking your holiday budget.",
      image:
        "https://media.topfinanzas.com/images/a-savvy-travelers-guide-using-credit-card-points-for-thanksgiving-travel.webp",
      date: "September 10, 2025",
      category: "Personal Finance",
      categoryPath: "personal-finance",
    },
    {
      title:
        "Guide: How to Use Multiple Credit Cards to Maximize Your FICO Score",
      slug: "guide-how-to-use-multiple-credit-cards-to-maximize-your-fico-score",
      description:
        "Discover how to use multiple credit cards strategically to maximize your FICO score. Learn about credit utilization, payment history, and best practices for managing multiple cards.",
      image:
        "https://media.topfinanzas.com/images/guide-how-to-use-multiple-credit-cards-to-maximize-your-fico-score.webp",
      date: "September 12, 2025",
      category: "Personal Finance",
      categoryPath: "personal-finance",
    },
    {
      title: "Top Credit Cards to Maximize Your Black Friday Savings",
      slug: "top-credit-cards-to-maximize-your-black-friday-savings",
      description:
        "Using the right plastic can help you earn significant cash back, provide crucial purchase protections, and even give you interest-free time to pay off your haul.",
      image:
        "https://media.topfinanzas.com/images/top-credit-cards-to-maximize-your-black-friday-savings.webp",
      date: "September 23, 2025",
      category: "Personal Finance",
      categoryPath: "personal-finance",
    },
    {
      title: "Why a 0% Intro APR Card Is Your Best Bet for Black Friday",
      slug: "why-a-0-intro-apr-card-is-your-best-bet-for-black-friday",
      description:
        "Learn why a 0% intro APR credit card is the smart choice for financing big-ticket Black Friday purchases. Discover the benefits and how to use it responsibly.",
      image:
        "https://media.topfinanzas.com/images/why-a-0-intro-apr-card-is-your-best-bet-for-black-friday.webp",
      date: "October 8, 2025",
      category: "Personal Finance",
      categoryPath: "personal-finance",
    },
    {
      title:
        "Flat-Rate vs. Bonus Categories: The Best Cashback Strategy for Black Friday",
      slug: "flat-rate-vs-bonus-categories-the-best-cashback-strategy-for-black-friday",
      description:
        "Learn the key differences between flat-rate and bonus category cashback cards to maximize your Black Friday savings. Discover which strategy works best for your shopping style.",
      image:
        "https://media.topfinanzas.com/images/flat-rate-vs-bonus-categories-the-best-cashback-strategy-for-black-friday.webp",
      date: "October 10, 2025",
      category: "Personal Finance",
      categoryPath: "personal-finance",
    },
    {
      title: "Beat Inflation with Your Cashback",
      slug: "beat-inflation-with-your-cashback",
      description:
        "Learn how to use cashback rewards strategically to fight inflation and keep more money in your pocket. Discover smart strategies to maximize your rewards.",
      image:
        "https://media.topfinanzas.com/images/beat-inflation-with-your-cashback.webp",
      date: "October 31, 2025",
      category: "Personal Finance",
      categoryPath: "personal-finance",
    },
    {
      title: "Best 0% APR Balance Transfer Cards: A Guide to Managing Debt",
      slug: "best-0-apr-balance-transfer-cards-a-guide-to-managing-debt",
      description:
        "Learn how 0% APR balance transfer cards can help you manage and pay off credit card debt. Understand the pros, cons, and key strategies for success.",
      image:
        "https://media.topfinanzas.com/images/best-0-apr-balance-transfer-cards-a-guide-to-managing-debt.webp",
      date: "October 31, 2025",
      category: "Personal Finance",
      categoryPath: "personal-finance",
    },
    {
      title: "What Are the Best Secured Credit Cards for Building Credit?",
      slug: "what-are-the-best-secured-credit-cards-for-building-credit",
      description:
        "Learn how to find the best secured credit cards for building credit from scratch or repairing damaged credit. Discover what to look for and how to use them wisely.",
      image:
        "https://media.topfinanzas.com/images/what-are-the-best-secured-credit-cards-for-building-credit.webp",
      date: "October 31, 2025",
      category: "Personal Finance",
      categoryPath: "personal-finance",
    },
  ];

  // Sort posts by date (newest first). Supports ISO strings and "DD Month YYYY".
  const MONTHS: Record<string, number> = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };

  const parseDate = (value?: string): number => {
    if (!value) return 0;
    // ISO quick path
    if (/^\d{4}-\d{2}-\d{2}/.test(value) || value.includes("T")) {
      const t = Date.parse(value);
      return isNaN(t) ? 0 : t;
    }
    // "DD Month YYYY" (e.g., "3 April 2025")
    const m = value.trim().match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
    if (m) {
      const day = parseInt(m[1], 10);
      const monthName = m[2].toLowerCase();
      const year = parseInt(m[3], 10);
      const month = MONTHS[monthName];
      if (month != null) {
        return Date.UTC(year, month, day);
      }
    }
    const t = Date.parse(value);
    return isNaN(t) ? 0 : t;
  };

  const allPostsSorted: PostItem[] = [...allPosts].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date),
  );

  // Filter posts based on active category
  const filterPosts = useCallback(() => {
    let filteredPosts = [...allPostsSorted];

    if (activeCategory === "personalFinance") {
      filteredPosts = allPostsSorted.filter(
        (post) => post.category === "Personal Finance",
      );
    } else if (activeCategory === "financialSolutions") {
      filteredPosts = allPostsSorted.filter(
        (post) => post.category === "Financial Solutions",
      );
    } else if (activeCategory === "creditCards") {
      filteredPosts = allPostsSorted.filter(
        (post) =>
          post.title.toLowerCase().includes("credit card") ||
          post.slug.toLowerCase().includes("credit-card") ||
          post.description.toLowerCase().includes("credit card"),
      );
    } else if (activeCategory === "loans") {
      filteredPosts = allPostsSorted.filter(
        (post) =>
          post.title.toLowerCase().includes("loan") ||
          post.slug.toLowerCase().includes("loan") ||
          post.description.toLowerCase().includes("loan"),
      );
    }

    return filteredPosts;
  }, [activeCategory, allPostsSorted]);

  // Get filtered posts
  const filteredPosts = filterPosts();

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const content = (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        TopFinance US Blog
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-tight">
        Your source for personal finance information and financial solutions in
        the US.
      </p>

      {/* Category Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Link
          href="/personal-finance"
          className="block p-6 bg-blue-50 rounded-xl hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Personal Finance Guides
          </h2>
          <p className="text-blue-700">
            Explore tips on budgeting, savings, debt management, credit cards,
            and more.
          </p>
        </Link>
        <Link
          href="/financial-solutions"
          className="block p-6 bg-green-50 rounded-xl hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Financial Solutions
          </h2>
          <p className="text-green-700">
            Discover detailed reviews and comparisons of credit cards and loans
            available in the US.
          </p>
        </Link>
      </div>

      <h2 className="text-3xl font-bold mb-4">
        {activeCategory
          ? categories[activeCategory as keyof typeof categories]
          : "All Articles"}
      </h2>

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key === "all" ? null : key)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              (key === "all" && !activeCategory) || activeCategory === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            data-category={key}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Grid of posts with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory || "all"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="relative"
              style={{ position: "relative" }}
              data-category={post.category.toLowerCase().replace(" ", "-")}
            >
              <FeaturedPostCard
                title={cleanTitle(post.title)}
                description={post.description}
                image={post.image}
                slug={post.slug}
                category={post.category}
                categorySlug={post.categoryPath}
                date={post.date}
                priority={index < 2}
                showBadge={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-4 mt-12">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            variant="secondary" // Changed from outline
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="secondary" // Changed from outline
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );

  // The BlogLayout component might handle this automatically if set up,
  // otherwise, you might pass the imported metadata object.
  // For simplicity, assuming BlogLayout handles it or metadata is implicitly used.
  return (
    <BlogLayout
      metadata={{
        title: "Blog: Personal Finance and Financial Solutions | TopFinance US",
        description:
          "Your trusted source for personal finance, credit cards, and loans in the US. Learn to manage your money with our experts.",
      }}
    >
      {content}
    </BlogLayout>
  );
}
