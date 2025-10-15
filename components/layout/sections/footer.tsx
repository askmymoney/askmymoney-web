import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Image
                src="/logo.png"
                alt="AskMyMoney Logo"
                width={36}
                height={36}
                className="w-9 h-9 mr-2 rounded-lg"
              />

              <h3 className="text-2xl">AskMyMoney</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Product</h3>
            <div>
              <Link href="#features" className="opacity-60 hover:opacity-100">
                Features
              </Link>
            </div>

            <div>
              <Link href="#pricing" className="opacity-60 hover:opacity-100">
                Pricing
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Resources</h3>
            <div>
              <Link href="https://github.com/askmymoney" target="_blank" className="opacity-60 hover:opacity-100">
                Documentation
              </Link>
            </div>

            <div>
              <Link href="https://github.com/askmymoney" target="_blank" className="opacity-60 hover:opacity-100">
                GitHub
              </Link>
            </div>

            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Support
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link href="mailto:support@askmymoney.ai?subject=General%20Inquiry" className="opacity-60 hover:opacity-100">
                General Inquiry
              </Link>
            </div>

            <div>
              <Link href="mailto:support@askmymoney.ai?subject=Technical%20Support" className="opacity-60 hover:opacity-100">
                Technical Support
              </Link>
            </div>

            <div>
              <Link href="mailto:partnerships@askmymoney.ai?subject=Partnership%20Opportunity" className="opacity-60 hover:opacity-100">
                Partnerships
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Social</h3>
            <div>
              <Link href="https://linkedin.com/company/askmymoney" target="_blank" className="opacity-60 hover:opacity-100">
                LinkedIn
              </Link>
            </div>

            <div>
              <Link href="https://x.com/askmymoney" target="_blank" className="opacity-60 hover:opacity-100">
                X (Twitter)
              </Link>
            </div>

            <div>
              <Link href="https://instagram.com/askmymoneyai" target="_blank" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2025 AskMyMoney. All rights reserved.
          </h3>
        </section>
      </div>
    </footer>
  );
};
