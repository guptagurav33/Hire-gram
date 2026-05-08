import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, Sparkles, Download, Wand2, Linkedin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({ meta: [{ title: "AI Resume Builder — Hireflow" }] }),
  component: ResumeBuilder,
});

function ResumeBuilder() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold">AI Resume Builder</h1>
            <p className="text-muted-foreground mt-1">ATS-optimized · tailored per role · exports PDF/DOCX</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline"><Linkedin className="mr-2 h-4 w-4" /> Import LinkedIn</Button>
            <Button className="gradient-primary text-primary-foreground border-0">
              <Download className="mr-2 h-4 w-4" /> Export PDF
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
          {/* Editor */}
          <div className="glass rounded-2xl p-6 space-y-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> Profile</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div><Label>Full Name</Label><Input defaultValue="Alex Morgan" className="mt-1.5" /></div>
                <div><Label>Title</Label><Input defaultValue="Senior Frontend Engineer" className="mt-1.5" /></div>
                <div><Label>Email</Label><Input defaultValue="alex@hireflow.dev" className="mt-1.5" /></div>
                <div><Label>Location</Label><Input defaultValue="Berlin, Germany" className="mt-1.5" /></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Label>Professional Summary</Label>
                <Button size="sm" variant="ghost" className="text-primary">
                  <Wand2 className="mr-1 h-3.5 w-3.5" /> AI generate
                </Button>
              </div>
              <Textarea rows={4} defaultValue="Senior frontend engineer with 7+ years building scalable React applications. Shipped products used by 12M+ users and led teams of 8 engineers across multiple time zones." />
            </div>

            <div>
              <Label>Target job description (for tailoring)</Label>
              <Textarea rows={5} className="mt-1.5" placeholder="Paste a job description and our AI will tailor your resume keywords..." />
              <Button className="mt-3 gradient-primary text-primary-foreground border-0">
                <Wand2 className="mr-2 h-4 w-4" /> Tailor resume
              </Button>
            </div>

            <div>
              <Label className="mb-2 block">Skills</Label>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Next.js", "GraphQL", "Node.js", "Tailwind", "Jest", "Figma"].map(s =>
                  <Badge key={s} variant="outline" className="text-sm py-1 px-3">{s} ×</Badge>
                )}
                <Badge variant="outline" className="text-sm py-1 px-3 cursor-pointer hover:bg-accent">+ Add</Badge>
              </div>
            </div>
          </div>

          {/* Score panel */}
          <div className="space-y-4">
            <div className="glass rounded-2xl p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 gradient-glow opacity-50" />
              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Resume Score</div>
                <div className="font-display text-6xl font-bold gradient-text mt-2">94</div>
                <div className="text-sm text-muted-foreground">out of 100</div>
                <Progress value={94} className="h-2 mt-4" />
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-3">ATS Compatibility</h3>
              <div className="space-y-2.5 text-sm">
                {[
                  ["Keyword match (React, TS)", true],
                  ["Standard sections detected", true],
                  ["Quantified achievements", true],
                  ["Single-column layout", true],
                  ["File format optimal", true],
                  ["Avoid graphics & tables", false],
                ].map(([t, ok]) => (
                  <div key={t as string} className="flex items-center gap-2">
                    <CheckCircle2 className={`h-4 w-4 ${ok ? "text-success" : "text-muted-foreground/40"}`} />
                    <span className={ok ? "" : "line-through text-muted-foreground"}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" /> Templates
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {["Modern", "Classic", "Compact"].map((t, i) => (
                  <button key={t} className={`aspect-[3/4] rounded-lg border-2 p-2 text-xs ${i === 0 ? "border-primary glow" : "border-border hover:border-primary/50"}`}>
                    <div className="bg-card h-full rounded flex items-end justify-center pb-2">{t}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
