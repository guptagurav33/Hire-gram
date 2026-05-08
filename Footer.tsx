import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg gradient-primary">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="gradient-text">Hireflow</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Your AI career operating system. Discover, apply, and grow — automatically.
          </p>
        </div>
        {[
          { title: "Product", links: [["Jobs", "/jobs"], ["Resume Builder", "/resume"], ["Courses", "/courses"], ["Pricing", "/pricing"]] },
          { title: "Company", links: [["About", "/"], ["Blog", "/"], ["Careers", "/"], ["Contact", "/"]] },
          { title: "Legal", links: [["Privacy", "/"], ["Terms", "/"], ["Security", "/"]] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold mb-3">{col.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {col.links.map(([label, to]) => (
                <li key={label}><Link to={to} className="hover:text-foreground">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hireflow. Built for ambitious careers.
      </div>
    </footer>
  );
}
