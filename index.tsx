import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles, Globe2, Bot, FileText, GraduationCap, LineChart,
  Search, Zap, Shield, Star, ArrowRight, CheckCircle2, Briefcase
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hireflow — AI Job Search & Auto-Apply Platform" },
      { name: "description", content: "Apply to thousands of jobs automatically with AI. Build ATS resumes, close skill gaps, and land your dream role faster." },
    ],
  }),
  component: Landing,
});

const platforms = ["LinkedIn", "Indeed", "Naukri", "Wellfound", "RemoteOK", "WeWorkRemotely", "Glassdoor", "Internshala"];

function Landing() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroBg} alt="" width={1920} height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-grid opacity-30" />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-32 text-center">
          <Badge variant="outline" className="glass mb-6 gap-2 px-4 py-1.5 text-xs">
            <Sparkles className="h-3 w-3 text-primary" />
            AI-powered career operating system
          </Badge>
          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Land your dream job.
            <br />
            <span className="gradient-text">On autopilot.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Hireflow discovers jobs across 8+ platforms, auto-applies with tailored resumes
            and AI cover letters, and closes your skill gaps with free courses.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/dashboard">
              <Button size="lg" className="gradient-primary text-primary-foreground border-0 glow h-12 px-7">
                Start applying free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/jobs">
              <Button size="lg" variant="outline" className="h-12 px-7 glass">
                Browse jobs
              </Button>
            </Link>
          </div>

          {/* Platform marquee */}
          <div className="mt-16">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Aggregating jobs from
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {platforms.map((p) => (
                <span key={p} className="glass rounded-full px-4 py-1.5 text-sm">{p}</span>
              ))}
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["2.4M+", "Live jobs"],
              ["48K", "Auto-applies/day"],
              ["94%", "ATS pass rate"],
              ["180+", "Countries"],
            ].map(([n, l]) => (
              <div key={l} className="glass rounded-2xl p-5">
                <div className="font-display text-3xl font-bold gradient-text">{n}</div>
                <div className="mt-1 text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Everything you need to <span className="gradient-text">get hired</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            One platform replaces five tools. Save hours every week and apply smarter.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Globe2, title: "Global Job Aggregator", desc: "Real-time listings from LinkedIn, Indeed, Naukri, Wellfound, RemoteOK and more — deduped." },
            { icon: Bot, title: "AI Auto-Apply", desc: "Detects Easy Apply, fills forms, and submits with tailored resume + cover letter." },
            { icon: Search, title: "Google Job Crawler", desc: "Finds fresh openings on company career pages before they hit job boards." },
            { icon: FileText, title: "ATS Resume Builder", desc: "Optimized for keywords, scored in real time, exports PDF & DOCX." },
            { icon: GraduationCap, title: "Free Course Library", desc: "Skill-gap analysis with curated picks from Coursera, edX, YouTube, freeCodeCamp." },
            { icon: LineChart, title: "Career Analytics", desc: "Track applications, response rates, and interviews with beautiful dashboards." },
          ].map((f) => (
            <div key={f.title} className="glass rounded-2xl p-6 transition-all hover:shadow-soft hover:-translate-y-1">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary shadow-soft">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-24">
        <div className="absolute inset-0 gradient-glow opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">How it works</Badge>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              From profile to <span className="gradient-text">offer</span> in 4 steps
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", icon: FileText, title: "Build your profile", desc: "Import LinkedIn or upload resume. AI extracts skills." },
              { n: "02", icon: Briefcase, title: "Set preferences", desc: "Roles, locations, salary, visa needs — be specific." },
              { n: "03", icon: Zap, title: "Turn on auto-apply", desc: "AI applies to matching jobs daily with tailored content." },
              { n: "04", icon: Star, title: "Land interviews", desc: "Track every application and prep with our AI coach." },
            ].map((s) => (
              <div key={s.n} className="glass rounded-2xl p-6">
                <div className="text-xs font-mono text-primary">{s.n}</div>
                <s.icon className="mt-3 h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Loved by job seekers</Badge>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Real results, <span className="gradient-text">real fast</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Priya S.", role: "SWE @ Google", q: "Auto-applied to 220 jobs in two weeks. Got 14 interviews. Hireflow paid for itself." },
            { name: "Marcus L.", role: "Product Manager", q: "The ATS scoring is uncanny. My resume went from 62 to 94 and recruiters started replying." },
            { name: "Aisha K.", role: "Data Scientist", q: "Skill-gap analysis pointed me to a free course that landed me my Berlin offer." },
          ].map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6">
              <div className="flex gap-1 text-warning">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed">"{t.q}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full gradient-primary" />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-12 text-center">
          <div className="absolute inset-0 gradient-glow opacity-60" />
          <div className="relative">
            <Shield className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Your AI career copilot is <span className="gradient-text">waiting</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              7-day free trial. No credit card. Cancel anytime.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/dashboard">
                <Button size="lg" className="gradient-primary text-primary-foreground border-0 glow h-12 px-7">
                  Get started free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="h-12 px-7 glass">View pricing</Button>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              {["No card required", "Cancel anytime", "GDPR compliant"].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
