import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Layers",
    title: "Multi-Account Support",
    description:
      "Connect all your financial accounts in one place. View checking, savings, credit cards, and investments together.",
  },
  {
    icon: "Shield",
    title: "Bank-Grade Security",
    description:
      "Powered by Plaid's industry-standard API with OAuth authentication. Your credentials are never stored.",
  },
  {
    icon: "Brain",
    title: "AI-Powered Analysis",
    description:
      "Claude AI understands context and provides intelligent insights about your financial patterns and trends.",
  },
  {
    icon: "Lock",
    title: "Privacy First",
    description:
      "Your financial data stays secure and private. We never share or sell your information to third parties.",
  },
  {
    icon: "Search",
    title: "Smart Transaction Search",
    description:
      "Find transactions using natural language. Ask about specific purchases, merchants, or date ranges.",
  },
  {
    icon: "TrendingUp",
    title: "Category Insights",
    description:
      "Automatic spending categorization and analysis. See exactly where your money goes each month.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Built for Security and Intelligence
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        AskMyMoney combines enterprise-grade security with cutting-edge AI to
        give you a financial assistant that&apos;s both powerful and trustworthy.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
