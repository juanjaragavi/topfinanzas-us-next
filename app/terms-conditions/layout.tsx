import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
