/**
 * Search Index for TopFinanzas US
 *
 * Comprehensive search system with FlexSearch-like in-memory indexing.
 * Indexes all site content including:
 * - Financial Solutions (Credit Cards & Personal Loans)
 * - Personal Finance Articles
 * - Blog Posts
 * - Static Pages
 */

export interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
  categorySlug: string;
  image?: string;
  type: "credit-card" | "loan" | "article" | "page";
  date?: string;
}

// Comprehensive search index with all site content
const SEARCH_INDEX: SearchResult[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // FINANCIAL SOLUTIONS - CREDIT CARDS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    title: "American Express Preferred Rewards Gold Credit Card",
    description:
      "Premium travel and lifestyle benefits with Membership Rewards points, comprehensive travel insurance, and exclusive perks.",
    url: "/financial-solutions/american-express-preferred-rewards-gold-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/american-express-preferred-rewards-gold-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Barclaycard Avios Plus Credit Card",
    description:
      "Earn Avios points on every purchase for travel rewards. Ideal for frequent travelers with premium benefits.",
    url: "/financial-solutions/barclaycard-avios-plus",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image: "https://media.topfinanzas.com/images/barclaycard-avios-plus.webp",
    type: "credit-card",
  },
  {
    title: "Capital One UK Credit Card",
    description:
      "Build your credit history with a starting limit of £200-£1,500, flexible payments, and no annual fee.",
    url: "/financial-solutions/capital-one-uk-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/capital-one-uk-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Aqua Credit Card",
    description:
      "Personalized limits, expert support tools, and 24/7 fraud protection to build credit safely.",
    url: "/financial-solutions/aqua-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image: "https://media.topfinanzas.com/images/uk/aqua-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Vanquis Credit Card",
    description:
      "Award-winning credit building cards with personalized limits and 0% balance transfer options.",
    url: "/financial-solutions/vanquis-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image: "https://media.topfinanzas.com/images/uk/vanquis-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "118 118 Money Credit Card",
    description:
      "Build credit with guaranteed personalized limits and transparent terms for credit improvement.",
    url: "/financial-solutions/118-118-money-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/118-118-money-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "John Lewis Partnership Card",
    description:
      "Earn valuable points on daily purchases at John Lewis, Waitrose, and beyond.",
    url: "/financial-solutions/john-lewis-partnership-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/john-lewis-partnership-card.webp",
    type: "credit-card",
  },
  {
    title: "Fluid Credit Card",
    description:
      "0% interest on balance transfers for 9 months to help you save and pay off debt faster.",
    url: "/financial-solutions/fluid-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image: "https://media.topfinanzas.com/images/uk/fluid-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Ocean Credit Card",
    description:
      "Credit limits from £200 to £8,000 with no annual fee. QuickCheck eligibility without affecting your credit score.",
    url: "/financial-solutions/ocean-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image: "https://media.topfinanzas.com/images/uk/ocean-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "HSBC Rewards Credit Card",
    description:
      "Earn points on daily spending, 0% on purchases for 6 months, and a £25 welcome bonus.",
    url: "/financial-solutions/hsbc-rewards-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/hsbc-rewards-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Nationwide Building Society Credit Card",
    description:
      "Member card with 0% intro options: up to 24 months on balance transfers or 15 months on purchases.",
    url: "/financial-solutions/nationwide-building-society-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/nationwide-building-society-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "M&S Rewards Credit Card",
    description:
      "Earn reward points on all M&S spending and beyond, with exclusive member benefits.",
    url: "/financial-solutions/ms-rewards-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/ms-rewards-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Tesco Bank Clubcard Credit Cards",
    description:
      "0% intro rates, low APR options, and Clubcard points on daily spending.",
    url: "/financial-solutions/tesco-bank-clubcard-credit-cards",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/tesco-bank-clubcard-credit-cards.webp",
    type: "credit-card",
  },
  {
    title: "The Co-operative Bank Credit Card",
    description:
      "Ethical banking with 0.5% cashback at Co-op stores and 0.3% everywhere else, no annual fee.",
    url: "/financial-solutions/the-co-operative-bank-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/the-co-operative-bank-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "First Direct Credit Card",
    description:
      "Simple banking with 0% on purchases for 12 months, competitive rates, no annual fee, and 24/7 service.",
    url: "/financial-solutions/first-direct-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/first-direct-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Bank of Scotland Credit Cards",
    description:
      "Flexible options for daily spending, balance transfers, large purchases, and credit building.",
    url: "/financial-solutions/bank-of-scotland-credit-cards",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/bank-of-scotland-credit-cards.webp",
    type: "credit-card",
  },
  {
    title: "RBS Purchase & Balance Transfer Card",
    description:
      "0% interest on purchases for up to 20 months and balance transfers for up to 18 months. No annual fee.",
    url: "/financial-solutions/rbs-purchase-balance-transfer-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/rbs-purchase-balance-transfer-card.webp",
    type: "credit-card",
  },
  {
    title: "NatWest Credit Card",
    description:
      "Flexible credit options with competitive rates and rewards programs from a trusted bank.",
    url: "/financial-solutions/natwest-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image: "https://media.topfinanzas.com/images/uk/natwest-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Lloyds Bank Credit Card",
    description:
      "Trusted banking with a variety of credit card options for rewards, balance transfers, and everyday spending.",
    url: "/financial-solutions/lloyds-bank-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/lloyds-bank-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Halifax World Elite Mastercard",
    description:
      "Premium travel benefits, airport lounge access, and exclusive rewards for high spenders.",
    url: "/financial-solutions/halifax-world-elite-mastercard",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/halifax-world-elite-mastercard.webp",
    type: "credit-card",
  },
  {
    title: "Virgin Money Credit Card",
    description:
      "Competitive rates with Virgin Red rewards and flexible credit options.",
    url: "/financial-solutions/virgin-money-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/virgin-money-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Monzo Credit Card",
    description:
      "Modern digital banking with instant notifications, spending insights, and flexible credit.",
    url: "/financial-solutions/monzo-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image: "https://media.topfinanzas.com/images/uk/monzo-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Revolut Credit Card",
    description:
      "Digital-first credit with multi-currency support, budgeting tools, and instant controls.",
    url: "/financial-solutions/revolut-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image: "https://media.topfinanzas.com/images/uk/revolut-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Starling Bank Credit Card",
    description:
      "Award-winning mobile banking with real-time spending insights and no hidden fees.",
    url: "/financial-solutions/starling-bank-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/starling-bank-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "TSB Credit Card",
    description:
      "Straightforward credit with competitive rates and local bank service.",
    url: "/financial-solutions/tsb-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image: "https://media.topfinanzas.com/images/uk/tsb-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Santander UK Credit Card",
    description:
      "Multiple card options with cashback rewards and competitive 0% offers.",
    url: "/financial-solutions/santander-uk-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/santander-uk-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Curve Credit Card",
    description:
      "All-in-one card that consolidates your credit and debit cards with cashback and rewards.",
    url: "/financial-solutions/curve-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image: "https://media.topfinanzas.com/images/uk/curve-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Zopa Credit Card",
    description:
      "Smart credit with competitive rates, instant decisions, and modern banking features.",
    url: "/financial-solutions/zopa-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image: "https://media.topfinanzas.com/images/uk/zopa-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Yonder Credit Card",
    description:
      "Premium lifestyle card with exclusive experiences, travel rewards, and dining benefits.",
    url: "/financial-solutions/yonder-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image: "https://media.topfinanzas.com/images/uk/yonder-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "Marbles Credit Card",
    description:
      "Credit building card designed to help improve your credit score with responsible use.",
    url: "/financial-solutions/marbles-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image: "https://media.topfinanzas.com/images/uk/marbles-credit-card.webp",
    type: "credit-card",
  },
  {
    title: "BIP Credit Card",
    description:
      "Innovative credit card with modern features for everyday spending.",
    url: "/financial-solutions/bip-credit-card",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image: "https://media.topfinanzas.com/images/uk/bip-credit-card.webp",
    type: "credit-card",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FINANCIAL SOLUTIONS - PERSONAL LOANS
  // ═══════════════════════════════════════════════════════════════════════════
  {
    title: "HSBC Personal Loan",
    description:
      "Competitive rates on personal loans with flexible repayment terms from a trusted bank.",
    url: "/financial-solutions/hsbc-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718135900-fotosprestamo1hsbc-uk.webp",
    type: "loan",
  },
  {
    title: "Barclays Personal Loan",
    description:
      "Flexible personal loans with competitive APR and quick approval process.",
    url: "/financial-solutions/barclays-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/barclays-personal-loan.webp",
    type: "loan",
  },
  {
    title: "NatWest Personal Loan",
    description:
      "Personal loans with fixed rates and flexible terms for various financial needs.",
    url: "/financial-solutions/natwest-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/natwest-personal-loan.webp",
    type: "loan",
  },
  {
    title: "Lloyds Bank Personal Loan",
    description:
      "Trusted personal loans with competitive rates and flexible repayment options.",
    url: "/financial-solutions/lloyds-bank-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/lloyds-bank-personal-loan.webp",
    type: "loan",
  },
  {
    title: "Halifax Personal Loan",
    description:
      "Straightforward personal loans with fixed rates from £1,000 to £50,000.",
    url: "/financial-solutions/halifax-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/halifax-personal-loan.webp",
    type: "loan",
  },
  {
    title: "Santander UK Personal Loan",
    description:
      "Competitive personal loans with rate match guarantee and flexible terms.",
    url: "/financial-solutions/santander-uk-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/santander-uk-personal-loan.webp",
    type: "loan",
  },
  {
    title: "TSB Personal Loan",
    description:
      "Simple personal loans with clear terms and competitive interest rates.",
    url: "/financial-solutions/tsb-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/tsb-personal-loan.webp",
    type: "loan",
  },
  {
    title: "Nationwide Personal Loan",
    description:
      "Building society personal loans with competitive rates for members.",
    url: "/financial-solutions/nationwide-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/nationwide-personal-loan.webp",
    type: "loan",
  },
  {
    title: "Virgin Money Personal Loan",
    description:
      "Personal loans with competitive rates and Virgin Red rewards.",
    url: "/financial-solutions/virgin-money-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/virgin-money-personal-loan.webp",
    type: "loan",
  },
  {
    title: "Monzo Personal Loan",
    description:
      "Digital-first personal loans with instant decisions and flexible repayment.",
    url: "/financial-solutions/monzo-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/monzo-personal-loan.webp",
    type: "loan",
  },
  {
    title: "Revolut Personal Loan",
    description:
      "Modern personal loans through the Revolut app with quick approval.",
    url: "/financial-solutions/revolut-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/revolut-personal-loan.webp",
    type: "loan",
  },
  {
    title: "Starling Bank Personal Loan",
    description:
      "Digital banking personal loans with competitive rates and no hidden fees.",
    url: "/financial-solutions/starling-bank-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/starling-bank-personal-loan.webp",
    type: "loan",
  },
  {
    title: "Funding Circle Personal Loan",
    description:
      "Business and personal loans with fast funding and flexible terms.",
    url: "/financial-solutions/funding-circle-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/718136824-fotosprestamo-fundingcircle1uk.webp",
    type: "loan",
  },
  {
    title: "iwoca Personal Loan",
    description:
      "Flexible business funding with fast decisions and competitive rates.",
    url: "/financial-solutions/iwoca-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/iwoca-personal-loan.webp",
    type: "loan",
  },
  {
    title: "Fleximize Personal Loan",
    description:
      "Flexible business loans tailored to your specific needs with personalized service.",
    url: "/financial-solutions/fleximize-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/fleximize-personal-loan.webp",
    type: "loan",
  },
  {
    title: "Capify Personal Loan",
    description:
      "Business funding solutions with fast approval and flexible repayment.",
    url: "/financial-solutions/capify-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/capify-personal-loan.webp",
    type: "loan",
  },
  {
    title: "MarketFinance Personal Loan",
    description:
      "Business financing solutions with invoice financing and loans.",
    url: "/financial-solutions/marketfinance-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/marketfinance-personal-loan.webp",
    type: "loan",
  },
  {
    title: "Funding Options Personal Loan",
    description:
      "Business loan comparison service to find the best financing options.",
    url: "/financial-solutions/funding-options-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/funding-options-personal-loan.webp",
    type: "loan",
  },
  {
    title: "Funding Xchange Personal Loan",
    description:
      "Business loan marketplace connecting you with multiple lenders.",
    url: "/financial-solutions/funding-xchange-personal-loan",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    image:
      "https://media.topfinanzas.com/images/uk/loans/funding-xchange-personal-loan.webp",
    type: "loan",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PERSONAL FINANCE - ARTICLES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    title: "Best Rewards Credit Cards",
    description:
      "Discover the best rewards credit cards to maximize your spending with cashback, points, and travel benefits.",
    url: "/personal-finance/best-rewards-credit-cards",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/Top_Finance_uk_credit_cards.webp",
    type: "article",
  },
  {
    title: "Getting Out of Debt: A Practical Guide",
    description:
      "Feeling overwhelmed by debt? Get practical strategies to pay off debt faster and regain financial freedom.",
    url: "/personal-finance/getting-out-of-debt",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/Top_Finance_how_to_get_out_of_debt.webp",
    type: "article",
  },
  {
    title: "Top Credit Cards with 0% Intro APR",
    description:
      "Compare the best credit cards offering 0% introductory APR for purchases and balance transfers.",
    url: "/personal-finance/top-credit-cards-0-intro-apr",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image: "https://media.topfinanzas.com/images/uk/APR.webp",
    type: "article",
  },
  {
    title: "Best Personal Loans: Your Complete Guide",
    description:
      "Complete guide to finding the best personal loans with competitive rates and terms.",
    url: "/personal-finance/best-personal-loans",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image: "https://media.topfinanzas.com/images/best-personal-loans.webp",
    type: "article",
  },
  {
    title: "Tips for Choosing an Online Loan",
    description:
      "5 essential tips to navigate the world of online loans with confidence and find the right option.",
    url: "/personal-finance/tips-for-choosing-an-online-loan",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/choosing-online-loan-uk.webp",
    type: "article",
  },
  {
    title: "How to Track Your Spending for 30 Days",
    description:
      "Stop guessing about your finances. Learn a simple 30-day spending tracking method to discover where your money really goes.",
    url: "/personal-finance/how-to-track-your-spending-for-30-days",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/how-to-track-your-spending-for-30-days.webp",
    type: "article",
  },
  {
    title: "The Psychology of Spending: How to Stop Impulse Buys",
    description:
      "Discover why we buy on impulse and learn practical strategies to master your money mindset. Start mindful saving today.",
    url: "/personal-finance/the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/the-psychology-of-spending-how-to-stop-impulse-buys-and-start-mindful-saving.webp",
    type: "article",
  },
  {
    title: "Automate Your Wealth: Set It and Forget It Finance",
    description:
      'Learn how to automate your finances with our "Set it and forget it" system. Save time, reduce stress, and build wealth effortlessly.',
    url: "/personal-finance/automate-your-wealth",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image: "https://media.topfinanzas.com/images/uk/automate-your-wealth.webp",
    type: "article",
  },
  {
    title: "Stop Living Paycheck to Paycheck",
    description:
      "Escape the paycheck-to-paycheck cycle with three practical cash flow changes. Learn how families are building financial breathing room.",
    url: "/personal-finance/stop-living-paycheck-to-paycheck",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/budgetbee/stop-living-paycheck-to-paycheck.webp",
    type: "article",
  },
  {
    title: "Financial Health Check: Where Does Your Money Go?",
    description:
      "Discover where your money really goes with our quick financial health check. Learn simple tracking methods that reveal spending patterns.",
    url: "/personal-finance/financial-health-check-where-does-your-money-go",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/financial-health-check-money-tracking.webp",
    type: "article",
  },
  {
    title: "Hidden Costs of Homeownership",
    description:
      "Discover the unexpected expenses that surprise homeowners. From maintenance to insurance, learn to budget for hidden costs.",
    url: "/personal-finance/hidden-costs-of-homeownership",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/hidden-costs-homeownership.webp",
    type: "article",
  },
  {
    title: "What Is Financial Health?",
    description:
      "Understanding financial health and how to measure and improve your financial wellbeing.",
    url: "/personal-finance/what-is-financial-health",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/what-is-financial-health.webp",
    type: "article",
  },
  {
    title: "What Is Lifestyle Creep?",
    description:
      "Learn about lifestyle creep and how to prevent increased spending from derailing your financial goals.",
    url: "/personal-finance/what-is-lifestyle-creep",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/what-is-lifestyle-creep.webp",
    type: "article",
  },
  {
    title: "Money Management for Beginners",
    description:
      "Essential money management tips for beginners to build strong financial habits.",
    url: "/personal-finance/money-management-for-beginners",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/money-management-for-beginners.webp",
    type: "article",
  },
  {
    title: "Setting Financial Goals",
    description:
      "How to set SMART financial goals and create a roadmap to achieve them.",
    url: "/personal-finance/setting-financial-goals",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/setting-financial-goals.webp",
    type: "article",
  },
  {
    title: "Creating a Budget You'll Actually Stick To",
    description:
      "Practical tips for creating a realistic budget that fits your lifestyle.",
    url: "/personal-finance/creating-a-budget-youll-actually-stick-to",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/creating-a-budget-youll-actually-stick-to.webp",
    type: "article",
  },
  {
    title: "Ditching Impulse Buys: Mindful Spending",
    description:
      "Strategies to overcome impulse buying and practice mindful spending habits.",
    url: "/personal-finance/ditching-impulse-buys-mindful-spending",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/ditching-impulse-buys-mindful-spending.webp",
    type: "article",
  },
  {
    title: "Inflation-Proof Your Life",
    description:
      "Smart strategies to protect your finances against inflation and rising costs.",
    url: "/personal-finance/inflation-proof-your-life",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/inflation-proof-your-life.webp",
    type: "article",
  },
  {
    title: "How to Ask for a Raise",
    description:
      "Expert tips and strategies for successfully negotiating a salary increase.",
    url: "/personal-finance/how-to-ask-for-a-raise",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/how-to-ask-for-a-raise.webp",
    type: "article",
  },
  {
    title: "Side Hustle or Second Job?",
    description:
      "Comparing side hustles and second jobs to find the best way to increase your income.",
    url: "/personal-finance/side-hustle-or-second-job",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/side-hustle-or-second-job.webp",
    type: "article",
  },
  {
    title: "Combine Finances After Marriage or Moving In",
    description:
      "Guide to merging finances with your partner after marriage or cohabitation.",
    url: "/personal-finance/combine-finances-after-marriage-or-moving-in",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/combine-finances-after-marriage-or-moving-in.webp",
    type: "article",
  },
  {
    title: "Financial Uncoupling: Separating Finances During Breakup",
    description:
      "Practical guide to separating your finances during a divorce or breakup.",
    url: "/personal-finance/financial-uncoupling-separating-finances-during-breakup",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/financial-uncoupling-separating-finances-during-breakup.webp",
    type: "article",
  },
  {
    title: "Personal Loans as a Debt Strategy",
    description:
      "How to use personal loans strategically for debt consolidation and management.",
    url: "/personal-finance/personal-loans-debt-strategy",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/personal-loans-debt-strategy.webp",
    type: "article",
  },
  {
    title: "Understanding Credit Card Interest Rates",
    description:
      "Everything you need to know about credit card APR and how interest is calculated.",
    url: "/personal-finance/understanding-credit-card-interest-rates",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/understanding-credit-card-interest-rates.webp",
    type: "article",
  },
  {
    title: "Credit Card Types and Benefits",
    description:
      "A comprehensive guide to different types of credit cards and their benefits.",
    url: "/personal-finance/credit-card-types-benefits",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/credit-card-types-benefits.webp",
    type: "article",
  },
  {
    title: "No Annual Fee Credit Cards",
    description:
      "Find the best no annual fee credit cards that offer great rewards without the yearly cost.",
    url: "/personal-finance/no-annual-fee-credit-cards",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image:
      "https://media.topfinanzas.com/images/uk/no-annual-fee-credit-cards.webp",
    type: "article",
  },
  {
    title: "Travel Credit Cards",
    description:
      "Best travel credit cards for earning miles, points, and enjoying travel perks.",
    url: "/personal-finance/travel-credit-cards",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image: "https://media.topfinanzas.com/images/uk/travel-credit-cards.webp",
    type: "article",
  },
  {
    title: "Cashback Credit Cards",
    description:
      "Top cashback credit cards that put money back in your pocket with every purchase.",
    url: "/personal-finance/cashback-credit-cards",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    image: "https://media.topfinanzas.com/images/uk/cashback-credit-cards.webp",
    type: "article",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // STATIC PAGES
  // ═══════════════════════════════════════════════════════════════════════════
  {
    title: "About Us",
    description:
      "Learn about Top Finance and our mission to help you make better financial decisions.",
    url: "/about-us",
    category: "About",
    categorySlug: "about",
    type: "page",
  },
  {
    title: "Contact Us",
    description:
      "Get in touch with the Top Finance team for questions, feedback, or partnerships.",
    url: "/contact-us",
    category: "Contact",
    categorySlug: "contact",
    type: "page",
  },
  {
    title: "Privacy Policy",
    description:
      "Our privacy policy explains how we collect, use, and protect your personal information.",
    url: "/privacy-policy",
    category: "Legal",
    categorySlug: "legal",
    type: "page",
  },
  {
    title: "Terms & Conditions",
    description: "Terms and conditions for using the Top Finance website.",
    url: "/terms-conditions",
    category: "Legal",
    categorySlug: "legal",
    type: "page",
  },
  {
    title: "Cookie Policy",
    description:
      "Information about how we use cookies on the Top Finance website.",
    url: "/cookie-policy",
    category: "Legal",
    categorySlug: "legal",
    type: "page",
  },
  {
    title: "Blog",
    description:
      "Explore our blog for the latest personal finance tips, credit card reviews, and money-saving strategies.",
    url: "/blog",
    category: "Blog",
    categorySlug: "blog",
    type: "page",
  },
  {
    title: "Financial Solutions",
    description:
      "Browse all credit cards and personal loans to find the right financial solution for you.",
    url: "/financial-solutions",
    category: "Financial Solutions",
    categorySlug: "financial-solutions",
    type: "page",
  },
  {
    title: "Personal Finance",
    description:
      "Expert advice on budgeting, saving, investing, and managing your money effectively.",
    url: "/personal-finance",
    category: "Personal Finance",
    categorySlug: "personal-finance",
    type: "page",
  },
  {
    title: "Credit Card Recommender",
    description:
      "Answer a few questions to find the perfect credit card matched to your needs.",
    url: "/choose-the-perfect-card-for-you-1",
    category: "Tools",
    categorySlug: "tools",
    type: "page",
  },
];

/**
 * Simple tokenizer for search queries
 */
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 1);
}

