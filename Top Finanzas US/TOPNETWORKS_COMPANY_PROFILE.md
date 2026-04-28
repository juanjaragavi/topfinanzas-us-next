# TopNetworks Inc. — Company Profile

**Document Version:** 1.0  
**Date:** April 22, 2026  
**Classification:** Internal Reference

---

## 1. Company Overview

**TopNetworks Inc.** is a performance publishing company operating in the digital advertising arbitrage space. The company develops and manages a portfolio of financial comparison and personal finance content platforms that connect high-intent consumers with relevant advertisers across the United States, United Kingdom, Mexico, and Latin America.

The business operates at the intersection of content publishing, programmatic advertising, and direct-response marketing. Its value creation mechanism — the arbitrage spread — is the positive delta between the revenue generated per visitor session (sourced from advertiser partnerships, ad networks, and lead generation fees) and the cost of acquiring that visitor (paid traffic campaigns on Meta Ads, Google Ads, and programmatic channels).

The company operates under an AI-first engineering philosophy, deploying Google Vertex AI (Gemini 2.5 Flash) across its internal toolchain to automate content generation, email marketing, social media production, and traffic routing decisions.

---

## 2. Business Model

### 2.1 Traffic Arbitrage: The Core Mechanic

TopNetworks' business model is built on a precisely managed arbitrage loop:

#### **Arbitrage Spread = Revenue per Session − Cost per Session**

A positive spread indicates a profitable campaign. The company monitors this spread hourly across all active campaigns and markets, using its proprietary **Arbitrage Manager Dashboard** (FastAPI + React, BigQuery analytics backend) to trigger optimization actions or campaign pauses when spreads compress below acceptable thresholds.

### 2.2 Traffic Acquisition (Cost Side)

Paid traffic is purchased across the following platforms:

- **Meta Ads** (Facebook/Instagram) — primary volume driver
- **Google Ads** (Search, Display, YouTube)
- **Programmatic ad networks**

UTM tracking follows the structure `[country]_tf_[platform]_broad` (e.g., `us_tf_meta_broad`, `uk_tf_ac_broad`), enabling granular attribution of session revenue back to individual campaign sources and enabling spread calculation at the campaign level.

Key acquisition metrics tracked: CPC, CPM, CTR, CPA, and session conversion rate.

### 2.3 Revenue Generation (Monetization Side)

Once a visitor lands on a TopNetworks content property, monetization occurs through multiple stacked mechanisms:

- **CPA partnerships** — Direct advertiser deals where TopNetworks earns a fixed fee per qualified lead or product application submitted (credit card approvals, loan applications)
- **AdZep** — Programmatic display network; auto-activates via the `AdZepNavigationHandler` component on all production properties
- **TopAds** — Proprietary ad network (Node.js/Express, Docker/Nginx, port 8080); custom GPT-powered offer wall surfacing pre-vetted financial product ads
- **System1** — Search arbitrage integration for contextual monetization
- **Display RPM** — Passive display revenue layered over all page types

Key revenue metrics tracked: RPM (Revenue Per Mille), EPC (Earnings Per Click), session value, and advertiser conversion rate.

### 2.4 Content Strategy

Content is the vehicle that converts paid traffic into monetizable sessions. All TopNetworks properties publish SEO-optimized financial comparison articles, product reviews, and educational guides targeting high commercial-intent keywords in the credit cards, personal loans, and personal finance education verticals.

Content is structured to serve the full consumer decision funnel:

- **TOFU** (Top of Funnel): Educational guides — "What is a balance transfer?", "How to build credit"
- **MOFU** (Middle of Funnel): Category comparisons — "Best cashback credit cards 2026", "Top personal loans for bad credit"
- **BOFU** (Bottom of Funnel): Individual product reviews — detailed card or loan application pages with direct CTA to advertiser

SEO implementation across all Next.js properties includes structured data, XML sitemaps, MDX content pipelines, and in-memory search indexes.

---

## 3. Content Platform Portfolio

### 3.1 TopFinanzas US

