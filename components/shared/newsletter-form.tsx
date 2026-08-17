"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const form = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  function onSubmit() {
    toast.success("Thanks for subscribing!");
    form.reset();
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex items-center gap-2"
    >
      <Input
        type="email"
        placeholder="Your email address"
        className="h-12 rounded-full border-0 bg-white px-5 shadow-sm"
        {...form.register("email")}
      />
      <Button
        type="submit"
        size="icon"
        aria-label="Subscribe"
        className="size-12 shrink-0 rounded-full bg-gradient-to-r from-[#03228f] to-[#0e73e4] hover:opacity-90"
      >
        <Send className="size-4" />
      </Button>
    </form>
  );
}
