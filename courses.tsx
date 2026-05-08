import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { COURSES } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bookmark, Clock, Star, Search, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({ meta: [{ title: "Free Courses — Hireflow" }] }),
  component: Courses,
});

function Courses() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold">Free Course Library</h1>
          <p className="text-muted-foreground mt-1">Curated to close your skill gaps · 100% free</p>
        </div>

        <div className="glass rounded-2xl p-4 flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search Kubernetes, Python, Marketing..." className="pl-9 bg-background/50" />
          </div>
          <Button className="gradient-primary text-primary-foreground border-0">Search</Button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {["All", "Coursera", "Udemy", "edX", "YouTube", "freeCodeCamp", "HubSpot", "Google"].map((t, i) => (
            <Badge key={t} variant={i === 0 ? "default" : "outline"} className={i === 0 ? "gradient-primary border-0 text-primary-foreground" : "cursor-pointer hover:bg-accent"}>
              {t}
            </Badge>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map(c => (
            <div key={c.id} className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary">
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <Button variant="ghost" size="icon"><Bookmark className="h-4 w-4" /></Button>
              </div>
              <h3 className="mt-4 font-semibold leading-snug">{c.title}</h3>
              <div className="text-sm text-muted-foreground mt-1">{c.provider}</div>
              <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {c.duration}</span>
                <span className="flex items-center gap-1"><Star className="h-3 w-3 text-warning fill-warning" /> {c.rating}</span>
                <span>· {c.level}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {c.skills.map(s => <Badge key={s} variant="secondary">{s}</Badge>)}
              </div>
              <Button className="mt-4 w-full" variant="outline">Start course</Button>
            </div>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
