"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Sidebar,
  SidebarAd,
  SidebarCategories,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInput,
  SidebarNewsletter,
  SidebarProvider,
  SidebarRecentArticles,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function SidebarExample() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement subscription logic
    alert("Thank you for subscribing!");
  };

  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar>
          <SidebarHeader>
            <SidebarInput placeholder="Search..." />
          </SidebarHeader>

          <SidebarContent>
            {/* Banner Ad */}
            <SidebarAd />

            {/* Recent Articles */}
            <SidebarRecentArticles>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/article-thumbnail-1.webp"
                  alt="Article about personal finance"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <Link
                    href="/article-1"
                    className="text-sm font-medium hover:underline"
                  >
                    Your First Salary: A Complete Guide to Smart Management
                  </Link>
                  <p className="text-xs text-gray-500">25 February, 2025</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/images/article-thumbnail-2.webp"
                  alt="Article about mortgages"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <Link
                    href="/article-2"
                    className="text-sm font-medium hover:underline"
                  >
                    What Is a Mortgage? Your Complete Guide
                  </Link>
                  <p className="text-xs text-gray-500">25 February, 2025</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/images/article-thumbnail-3.webp"
                  alt="Article about loans"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div>
                  <Link
                    href="/article-3"
                    className="text-sm font-medium hover:underline"
                  >
                    What Are Online Loans? A Key Tool in Personal Finance
                  </Link>
                  <p className="text-xs text-gray-500">25 February, 2025</p>
                </div>
              </div>
            </SidebarRecentArticles>

            <SidebarSeparator />

            {/* Categories */}
            <SidebarCategories>
              <div className="flex items-center justify-between">
                <Link
                  href="/personal-finance"
                  className="text-sm hover:underline"
                >
                  Personal Finance
                </Link>
                <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                  12
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Link href="/cards" className="text-sm hover:underline">
                  Credit Cards
                </Link>
                <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                  8
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Link href="/mortgages" className="text-sm hover:underline">
                  Mortgages
                </Link>
                <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                  6
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Link href="/investments" className="text-sm hover:underline">
                  Investments
                </Link>
                <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                  5
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Link href="/budgeting" className="text-sm hover:underline">
                  Budgeting
                </Link>
                <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5">
                  4
                </span>
              </div>
            </SidebarCategories>

            <SidebarSeparator />

            {/* Newsletter */}
            <SidebarNewsletter onSubmit={handleNewsletterSubmit} />
          </SidebarContent>

          <SidebarFooter>
            <small className="text-xs text-left block text-gray-500">
              © 2025 TopFinanzas MX
            </small>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center mb-6">
            <SidebarTrigger className="mr-4" />
            <h1 className="text-2xl font-bold">Main Content</h1>
          </div>

          <p className="text-gray-700">
            This is an example implementation of the sidebar components. The
            advertisement component (SidebarAd) would typically point to a
            relevant product page, such as the Barclaycard Avios Plus
            requirements page.
          </p>
        </div>
      </div>
    </SidebarProvider>
  );
}
