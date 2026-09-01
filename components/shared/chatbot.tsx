"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteInfo } from "@/data/site";
import { services } from "@/data/services";

type Message = {
  id: string;
  role: "bot" | "user";
  text: React.ReactNode;
};

const SEEN_KEY = "vedify-chat-seen";

const OUT_OF_SCOPE_REPLY =
  "Sorry, this is out of context — we can't answer that or provide this kind of service here. I can only help with our services, company info, address, phone number, or contact details.";

const GREETING = (
  <>
    👋 Welcome to Vedify Solutions! I&apos;m your assistant — what would you like to know?
  </>
);

function servicesReply(): React.ReactNode {
  return (
    <>
      We offer: {services.map((s) => s.title).join(", ")}.{" "}
      <Link href="/services" className="font-semibold text-primary underline">
        See all services
      </Link>
      .
    </>
  );
}

function aboutReply(): React.ReactNode {
  return (
    <>
      {siteInfo.name} is a professional software and digital business
      marketing organisation delivering integrated technology and growth
      solutions across industries.{" "}
      <Link href="/about" className="font-semibold text-primary underline">
        Learn more about us
      </Link>
      .
    </>
  );
}

function contactReply(): React.ReactNode {
  return (
    <>
      You can reach us at:
      <br />
      Phone: {siteInfo.phone}
      <br />
      Email: {siteInfo.email}
      <br />
      Address: {siteInfo.address}
      <br />
      <Link href="/contact" className="font-semibold text-primary underline">
        Visit our contact page
      </Link>
      .
    </>
  );
}

const serviceKeywords = Array.from(
  new Set(
    services.flatMap((s) => [
      s.title.toLowerCase(),
      ...s.slug.split("-"),
    ])
  )
);

const rules: { keywords: string[]; reply: () => React.ReactNode }[] = [
  { keywords: ["hi", "hello", "hey"], reply: () => GREETING },
  {
    keywords: [
      "service",
      "services",
      "offer",
      "what do you do",
      "pricing",
      "price",
      "cost",
      "website",
      "web",
      "app",
      "application",
      "software",
      "erp",
      "crm",
      "develop",
      "build",
      "make",
      "create",
      "design",
      "project",
      "solution",
      ...serviceKeywords,
    ],
    reply: servicesReply,
  },
  {
    keywords: ["about", "company", "who are you", "who you are", "vedify"],
    reply: aboutReply,
  },
  {
    keywords: ["address", "location", "where are you", "office"],
    reply: () => `Our address: ${siteInfo.address}`,
  },
  {
    keywords: ["phone", "mobile", "call", "number"],
    reply: () => `You can call us at ${siteInfo.phone}.`,
  },
  {
    keywords: ["email", "mail"],
    reply: () => `You can email us at ${siteInfo.email}.`,
  },
  {
    keywords: ["contact", "reach", "get in touch", "talk"],
    reply: contactReply,
  },
];

function matchReply(input: string): React.ReactNode {
  const normalized = input.toLowerCase();
  for (const rule of rules) {
    if (rule.keywords.some((kw) => normalized.includes(kw))) {
      return rule.reply();
    }
  }
  return OUT_OF_SCOPE_REPLY;
}

function playRingTone() {
  try {
    const AudioContextClass =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioContextClass();
    const now = ctx.currentTime;

    [880, 1320].forEach((freq, i) => {
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = freq;
      const start = now + i * 0.18;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.15, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.3);
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.3);
    });

    setTimeout(() => ctx.close(), 800);
  } catch {
    // Autoplay/audio may be blocked by the browser — fail silently.
  }
}

type ChatHistoryEntry = { role: "user" | "assistant"; content: string };

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState("");
  const [isRinging, setIsRinging] = React.useState(false);
  const [isThinking, setIsThinking] = React.useState(false);
  const listRef = React.useRef<HTMLDivElement>(null);
  const historyRef = React.useRef<ChatHistoryEntry[]>([]);

  React.useEffect(() => {
    const seen = window.localStorage.getItem(SEEN_KEY);
    if (seen) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setMessages([{ id: "greeting", role: "bot", text: GREETING }]);
      window.localStorage.setItem(SEEN_KEY, "1");
      playRingTone();
      setIsRinging(true);
      setTimeout(() => setIsRinging(false), 1600);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isOpen]);

  function openChat() {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([{ id: "greeting", role: "bot", text: GREETING }]);
    }
  }

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isThinking) return;

    const userMessage: Message = { id: crypto.randomUUID(), role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsThinking(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history: historyRef.current }),
      });

      if (!res.ok) throw new Error("Chat request failed");

      const data: { reply?: string } = await res.json();
      const reply = data.reply?.trim() || OUT_OF_SCOPE_REPLY;

      const nextHistory: ChatHistoryEntry[] = [
        ...historyRef.current,
        { role: "user", content: trimmed },
        { role: "assistant", content: reply },
      ];
      historyRef.current = nextHistory.slice(-8);

      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "bot", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "bot", text: matchReply(trimmed) },
      ]);
    } finally {
      setIsThinking(false);
    }
  }

  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && !shouldReduceMotion && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full bg-primary/60"
              animate={{ scale: [1, 1.6, 1.6], opacity: [0.6, 0, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-full bg-primary/60"
              animate={{ scale: [1, 1.6, 1.6], opacity: [0.6, 0, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.7 }}
            />
          </>
        )}
        <motion.button
          type="button"
          aria-label={isOpen ? "Close chat" : "Open chat"}
          onClick={() => (isOpen ? setIsOpen(false) : openChat())}
          animate={
            isRinging && !shouldReduceMotion
              ? { rotate: [0, -15, 15, -12, 12, -6, 6, 0] }
              : { rotate: 0 }
          }
          transition={{ duration: 0.8, repeat: isRinging ? 1 : 0 }}
          className="relative flex size-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:opacity-90"
        >
          {isOpen ? (
            <X className="size-5" />
          ) : isRinging ? (
            <Bell className="size-5" />
          ) : (
            <MessageCircle className="size-5" />
          )}
          {isRinging && (
            <span className="absolute -right-0.5 -top-0.5 flex size-3 items-center justify-center rounded-full bg-red-500 ring-2 ring-white" />
          )}
        </motion.button>
      </div>

      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 flex w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl transition-all duration-200",
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        )}
        style={{ height: "min(28rem, 70vh)" }}
      >
        <div className="flex items-center gap-3 bg-secondary px-4 py-3 text-white">
          <div className="flex size-9 items-center justify-center rounded-full bg-primary">
            <Sparkles className="size-4" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Vedify Assistant</p>
          </div>
        </div>

        <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn(
                "max-w-[85%] rounded-2xl px-4 py-2 text-sm",
                m.role === "bot"
                  ? "bg-muted text-foreground"
                  : "ml-auto bg-primary text-primary-foreground"
              )}
            >
              {m.text}
            </div>
          ))}
          {isThinking && (
            <div className="max-w-[85%] rounded-2xl bg-muted px-4 py-2 text-sm text-muted-foreground">
              <span className="inline-flex gap-1">
                <span className="size-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-current" />
              </span>
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 border-t border-border p-3"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            disabled={isThinking}
            className="h-10 flex-1 rounded-full border border-border bg-muted/50 px-4 text-sm outline-none focus:border-primary disabled:opacity-60"
          />
          <button
            type="submit"
            aria-label="Send"
            disabled={isThinking}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-white hover:opacity-90 disabled:opacity-60"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </>
  );
}