| Attribute      | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Domain         | `us.topfinanzas.com`                                         |
| Market         | United States                                                |
| Language       | English (en-US)                                              |
| Tech Stack     | Next.js 15.x, TypeScript, React 19, Tailwind CSS, MDX        |
| Infrastructure | GCP Compute Engine (34.45.27.247), PM2, Apache reverse proxy |
| Monetization   | AdZep, TopAds, direct CPA partnerships                       |
| Port           | 3040                                                         |

The flagship US property. Covers credit cards, personal loans, and personal finance education targeting US consumers. Migrated from WordPress to a Next.js 15 App Router architecture with full MDX content pipeline, multi-step credit card comparison flows, and advanced analytics integration.

### 3.2 TopFinanzas UK

| Attribute    | Value                                       |
| ------------ | ------------------------------------------- |
| Domain       | `uk.topfinanzas.com`                        |
| Market       | United Kingdom                              |
| Language     | English (en-GB)                             |
| Tech Stack   | Next.js 15.x, TypeScript, Tailwind CSS, MDX |
| Monetization | AdZep, TopAds, affiliate CPA                |
| Port         | 3004                                        |

UK market vertical covering FCA-regulated financial products. Maintains separate locale configuration for GBP pricing, UK-specific advertiser partnerships, and regulatory compliance requirements under FCA standards.

### 3.3 TopFinanzas MX

| Attribute    | Value                                       |
| ------------ | ------------------------------------------- |
| Domain       | `topfinanzas.com/mx/`                       |
| Market       | Mexico                                      |
| Language     | Spanish (es-MX)                             |
| Tech Stack   | Next.js 15.x, TypeScript, Tailwind CSS, MDX |
| Monetization | AdZep, TopAds, affiliate CPA                |
| Port         | 3030                                        |

Mexico market vertical operating as a path-based subdirectory (`/mx/`) rather than a subdomain, serving MXN-denominated financial products with CONDUSEF/PROFECO-aware content standards.

### 3.4 MejoresFinanzas

| Attribute    | Value                         |
| ------------ | ----------------------------- |
| Domain       | `mejoresfinanzas.com`         |
| Market       | Latin America (multi-country) |
| Language     | Spanish (es-US)               |
| Tech Stack   | Astro 5.x                     |
| Monetization | Display ads, affiliate CPA    |
| Port         | 4322                          |

LatAm-focused financial wellness blog platform built on Astro for maximum static performance. Covers Spanish-language personal finance, credit, and savings content across multiple Latin American markets. Includes full Spanish localization layer (routing, redirects, sitemap), Fuse.js search integration, and a credit card quiz scaffolding system.

### 3.5 BudgetBee

| Attribute       | Value                                  |
| --------------- | -------------------------------------- |
| Domain          | `budgetbeepro.com`                     |
| Market          | United States                          |
| Target Audience | Gen-Z and Millennials                  |
| Language        | English (en-US)                        |
| Tech Stack      | Next.js 15.x, TypeScript, Tailwind CSS |
| Monetization    | AdZep, TopAds, affiliate CPA           |
| Port            | 3007                                   |

A distinct consumer brand targeting younger US demographics with a differentiated identity (gold/black bee mascot, hexagonal motifs) and accessible voice. Tagline: _"Your Hive for Unbiased Financial Buzz."_ Covers credit cards, budgeting, and financial literacy with a tone calibrated for Gen-Z and Millennial audiences seeking unbiased guidance without gatekeeping or sign-up walls.

### 3.6 KardTrust

| Attribute       | Value                                  |
| --------------- | -------------------------------------- |
| Domain          | `kardtrust.com`                        |
| Market          | United States                          |
| Legal Entity    | SURF NETWORKS INC                      |
| Target Audience | US consumers aged 25–55                |
| Tech Stack      | Next.js 15.x, TypeScript, Tailwind CSS |
| Monetization    | AdZep, TopAds, credit card CPA         |
| Port            | 3005                                   |

Credit card comparison platform with a trust-forward positioning (primary brand color: red-600 `#DC2626`). Operates under the SURF NETWORKS INC legal entity. Targets US consumers with comprehensive side-by-side credit card and personal loan comparisons, personalized recommendation tools, and expert-review editorial content.

