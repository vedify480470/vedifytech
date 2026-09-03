import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { Chatbot } from "@/components/shared/chatbot";
import { MarketingPopup } from "@/components/shared/marketing-popup";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
      <Chatbot />
      <MarketingPopup />
    </>
  );
}
