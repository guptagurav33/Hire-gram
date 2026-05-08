import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { JOBS, COUNTRIES, SOURCES } from "@/lib/mock-data";
import { Search, MapPin, Building2, Zap, Bookmark, ArrowRight, Filter, Globe } from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/jobs")({
  head: () => ({ meta: [{ title: "Job Search — Hireflow" }] }),
  component: Jobs,
});

function Jobs() {
  const [q, setQ] = useState("");
  const [country, setCountry] = useState("All");
  const [remote, setRemote] = useState<string[]>([]);
  const [easyOnly, setEasyOnly] = useState(false);

  const filtered = useMemo(() => JOBS.filter(j =>
    (!q || (j.title + j.company + j.skills.join(" ")).toLowerCase().includes(q.toLowerCase())) &&
    (country === "All" || j.country === country) &&
    (remote.length === 0 || remote.includes(j.remote)) &&
    (!easyOnly || j.easyApply)
  ), [q, country, remote, easyOnly]);

  const toggleRemote = (r: string) =>
    setRemote(prev => prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r]);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6">
          <h1 className="font-display text-3xl font-bold">Job Search</h1>
          <p className="text-muted-foreground mt-1">2.4M+ live listings · refreshed every 5 min</p>
        </div>

        {/* Search bar */}
        <div className="glass rounded-2xl p-4 flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input value={q} onChange={e => setQ(e.target.value)} placeholder="Role, skill, or company"
              className="pl-9 bg-background/50" />
          </div>
          <Button className="gradient-primary text-primary-foreground border-0">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
          <Button variant="outline" className="gap-2">
            <Zap className="h-4 w-4 text-primary" /> Auto-Apply
          </Button>
        </div>

        <div className="grid gap-6 mt-6 lg:grid-cols-[280px_1fr]">
          {/* Filters */}
          <aside className="glass rounded-2xl p-5 h-fit space-y-6 sticky top-20">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" /> <h3 className="font-semibold">Filters</h3>
            </div>

            <div>
              <Label className="text-xs uppercase text-muted-foreground">Country</Label>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {COUNTRIES.map(c => (
                  <button key={c} onClick={() => setCountry(c)}
                    className={`text-xs px-2.5 py-1 rounded-full border transition ${country === c ? "gradient-primary text-primary-foreground border-transparent" : "hover:bg-accent"}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-xs uppercase text-muted-foreground">Work mode</Label>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {["Remote", "Hybrid", "Onsite"].map(r => (
                  <button key={r} onClick={() => toggleRemote(r)}
                    className={`text-xs px-2.5 py-1 rounded-full border ${remote.includes(r) ? "gradient-primary text-primary-foreground border-transparent" : "hover:bg-accent"}`}>
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-xs uppercase text-muted-foreground">Salary (USD)</Label>
              <Slider defaultValue={[60]} max={300} step={10} className="mt-3" />
              <div className="text-xs text-muted-foreground mt-1">$60k+</div>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="easy" className="text-sm">Easy Apply only</Label>
              <Switch id="easy" checked={easyOnly} onCheckedChange={setEasyOnly} />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="visa" className="text-sm">Visa sponsorship</Label>
              <Switch id="visa" />
            </div>

            <div>
              <Label className="text-xs uppercase text-muted-foreground">Sources</Label>
              <div className="mt-2 space-y-1.5">
                {SOURCES.map(s => (
                  <div key={s} className="flex items-center justify-between text-sm">
                    <span>{s}</span>
                    <Switch defaultChecked />
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="space-y-3">
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <Globe className="h-4 w-4" /> {filtered.length} jobs match your filters
            </div>
            {filtered.map(j => (
              <div key={j.id} className="glass rounded-2xl p-5 transition hover:shadow-soft hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center text-primary-foreground font-bold">
                      {j.company[0]}
                    </div>
                    <div>
                      <h3 className="font-semibold">{j.title}</h3>
                      <div className="text-sm text-muted-foreground flex items-center gap-3 mt-1 flex-wrap">
                        <span className="flex items-center gap-1"><Building2 className="h-3.5 w-3.5" />{j.company}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{j.location}, {j.country}</span>
                        <span>· {j.posted}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        <Badge variant="outline">{j.remote}</Badge>
                        <Badge variant="outline">{j.salary}</Badge>
                        <Badge variant="outline">{j.source}</Badge>
                        {j.visa && <Badge variant="outline" className="border-success/40 text-success">Visa</Badge>}
                        {j.easyApply && <Badge className="gradient-primary border-0 text-primary-foreground">⚡ Easy Apply</Badge>}
                        {j.skills.slice(0, 3).map(s => <Badge key={s} variant="secondary">{s}</Badge>)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">{j.matchScore}</div>
                    <div className="text-xs text-muted-foreground">match score</div>
                    <div className="mt-3 flex gap-2">
                      <Button variant="ghost" size="icon"><Bookmark className="h-4 w-4" /></Button>
                      <Button size="sm" className="gradient-primary text-primary-foreground border-0">
                        Apply <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
