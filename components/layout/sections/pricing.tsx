import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Get started with AskMyMoney at no cost. Perfect for trying it out.",
    buttonText: "Start Free",
    benefitList: [
      "1 bank account",
      "30 queries per month",
      "Core AI features",
      "Transaction search",
      "Community support",
    ],
  },
  {
    title: "Monthly",
    popular: 1,
    price: 8,
    description:
      "Full unlimited access to all features with flexible monthly billing.",
    buttonText: "Get Started",
    benefitList: [
      "Unlimited bank accounts",
      "Unlimited queries",
      "All AI features",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    title: "Annual",
    popular: 0,
    price: 90,
    description:
      "Save with annual billing. Best value for committed users.",
    buttonText: "Save with Annual",
    benefitList: [
      "Unlimited bank accounts",
      "Unlimited queries",
      "All AI features",
      "Advanced analytics",
      "Priority support",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Simple, Transparent Pricing
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Start free in sandbox mode, then upgrade when you&apos;re ready to connect your real accounts.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> {title === "Annual" ? "/year" : "/month"}</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
