import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. AskMyMoney uses Plaid's bank-grade security infrastructure. Your bank credentials are never stored on our servers. All data is encrypted in transit and at rest, and we follow industry best practices for data protection.",
    value: "item-1",
  },
  {
    question: "What banks and financial institutions are supported?",
    answer:
      "Through Plaid, AskMyMoney supports over 12,000 financial institutions including all major US banks, credit unions, and investment platforms. This includes Chase, Bank of America, Wells Fargo, Citi, and many more.",
    value: "item-2",
  },
  {
    question:
      "How does AskMyMoney access my bank accounts?",
    answer:
      "We use Plaid's secure OAuth connection. You authenticate directly with your bank through Plaid Link - we never see your banking credentials. You can revoke access at any time through your bank's settings.",
    value: "item-3",
  },
  {
    question: "Can I disconnect my bank accounts at any time?",
    answer: "Yes, absolutely. You have full control over your connected accounts. You can disconnect any account instantly through your settings, and all associated data will be removed from our system.",
    value: "item-4",
  },
  {
    question:
      "What AI model powers AskMyMoney?",
    answer: "AskMyMoney is powered by Claude, Anthropic's advanced AI assistant. Claude excels at understanding context, analyzing financial patterns, and providing helpful insights in natural conversation.",
    value: "item-5",
  },
  {
    question: "How does pricing work?",
    answer: "Start free with sandbox mode using demo data. Upgrade to Personal ($9/mo) to connect real accounts. Premium ($29/mo) adds advanced analytics and priority features. No long-term contracts - cancel anytime.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
