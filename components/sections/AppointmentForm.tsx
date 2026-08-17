"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const appointmentSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  website: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export function AppointmentForm() {
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { name: "", email: "", phone: "", website: "" },
  });

  function onSubmit() {
    toast.success("Request received! We'll reach out to schedule your appointment.");
    form.reset();
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 text-neutral-900 shadow-2xl">
      <h3 className="text-center text-2xl font-bold whitespace-nowrap">
        Schedule Your Appointment
      </h3>
      <p className="mt-2 text-center text-sm text-neutral-500">
        We here to help you 24/7 with experts
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Name"
                    className="h-12 border-0 bg-neutral-100 placeholder:text-neutral-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="E-Mail"
                    className="h-12 border-0 bg-neutral-100 placeholder:text-neutral-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Phone Number"
                    className="h-12 border-0 bg-neutral-100 placeholder:text-neutral-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your Website"
                    className="h-12 border-0 bg-neutral-100 placeholder:text-neutral-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            className="mt-2 h-12 w-full bg-gradient-to-r from-[#03228f] to-[#0e73e4] text-base hover:opacity-90"
          >
            Submit Now
          </Button>
        </form>
      </Form>
    </div>
  );
}
