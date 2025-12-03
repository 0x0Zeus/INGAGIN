'use client';

import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ContactFormFields = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const INITIAL_FORM: ContactFormFields = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

type FormStatus =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormFields>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  useEffect(() => {
    emailjs.init({
      publicKey: "YqhHimx4WJvVTMIXU",
    });
  }, []);

  const handleChange =
    (field: keyof ContactFormFields) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const isDisabled = useMemo(() => {
    if (isSubmitting) {
      return true;
    }
    return (
      !form.fullName.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    );
  }, [form.email, form.fullName, form.message, isSubmitting]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isDisabled) {
      return;
    }

    const serviceId = "service_sfn99yn";
    const templateId = "template_weetxsy";

    try {
      setIsSubmitting(true);
      setStatus({ type: "idle" });

      await emailjs.send(serviceId, templateId, {
        name: "INGAGIN",
        recipient: "info@xgepro.com",
        from_name: form.fullName,
        email: form.email,
        phone_number: form.phone,
        company: form.company,
        reply_to: form.email,
        message: form.message,
        logoUrl: "https://www.ingagin.com/logo.png",
        logoLink: "https://www.ingagin.com/",
        logoString: "INGAGIN",
      });

      setForm(INITIAL_FORM);
      setStatus({
        type: "success",
        message:
          "Thank you for reaching out. A member of the INGAGIN team will respond.",
      });
    } catch (error) {
      console.error("Unable to send contact message", error);
      setStatus({
        type: "error",
        message:
          "We couldn't send your message just now. Please retry or email us directly at info@xgepro.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-foreground"
          >
            Full name *
          </label>
          <Input
            id="fullName"
            name="fullName"
            autoComplete="name"
            placeholder="Adam West"
            value={form.fullName}
            onChange={handleChange("fullName")}
            required
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="company"
            className="text-sm font-medium text-foreground"
          >
            Company or project
          </label>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Project or company name"
            value={form.company}
            onChange={handleChange("company")}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange("email")}
            required
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-foreground"
          >
            Phone or Telegram
          </label>
          <Input
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder="+1 555 0100"
            value={form.phone}
            onChange={handleChange("phone")}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-foreground"
        >
          How can we help? *
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Share objectives, timelines, or links to supporting documents."
          rows={6}
          value={form.message}
          onChange={handleChange("message")}
          required
        />
      </div>

      {status.type !== "idle" && (
        <div
          role="status"
          className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
              : "border-destructive/40 bg-destructive/10 text-destructive"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle2 className="mt-1 size-5" />
          ) : (
            <AlertCircle className="mt-1 size-5" />
          )}
          <p>{status.message}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isDisabled}
        className="w-full text-base font-semibold"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}