/**
 * Calculate relevance score for a search result
 */
function calculateScore(item: SearchResult, queryTokens: string[]): number {
  let score = 0;
  const titleTokens = tokenize(item.title);
  const descTokens = tokenize(item.description);
  const categoryTokens = tokenize(item.category);

  for (const queryToken of queryTokens) {
    // Title matches (highest weight)
    for (const titleToken of titleTokens) {
      if (titleToken === queryToken) {
        score += 10; // Exact match
      } else if (titleToken.startsWith(queryToken)) {
        score += 7; // Prefix match
      } else if (titleToken.includes(queryToken)) {
        score += 4; // Contains
      }
    }

    // Description matches (medium weight)
    for (const descToken of descTokens) {
      if (descToken === queryToken) {
        score += 3;
      } else if (descToken.startsWith(queryToken)) {
        score += 2;
      } else if (descToken.includes(queryToken)) {
        score += 1;
      }
    }

    // Category matches (medium weight)
    for (const catToken of categoryTokens) {
      if (catToken === queryToken || catToken.includes(queryToken)) {
        score += 5;
      }
    }

    // Type-based boosting for common queries
    if (
      queryToken === "credit" ||
      queryToken === "card" ||
      queryToken === "cards"
    ) {
      if (item.type === "credit-card") score += 3;
    }
    if (queryToken === "loan" || queryToken === "loans") {
      if (item.type === "loan") score += 3;
    }
  }

  return score;
}

