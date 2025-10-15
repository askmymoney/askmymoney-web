import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "MessageCircle",
    title: "Natural Conversations",
    description:
      "Ask questions about your finances in plain English. No complex dashboards or confusing menus - just talk to your money naturally.",
  },
  {
    icon: "Zap",
    title: "Instant Insights",
    description:
      "Get real-time analysis of your spending, balances, and transactions. AI-powered insights delivered in seconds, not hours.",
  },
  {
    icon: "Bell",
    title: "Smart Alerts",
    description:
      "Proactive warnings about low balances, high credit utilization, and unusual spending patterns. Stay on top of your finances effortlessly.",
  },
  {
    icon: "PieChart",
    title: "Spending Analysis",
    description:
      "Automatic categorization and trend detection. Understand where your money goes with intelligent spending breakdowns.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Financial Intelligence at Your Fingertips
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            AskMyMoney transforms how you interact with your finances. No more
            spreadsheets, no more manual tracking. Just intelligent conversations
            that give you the answers you need, when you need them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
