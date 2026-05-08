import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, Sparkles, User } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/assistant")({
  head: () => ({ meta: [{ title: "AI Career Assistant — Hireflow" }] }),
  component: Assistant,
});

const SUGGESTIONS = [
  "Review my resume for the Stripe role",
  "What skills should I learn next?",
  "Practice a system design interview",
  "Negotiate my salary offer",
];

type Msg = { role: "user" | "assistant"; text: string };

function Assistant() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", text: "Hi Alex 👋 I'm your AI career coach. I've reviewed your profile and recent applications. What would you like to work on today?" },
  ]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages(m => [
      ...m,
      { role: "user", text },
      { role: "assistant", text: "Great question! Based on your profile, I'd recommend focusing on Kubernetes and system design — that combination unlocks 340+ senior roles in your target markets. Want me to draft a 30-day learning plan?" },
    ]);
    setInput("");
  };

  return (
    <SiteLayout>
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary glow">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold">AI Career Assistant</h1>
            <p className="text-sm text-muted-foreground">Powered by your career data · always private</p>
          </div>
        </div>

        <div className="glass rounded-2xl flex flex-col h-[60vh]">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`h-9 w-9 rounded-xl grid place-items-center shrink-0 ${m.role === "user" ? "bg-secondary" : "gradient-primary"}`}>
                  {m.role === "user" ? <User className="h-4 w-4" /> : <Sparkles className="h-4 w-4 text-primary-foreground" />}
                </div>
                <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm ${m.role === "user" ? "bg-secondary" : "glass-strong"}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {messages.length === 1 && (
            <div className="px-6 pb-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map(s => (
                <button key={s} onClick={() => send(s)}
                  className="text-xs glass rounded-full px-3 py-1.5 hover:bg-accent">
                  {s}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="border-t p-3 flex gap-2">
            <Input value={input} onChange={e => setInput(e.target.value)}
              placeholder="Ask anything about your career..." className="bg-background/50" />
            <Button type="submit" className="gradient-primary text-primary-foreground border-0">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </SiteLayout>
  );
}