### 3.7 TopFinanzas Quiz MX

| Attribute | Value                              |
| --------- | ---------------------------------- |
| Domain    | `quizmexico.topfinanzas.com`       |
| Market    | Mexico                             |
| Language  | Spanish (es-MX)                    |
| Purpose   | Interactive financial product quiz |
| Port      | 3002                               |

Interactive quiz-based lead qualification tool for the Mexican market. Serves as a conversion-optimized entry point that routes visitors to relevant financial product recommendations based on their quiz responses, increasing match quality for advertiser CPA conversions.

### 3.8 TopNetworks Corporate

| Attribute  | Value                  |
| ---------- | ---------------------- |
| Domain     | `topnetworks.co`       |
| Tech Stack | Astro 5.x              |
| Purpose    | Corporate landing page |
| Port       | 4000                   |

Corporate web presence describing TopNetworks' performance publishing model, AI-driven optimization methodology, and advertiser partnership value proposition.

---

## 4. Internal Technology Platform

Beyond its consumer-facing properties, TopNetworks operates a suite of proprietary internal tools that automate the core operational functions of the arbitrage business.

### 4.1 RouteGenius

Traffic distribution engine using probabilistic routing algorithms to allocate incoming paid traffic across content properties based on real-time spread data. Built on Next.js 16.1 with Supabase (managed PostgreSQL), Better Auth, and Firebase. Operates on port 3070.

### 4.2 TrafficGenius

IVT (Invalid Traffic) detection and security analytics dashboard. Integrates with Cloud Armor logs via a Pub/Sub → Cloud Function (`ivt-classifier`) → BigQuery pipeline to classify and visualize bot traffic, click fraud, and invalid impression events. Built on Next.js 16.1 with NextAuth v5 and BigQuery. Operates on port 3080.

### 4.3 EmailGenius

AI-powered email broadcast generation platform (production URL: `email.topfinanzas.com`, port 3020). Built on Next.js 15.5 with Vertex AI (Gemini 2.5 Flash) as the generation backend, PostgreSQL for broadcast history, and react-email for template rendering. Supports ConvertKit and ActiveCampaign integrations. Sends market-segmented campaigns via dedicated addresses (`topfinance@topfinanzas.com` for US/UK, `info@topfinanzas.com` for MX).

### 4.4 Social Media Genius

AI-assisted social media content generation studio. Built on Next.js 16.1 with Konva canvas rendering and Vertex AI for copy generation. Produces branded visual assets and caption copy aligned to each consumer brand's identity. Operates on port 3050.

### 4.5 TopAds

Proprietary ad network serving optimized offer walls across TopNetworks properties. Node.js/Express backend with Terser-minified JavaScript delivery and Docker/Nginx containerization. Operates on port 8080. Never called manually — surfaces via the `AdZepNavigationHandler` integration layer.

### 4.6 Arbitrage Manager Dashboard

Real-time campaign analytics dashboard integrating Meta Ads API and System1 data. FastAPI (Python) backend on Google Cloud Run with a React/Vite frontend, BigQuery for analytical queries, and Cloud SQL for transactional data. Cloud Scheduler drives hourly data synchronization. Key API endpoints surface global KPIs (spend, revenue, ROAS), campaign-level performance, and automated alerts for campaigns trending below spread thresholds.

### 4.7 TopFinanzas Auto-Deployer

MCP (Model Context Protocol)-based deployment automation server. Built on Node.js with the MCP SDK and Zod for schema validation. Enables AI agent-triggered deployment workflows against the production GCP infrastructure.

---

## 5. Infrastructure

All production workloads run on **Google Cloud Platform** (project: `absolute-brook-452020-d5`, region: `us-central1`).

**Production VM (`topfinanzas-com`):**

- External IP: `34.45.27.247`
- OS: Ubuntu 22.04 LTS, Apache 2.4.52 (reverse proxy)
- Services managed via PM2 process manager
- SSL: Let's Encrypt / Certbot auto-renewal

