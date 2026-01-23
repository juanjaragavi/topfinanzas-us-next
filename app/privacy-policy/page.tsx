<<<<<<< Updated upstream
import fs from "fs";
import path from "path";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { logger } from "@/lib/logger";

export const metadata = {
  title: "Privacy Policy - TopFinance UK",
  description:
    "Learn how TopFinance UK protects your personal information and what rights you have over your data.",
};

export default async function PrivacyPolicyPage() {
  // Read the MDX file
  const filePath = path.join(process.cwd(), "content/legal/privacy-policy.mdx");
  let source = "# Privacy Policy\n\nContent not found.";

  try {
    if (fs.existsSync(filePath)) {
      source = fs.readFileSync(filePath, "utf8");
    }
  } catch (error) {
    logger.error("Error loading privacy policy file:", error);
    source =
      "# Error Loading Content\n\nWe apologise, there was an error loading this content.";
  }

  // Compile MDX content, properly handling frontmatter
  const { content } = await compileMDX({
    source,
    components: useMDXComponents({}),
    options: { parseFrontmatter: true },
  });

=======
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Top Finanzas US",
  description:
    "Privacy Policy for Top Finanzas US. Learn how we collect, use, and share your personal information.",
};

export default function PrivacyPolicyPage() {
>>>>>>> Stashed changes
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-[#2E74B5] mb-8 border-b-2 border-gray-200 pb-4">
        Privacy Policy
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
        <section>
          <p className="font-semibold text-gray-900">
            Effective Date: January 10th 2024
          </p>
          <p>
            Top Networks Inc. (“we,” “our,” or “us”) is committed to protecting
            your personal information. This Privacy Policy describes how we
            collect, use, and share your data, the security measures we employ,
            and the rights you have over your personal information. We recommend
            that you read this policy carefully.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2E74B5]">1. Who We Are</h2>
          <p>
            Top Networks Inc. operates{" "}
            <a href="https://topfinanzas.com">www.topfinanzas.com</a>{" "}
            (“Platform” or “Site”), a platform for financial information and
            product recommendations. Our mission is to provide users with
            tailored content about financial services and products. Top Networks
            Inc. is incorporated in Panama, and we abide by both international
            and U.S. regulations to protect your data.
          </p>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your data, please contact us at{" "}
            <a href="mailto:info@topfinanzas.com">info@topfinanzas.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2E74B5]">
            2. Types of Information We Collect
          </h2>
          <p>
            We collect several types of information from and about users of our
            Site:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Identification Information:</strong> Such as
              name, email address, contact information, date of birth, and
              government ID, which you provide directly.
            </li>
            <li>
              <strong>Financial Information:</strong> Including income, credit
              status, and employment information, needed for us to tailor
              financial recommendations.
            </li>
            <li>
              <strong>Device and Browsing Information:</strong> IP address,
              browser type, operating system, device type, and browsing behavior
              on our Site.
            </li>
            <li>
              <strong>Usage Data:</strong> Details about interactions on our
              Site, including pages visited, links clicked, and other engagement
              metrics.
            </li>
            <li>
              <strong>Geolocation Data:</strong> Location information if you
              have provided consent through your device settings.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2E74B5]">
            3. How We Collect Information
          </h2>
          <p>We collect information in the following ways:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Directly From You:</strong> Information you provide when
              filling out forms, signing up for newsletters, or contacting us.
            </li>
            <li>
              <strong>Automatically Through Technology:</strong> We use cookies,
              web beacons, and other tracking technologies to automatically
              gather information as you navigate through the Site.
            </li>
            <li>
              <strong>From Third-Party Partners:</strong> We may receive
              information from partners for marketing, legal compliance, and
              enhanced services.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2E74B5]">
            4. How We Use Your Information
          </h2>
          <p>
            Your data allows us to improve and personalize your experience on
            our Site. Specifically, we use it to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Deliver relevant content, recommendations, and services tailored
              to your interests.
            </li>
            <li>
              Respond to inquiries, provide support, and communicate with you.
            </li>
            <li>Conduct analytics and improve Site functionality.</li>
            <li>
              Send updates, promotions, and marketing information (only with
              your consent).
            </li>
            <li>
              Fulfill legal obligations and protect the security and integrity
              of our Site.
            </li>
            <li>
              Offer you products and services that match your preferences and
              interests.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2E74B5]">
            5. Sharing and Disclosure of Your Information
          </h2>
          <p>We share your information only in specific circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service Providers:</strong> We work with third-party
              providers for services such as hosting, data analysis, and
              marketing, who may access your information strictly to provide
              services on our behalf.
            </li>
            <li>
              <strong>Business Partners:</strong> If we collaborate with other
              companies to offer products or services, we may share your
              information as necessary.
            </li>
            <li>
              <strong>Legal Compliance:</strong> We may disclose your
              information when required by law, such as in response to a
              subpoena or to protect our rights.
            </li>
            <li>
              <strong>Business Transfers:</strong> In case of a merger, sale, or
              other business transfer, your data may be transferred to the new
              entity.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2E74B5]">
            6. Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies and similar technologies to enhance user experience,
            analyze usage, and deliver targeted content.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Types of Cookies We Use:</strong> These include essential
              cookies for Site functionality, performance cookies for tracking
              user behavior, and marketing cookies for personalized
              advertisements.
            </li>
            <li>
              <strong>Managing Cookies:</strong> You can control cookies through
              your browser settings. However, disabling cookies may limit your
              experience on the Site.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2E74B5]">
            9. Retention and Deletion of Personal Data
          </h2>
          <p>
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy or as required
            by law. When the data is no longer needed, we securely delete or
            anonymize it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2E74B5]">
            15. Contact Information
          </h2>
          <p>
            If you have any questions, comments, or requests regarding this
            Privacy Policy, please contact us at:
          </p>
          <p className="mt-4">
            <strong>Top Networks Inc.</strong>
            <br />
            Email:{" "}
            <a href="mailto:info@topfinanzas.com">info@topfinanzas.com</a>
            <br />
            Address: PANAMA, PANAMA CITY, AV. AQUILINO DE LA GUARDIA, OCEAN
            BUSINESS PLAZA BUILDING, FLOOR 12
          </p>
        </section>
      </div>
    </main>
  );
}
