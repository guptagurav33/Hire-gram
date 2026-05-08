import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { APPLIED } from "@/lib/mock-data";

export const Route = createFileRoute("/tracker")({
  head: () => ({ meta: [{ title: "Application Tracker — Hireflow" }] }),
  component: Tracker,
});

const STAGES = ["Applied", "Screen", "Interview", "Offer", "Rejected"] as const;

function Tracker() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold">Application Tracker</h1>
            <p className="text-muted-foreground mt-1">Kanban view of every application</p>
          </div>
          <Button className="gradient-primary text-primary-foreground border-0">+ Add manually</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {STAGES.map(stage => {
            const items = APPLIED.filter(a => a.stage === stage);
            return (
              <div key={stage} className="glass rounded-2xl p-4 min-h-[400px]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-sm">{stage}</h3>
                  <Badge variant="outline" className="text-xs">{items.length}</Badge>
                </div>
                <div className="space-y-2">
                  {items.map(a => (
                    <div key={a.id} className="rounded-xl border bg-card/70 p-3 cursor-grab hover:shadow-soft transition">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md gradient-primary grid place-items-center text-primary-foreground font-bold text-xs">
                          {a.company[0]}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium truncate">{a.role}</div>
                          <div className="text-xs text-muted-foreground truncate">{a.company}</div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">{a.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SiteLayout>
  );
}