**Global Load Balancer (`topfinanzas-lb`):**

- Static IP: `35.190.2.62`
- Routes 9 domains across the portfolio
- Cloud Armor policy (`topnetworks-armor-policy`) enforces DDoS protection and bot mitigation upstream of all properties

**IVT Classification Pipeline:**
Cloud Armor → Pub/Sub → Cloud Function (`ivt-classifier`) → BigQuery → TrafficGenius Dashboard

**Database:**

- Cloud SQL PostgreSQL: `34.16.99.221:5432` (transactional data, auth, email broadcast history)
- Google BigQuery: analytics, IVT classifications, campaign performance
- Supabase: RouteGenius managed storage and auth

**Media CDN:**

- Google Cloud Storage bucket: `media-topfinanzas-com`
- Public access via `storage.googleapis.com/media-topfinanzas-com`
- All production image assets served in WebP format

---

## 6. Technology Stack Summary

| Layer               | Technologies                                                                                              |
| ------------------- | --------------------------------------------------------------------------------------------------------- |
| Frontend Frameworks | Next.js 15.x–16.x (App Router), Astro 5.x, React 19.x                                                     |
| Language            | TypeScript (strict mode), JavaScript, Python                                                              |
| Styling             | Tailwind CSS v3.4 / v4.x, shadcn/ui, Radix UI                                                             |
| AI/ML               | Vertex AI (Gemini 2.5 Flash), Google Generative AI SDK, MCP SDK                                           |
| Databases           | PostgreSQL (pg driver), Google BigQuery, Supabase                                                         |
| Auth                | NextAuth v5, Better Auth, Firebase Auth, Google OAuth                                                     |
| Email               | ConvertKit, ActiveCampaign, Brevo, SendGrid, react-email                                                  |
| Ad-Tech             | AdZep, TopAds (proprietary), System1, Google Publisher Tags                                               |
| Cloud               | GCP: Compute Engine, Cloud Run, Cloud Storage, Cloud Armor, BigQuery, Pub/Sub, Cloud Functions, Cloud DNS |
| DevOps              | PM2, Docker, Docker Compose, Git (dev → main → backup branching)                                          |
| Analytics           | Google Tag Manager, Google Analytics 4                                                                    |

---

## 7. Markets and Localization

| Market         | Language        | Currency       | Regulatory Framework | Primary Brand                        |
| -------------- | --------------- | -------------- | -------------------- | ------------------------------------ |
| United States  | English (en-US) | USD            | CCPA                 | TopFinanzas US, BudgetBee, KardTrust |
| United Kingdom | English (en-GB) | GBP            | FCA                  | TopFinanzas UK                       |
| Mexico         | Spanish (es-MX) | MXN            | CONDUSEF / PROFECO   | TopFinanzas MX, Quiz MX              |
| Latin America  | Spanish (es-US) | Multi-currency | Variable             | MejoresFinanzas                      |

---

## 8. Brand Portfolio Summary

| Brand           | Domain              | Legal Entity      | Market | Audience               | Primary Colors      |
| --------------- | ------------------- | ----------------- | ------ | ---------------------- | ------------------- |
| TopFinanzas US  | us.topfinanzas.com  | TopNetworks Inc.  | US     | US general consumers   | Blue / Cyan / Lime  |
| TopFinanzas UK  | uk.topfinanzas.com  | TopNetworks Inc.  | UK     | UK consumers           | Blue / Cyan / Lime  |
| TopFinanzas MX  | topfinanzas.com/mx/ | TopNetworks Inc.  | Mexico | Mexican consumers      | Blue / Cyan / Lime  |
| MejoresFinanzas | mejoresfinanzas.com | TopNetworks Inc.  | LatAm  | Spanish-speaking LatAm | Blue (#4A90E2)      |
| BudgetBee       | budgetbeepro.com    | TopNetworks Inc.  | US     | Gen-Z / Millennials    | Gold / Black / Teal |
| KardTrust       | kardtrust.com       | SURF NETWORKS INC | US     | Adults 25–55           | Red / Blue / White  |

---
