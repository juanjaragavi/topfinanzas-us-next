<<<<<<< Updated upstream:app/terms/page.tsx
import fs from "fs";
import path from "path";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { logger } from "@/lib/logger";

export const metadata = {
  title: "Terms and Conditions - TopFinance UK",
  description:
    "Read the Terms and Conditions for the use of TopFinance UK services and website.",
};

export default async function TermsPage() {
  // Read the MDX file
  const filePath = path.join(
    process.cwd(),
    "content/legal/terms-conditions.mdx",
  );
  let source = "# Terms and Conditions\n\nContent not found.";

  try {
    if (fs.existsSync(filePath)) {
      source = fs.readFileSync(filePath, "utf8");
    }
  } catch (error) {
    logger.error("Error loading terms and conditions file:", error);
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
  title: "Terms & Conditions | Top Finanzas US",
  description: "Terms and Conditions of Use for Top Finanzas US.",
};

export default function TermsConditionsPage() {
>>>>>>> Stashed changes:app/terms-conditions/page.tsx
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-[#2E74B5] mb-8 border-b-2 border-gray-200 pb-4">
        Terms & Conditions
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
        <section>
          <p className="font-bold">
            PLEASE READ THESE TERMS AND CONDITIONS OF USE CAREFULLY, AS YOUR USE
            OF THE SITE INDICATES YOUR AGREEMENT TO THESE TERMS.
          </p>
          <p>
            The platform{" "}
            <a href="http://www.topfinanzas.com">www.topfinanzas.com</a> (the
            “Platform” or “Site”) is owned and operated by Top Networks Inc.
            (“Top Networks,” “we,” “our,” or “us”), a company incorporated under
            the laws of the Republic of Panama. Our Site provides financial
            information and product recommendations, offering informational
            resources and analyses of various financial services and products,
            such as credit cards, loans, and investment opportunities.
          </p>
          <p>
            These Terms and Conditions of Use (the “Terms”) are available to
            users at all times and apply alongside our Privacy Policy. By using
            or accessing the Site, you confirm that you have read, understood,
            and agree to these Terms. If you do not agree to all Terms, please
            do not use the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2E74B5]">
            1. About www.topfinanzas.com
          </h2>
          <p>
            Topfinanzas.com is a website created to inform users about financial
            products and services offered by partner companies. It aims to
            assist users in selecting products that meet their specific
            financial needs and preferences.
          </p>
          <p>
            Whenever we use “Top Networks,” “we,” or “our,” we refer to Top
            Networks Inc.; similarly, when we use “you” or “user,” we refer to
            the individuals consenting to these Terms and accessing the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2E74B5]">
            2. User Responsibilities for Access
          </h2>
          <p>
            The user is responsible for obtaining the necessary equipment
            (computer, smartphone, tablet) and software (browser) required to
            access the Site, as well as maintaining a secure browsing
            environment. This includes updating antivirus, firewall, and other
            cybersecurity tools to mitigate potential risks.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2E74B5]">
            3. Site Access and Usage
          </h2>
          <p>
            In general, no prior registration is required to access Site
            content. However, certain services may require user registration. By
            registering, you confirm that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You are at least 18 years old.</li>
            <li>
              The information provided is accurate, complete, and up-to-date.
            </li>
            <li>
              You will maintain the accuracy of your information and promptly
              update it as needed.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2E74B5]">
            9. Disclaimer of Warranties
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                A) No Warranties
              </h3>
              <p className="uppercase text-sm">
                TOP NETWORKS INC. EXPRESSLY DISCLAIMS ANY IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET
                ENJOYMENT, OR NON-INFRINGEMENT, AS WELL AS ANY WARRANTIES
                ARISING OUT OF USAGE OR TRADE PRACTICE. USERS ASSUME ALL RISK
                FOR ANY AND ALL DAMAGES THAT MAY RESULT FROM THEIR USE OF OR
                ACCESS TO THE SITE.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                B) No Guarantee of Accuracy
              </h3>
              <p className="uppercase text-sm">
                TOP NETWORKS INC. DOES NOT GUARANTEE THE ACCURACY OF, AND
                DISCLAIMS ALL LIABILITY FOR, ERRORS OR INACCURACIES IN ANY
                INFORMATION, CONTENT, RECOMMENDATIONS, OR MATERIALS AVAILABLE
                THROUGH THE SITE.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2E74B5]">
            11. Governing Law
          </h2>
          <p>
            These Terms are governed by and construed under the laws of the
            Republic of Panama, without regard to conflict of law principles.
            All legal actions arising from or relating to these Terms shall be
            brought exclusively in the courts of Panama City, Republic of
            Panama.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#2E74B5]">
            15. Contact Information
          </h2>
          <p>
            For questions or concerns about these Terms, you may contact us at:
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
