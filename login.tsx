import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Hireflow" }] }),
  component: Login,
});

function Login() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-md px-6 py-20">
        <div className="glass-strong rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 gradient-glow opacity-50" />
          <div className="relative">
            <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary mx-auto">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="mt-4 font-display text-2xl font-bold text-center">Welcome back</h1>
            <p className="text-sm text-muted-foreground text-center mt-1">
              Sign in to your AI career copilot
            </p>

            <div className="mt-6 space-y-3">
              <Button variant="outline" className="w-full">Continue with Google</Button>
              <Button variant="outline" className="w-full">Continue with LinkedIn</Button>
            </div>

            <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
              <div className="h-px flex-1 bg-border" />OR<div className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-3">
              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="you@example.com" className="mt-1.5" />
              </div>
              <div>
                <Label>Password</Label>
                <Input type="password" placeholder="••••••••" className="mt-1.5" />
              </div>
              <Link to="/dashboard">
                <Button className="w-full gradient-primary text-primary-foreground border-0">Sign in</Button>
              </Link>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              No account? <Link to="/dashboard" className="text-primary hover:underline">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