/**
 * Search content with relevance scoring
 */
export function searchContent(
  query: string,
  maxResults: number = 12,
): SearchResult[] {
  if (!query || query.trim().length < 2) return [];

  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) return [];

  // Score all items
  const scoredResults = SEARCH_INDEX.map((item) => ({
    item,
    score: calculateScore(item, queryTokens),
  }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map((result) => result.item);

  return scoredResults;
}

/**
 * Get search suggestions based on partial query
 */
export function getSearchSuggestions(
  query: string,
  maxSuggestions: number = 5,
): string[] {
  if (!query || query.trim().length < 2) return [];

  const lowerQuery = query.toLowerCase();
  const suggestions = new Set<string>();

  for (const item of SEARCH_INDEX) {
    if (suggestions.size >= maxSuggestions) break;

    // Check if title starts with query
    if (item.title.toLowerCase().includes(lowerQuery)) {
      suggestions.add(item.title);
    }
  }

  return Array.from(suggestions);
}

/**
 * Get all indexed content (for debugging or sitemap generation)
 */
export function getAllIndexedContent(): SearchResult[] {
  return [...SEARCH_INDEX];
}

/**
 * Get content by category
 */
export function getContentByCategory(category: string): SearchResult[] {
  return SEARCH_INDEX.filter(
    (item) =>
      item.category.toLowerCase() === category.toLowerCase() ||
      item.categorySlug.toLowerCase() === category.toLowerCase(),
  );
}

/**
 * Get content by type
 */
export function getContentByType(type: SearchResult["type"]): SearchResult[] {
  return SEARCH_INDEX.filter((item) => item.type === type);
}
