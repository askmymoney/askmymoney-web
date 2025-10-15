import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";

export const metadata = {
  title: "AskMyMoney - AI Financial Assistant",
  description: "Talk to your money with AI. Get instant insights, spending analysis, and financial guidance through natural conversation powered by Claude and Plaid.",
  openGraph: {
    type: "website",
    url: "https://askmymoney.ai",
    title: "AskMyMoney - AI Financial Assistant",
    description: "Talk to your money with AI. Get instant insights, spending analysis, and financial guidance through natural conversation.",
    images: [
      {
        url: "https://askmymoney.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AskMyMoney - AI Financial Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@askmymoney",
    title: "AskMyMoney - AI Financial Assistant",
    description: "Talk to your money with AI. Get instant insights, spending analysis, and financial guidance through natural conversation.",
    images: ["https://askmymoney.ai/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
