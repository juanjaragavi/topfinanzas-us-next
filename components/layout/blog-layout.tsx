"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react"; // Added ReactNode import

interface BlogLayoutProps {
  children: ReactNode;
  metadata?: {
    title?: string;
    date?: string;
    author?: string;
    authorImage?: string;
    readingTime?: string;
    categories?: Array<{ name: string; slug: string }>;
    featuredImage?: string;
    excerpt?: string;
    views?: number;
    commentCount?: number;
  };
}

export function BlogLayout({ children, metadata }: BlogLayoutProps) {
  const {
    title = "Blog Post Title",
    date = "February 25, 2025",
    author = "Top Finance",
    authorImage = "/placeholder-user.webp",
    readingTime = "6 minute read",
    // Default categories updated to reflect current structure
    categories = [{ name: "Personal Finance", slug: "personal-finance" }],
    featuredImage = "https://media.topfinanzas.com/images/favicon.webp",
    excerpt = "",
    views = 0,
    commentCount = 0,
  } = metadata || {};

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header />

      <article className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Categories and metadata */}
          <div className="mb-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                // Updated category link logic
                href={
                  category.slug === "financial-solutions"
                    ? "/financial-solutions"
                    : "/personal-finance"
                }
                className="uppercase text-link text-sm font-medium mr-2 hover:underline"
              >
                {category.name}
              </Link>
            ))}
            {views > 0 && (
              <span className="text-gray-500 text-sm ml-2">
                <span className="inline-block align-middle mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
                {views} views
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-h1 mb-4">{title}</h1>

          {/* Author and date */}
          <div className="flex items-center mb-8">
            <Image
              src={authorImage}
              alt={author}
              width={48}
              height={48}
              className="rounded-xl mr-4"
            />
            <div>
              <div className="font-medium text-gray-900">{author}</div>
              <div className="text-sm text-gray-500">
                {date} • {readingTime}
                {commentCount > 0 && ` • ${commentCount} comments`}
              </div>
            </div>
          </div>

          {/* Share buttons */}
          <div className="flex mb-8">
            <Button
              variant="secondary"
              className="mr-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-4 w-4 mr-2"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Share
            </Button>
            <Button
              variant="secondary"
              className="mr-2 bg-blue-400 hover:bg-blue-500 text-white"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-4 w-4 mr-2"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Tweet
            </Button>
            <Button
              variant="secondary"
              className="bg-gray-800 hover:bg-gray-900 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </Button>
          </div>

          {featuredImage && (
            <div className="mb-8">
              <Image
                src={featuredImage}
                alt={title}
                width={1200}
                height={675}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          )}

          {excerpt && (
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {excerpt}
            </p>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Social share sidebar (desktop) */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <button
                  className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button
                  className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button
                  className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </button>
                <button
                  className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-300 transition-colors"
                  aria-label="Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-8">
              {/* Content */}
              <div>{children}</div>

              {/* Tags */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={
                        category.slug === "financial-solutions"
                          ? "/financial-solutions"
                          : "/personal-finance"
                      } // Updated Tag Link Logic
                      className="bg-gray-100 text-[#234043] rounded-full px-2 py-1 text-[10px] mr-2 mb-2 hover:bg-gray-200 transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Author box */}
              <div className="mt-6 bg-gray-50 p-4 rounded-xl">
                <div className="flex flex-col sm:flex-row items-center sm:items-start">
                  <Image
                    src={authorImage}
                    alt={author}
                    width={60}
                    height={60}
                    className="rounded-xl mb-4 sm:mb-0 sm:mr-4"
                  />
                  <div className="text-left sm:text-left">
                    <h3 className="text-h3 mb-1">{author}</h3>
                    <p className="text-body mb-2">
                      Financial expert with over 10 years of experience in
                      personal finance, investment strategies, and credit
                      management.
                    </p>
                    <div className="flex justify-center sm:justify-start space-x-4">
                      <a href="#" className="text-blue-600 hover:text-blue-800">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a href="#" className="text-blue-400 hover:text-blue-600">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                      <a href="#" className="text-blue-500 hover:text-blue-700">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments section */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <h3 className="text-h3 mb-4">Comments</h3>
                <div className="bg-gray-50 p-4 rounded-xl text-left">
                  <p className="text-body mb-3">
                    Be the first to share your thoughts on this article.
                  </p>
                  <Button className="text-[10px] py-1.5">
                    Leave a Comment
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-3">
              {/* Recent articles - Updated */}
              <div className="mb-8">
                <h3 className="text-[12px] font-bold mb-3 pb-2 border-b border-gray-200 text-[#234043]">
                  Recent Articles
                </h3>
                <div className="space-y-4">
                  <Link
                    href="/personal-finance/best-personal-loans" // Updated Recent Article Link 1
                    className="block"
                  >
                    <div className="relative h-32 rounded-xl overflow-hidden">
                      <Image
                        src="https://media.topfinanzas.com/images/best-personal-loans.webp" // Updated Image
                        alt="Best Personal Loans in the UK" // Updated Alt
                        fill
                        style={{ objectFit: "cover" }}
                        className="brightness-75"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
                        <h4 className="font-medium text-[10px] leading-tight mb-1">
                          Best Personal Loans in the UK {/* Updated Title */}
                        </h4>
                        {/* Removed date for consistency */}
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/personal-finance/getting-out-of-debt" // Updated Recent Article Link 2
                    className="block"
                  >
                    <div className="relative h-32 rounded-xl overflow-hidden">
                      <Image
                        src="https://us.topfinanzas.com/wp-content/uploads/2023/11/Top_Finanzas_como_salir_de_deudas.webp" // Updated Image
                        alt="Practical Guide to Getting Out of Debt" // Updated Alt
                        fill
                        style={{ objectFit: "cover" }}
                        className="brightness-75"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
                        <h4 className="font-medium text-[10px] leading-tight mb-1">
                          Practical Guide to Getting Out of Debt{" "}
                          {/* Updated Title */}
                        </h4>
                        {/* Removed date */}
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/personal-finance/tips-for-choosing-an-online-loan" // Updated Recent Article Link 3
                    className="block"
                  >
                    <div className="relative h-32 rounded-xl overflow-hidden">
                      <Image
                        src="https://media.topfinanzas.com/images/uk/choosing-online-loan-uk.webp" // Updated Image
                        alt="5 Tips for Choosing an Online Loan: Quick Guide" // Updated Alt
                        fill
                        style={{ objectFit: "cover" }}
                        className="brightness-75"
                      />
                      <div className="absolute inset-0 flex flex-col justify-end p-3 text-white">
                        <h4 className="font-medium text-[10px] leading-tight mb-1">
                          5 Tips for Choosing an Online Loan{" "}
                          {/* Updated Title */}
                        </h4>
                        {/* Removed date */}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Categories - Updated */}
              <div className="mb-8">
                <h3 className="text-[12px] font-bold mb-3 pb-2 border-b border-gray-200 text-[#234043]">
                  Categories
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/personal-finance" // Updated Category Link 1
                      className="flex items-center justify-between text-[10px] text-[#234043] hover:text-[#222442] transition-colors"
                    >
                      <span>Personal Finance</span>
                      {/* Removed count */}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/financial-solutions" // Updated Category Link 2
                      className="flex items-center justify-between text-[10px] text-[#234043] hover:text-[#222442] transition-colors"
                    >
                      <span>Financial Solutions</span>
                      {/* Removed count */}
                    </Link>
                  </li>
                  {/* Removed outdated categories */}
                </ul>
              </div>

              {/* Newsletter signup */}
              <div className="p-4 bg-blue-50 rounded-2xl">
                <h3 className="text-[12px] font-bold mb-2 text-[#234043]">
                  Subscribe to our newsletter
                </h3>
                <p className="text-[10px] text-[#234043] mb-3">
                  Get the latest financial tips and insights delivered straight
                  to your inbox.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-1.5 text-[10px] border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <Button className="w-full text-[10px] py-1.5 rounded-full">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
