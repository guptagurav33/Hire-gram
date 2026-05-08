import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing — Hireflow" }] }),
  component: Pricing,
});

const tiers = [
  {
    name: "Free", price: "$0", desc: "Get a feel for AI-powered job search.",
    features: ["50 job searches / mo", "Basic resume builder", "Apply manually", "Course recommendations"],
    cta: "Start free", featured: false,
  },
  {
    name: "Pro", price: "$19", suffix: "/mo", desc: "For active job seekers ready to level up.",
    features: ["Unlimited searches", "AI Auto-Apply (50/day)", "ATS resume scoring", "AI cover letters", "Priority support", "Interview prep"],
    cta: "Start 7-day trial", featured: true,
  },
  {
    name: "Career+", price: "$49", suffix: "/mo", desc: "Maximum automation for power users.",
    features: ["Everything in Pro", "Unlimited auto-applies", "Google jobs crawler", "1:1 AI career coach", "Salary negotiation tools", "LinkedIn optimization"],
    cta: "Get Career+", featured: false,
  },
];

function Pricing() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-14">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            Simple <span className="gradient-text">pricing</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Land your dream job for less than a coffee a day. Cancel anytime.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map(t => (
            <div key={t.name}
              className={`relative rounded-3xl p-8 ${t.featured ? "glass-strong glow border-primary/40" : "glass"}`}>
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Most popular
                </div>
              )}
              <h3 className="font-display text-xl font-bold">{t.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">{t.price}</span>
                {t.suffix && <span className="text-muted-foreground text-sm">{t.suffix}</span>}
              </div>
              <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
              <Link to="/dashboard">
                <Button className={`mt-6 w-full ${t.featured ? "gradient-primary text-primary-foreground border-0" : ""}`}
                  variant={t.featured ? "default" : "outline"}>
                  {t.cta}
                </Button>
              </Link>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map(f => (
                  <li key={f} className="flex gap-2">
                    <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
