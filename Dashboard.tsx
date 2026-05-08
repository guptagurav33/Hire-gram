import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { APPLIED } from "@/lib/mock-data";
import {
  Briefcase, Send, FileCheck2, CalendarDays, TrendingUp, Sparkles,
  Bot, ArrowUpRight, Target, Zap
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Hireflow" }] }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-sm text-muted-foreground">Welcome back, Alex 👋</p>
            <h1 className="font-display text-3xl font-bold mt-1">Your career, on autopilot</h1>
          </div>
          <div className="flex gap-2">
            <Link to="/jobs"><Button variant="outline" className="glass">Browse jobs</Button></Link>
            <Button className="gradient-primary border-0 text-primary-foreground">
              <Zap className="mr-2 h-4 w-4" /> Auto-Apply ON
            </Button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Send, label: "Jobs Applied", value: "247", trend: "+18 today", color: "primary" },
            { icon: FileCheck2, label: "Resume Score", value: "94/100", trend: "ATS optimized", color: "success" },
            { icon: Briefcase, label: "Active Interviews", value: "5", trend: "2 this week", color: "warning" },
            { icon: TrendingUp, label: "Response Rate", value: "12.4%", trend: "+3.2% vs avg", color: "primary" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <s.icon className="h-5 w-5 text-primary" />
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="mt-3 font-display text-3xl font-bold">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
              <div className="mt-2 text-xs text-success">{s.trend}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 mt-8 lg:grid-cols-3">
          {/* Recent applications */}
          <div className="glass rounded-2xl p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Recent applications</h3>
              <Link to="/tracker" className="text-sm text-primary hover:underline">View all →</Link>
            </div>
            <div className="space-y-3">
              {APPLIED.slice(0, 5).map((a) => (
                <div key={a.id} className="flex items-center justify-between rounded-xl border bg-card/50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg gradient-primary grid place-items-center text-primary-foreground font-bold text-sm">
                      {a.company[0]}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{a.role}</div>
                      <div className="text-xs text-muted-foreground">{a.company} · {a.date}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="capitalize">{a.stage}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* AI Coach card */}
          <div className="glass rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 gradient-glow opacity-50" />
            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-semibold">AI Career Coach</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                "Your React skills are strong. Add Kubernetes to unlock 340 more roles."
              </p>
              <Link to="/assistant">
                <Button className="mt-4 w-full gradient-primary text-primary-foreground border-0">
                  Chat with coach <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Skill gap & upcoming */}
        <div className="grid gap-6 mt-6 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Skill gap analysis</h3>
            </div>
            <div className="space-y-4">
              {[
                ["React", 92], ["TypeScript", 88], ["Node.js", 76],
                ["Kubernetes", 34], ["GraphQL", 58]
              ].map(([skill, val]) => (
                <div key={skill as string}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span>{skill}</span>
                    <span className="text-muted-foreground">{val}%</span>
                  </div>
                  <Progress value={val as number} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <CalendarDays className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Upcoming interviews</h3>
            </div>
            <div className="space-y-3">
              {[
                { c: "Stripe", r: "Tech screen", t: "Tomorrow · 2:00 PM" },
                { c: "Vercel", r: "System design", t: "Thu · 4:30 PM" },
                { c: "GitLab", r: "Final round", t: "Next Mon · 11:00 AM" },
              ].map((i) => (
                <div key={i.c} className="flex items-center justify-between rounded-xl border bg-card/50 p-4">
                  <div>
                    <div className="font-medium text-sm">{i.c} — {i.r}</div>
                    <div className="text-xs text-muted-foreground">{i.t}</div>
                  </div>
                  <Button size="sm" variant="outline">Prep</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
