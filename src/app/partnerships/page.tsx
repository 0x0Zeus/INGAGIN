"use client";

import { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const COMPANY_OPTIONS = [
  { value: "3dworld", label: "3-DWorld" },
  { value: "digitalworldproperty", label: "Digital World Property" },
  { value: "goalmoonshot", label: "Goal Moon Shot" },
];

const PART_CHOICES = [
  { value: "1", label: "1 part" },
  { value: "2", label: "2 parts" },
  { value: "3", label: "3 parts" },
  { value: "4", label: "4 parts" },
];

type PartnershipForm = {
  company: string;
  parts: string;
  name: string;
  email: string;
  phone: string;
  experienceYears: string;
  socialAccounts: string;
  avgFollowers: string;
  expertise: string;
  pastProjects: string;
  timeCommitment: string;
  networkAccess: string;
  goals: string;
};

type FormStatus =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const INITIAL_FORM: PartnershipForm = {
  company: "",
  parts: "",
  name: "",
  email: "",
  phone: "",
  experienceYears: "",
  socialAccounts: "",
  avgFollowers: "",
  expertise: "",
  pastProjects: "",
  timeCommitment: "",
  networkAccess: "",
  goals: "",
};

const QUESTIONS = [
  "Years of business experience (entrepreneurship, sales, marketing, operations, etc.).",
  "Number of active social media accounts you manage (personal or brand).",
  "Approximate followers per account (to gauge your reach).",
  "Primary areas of expertise (DeFi, NFTs, Web3 marketing, fundraising, legal, analytics, etc.).",
  "Past projects or brands you’ve helped grow and the role you played.",
  "Weekly time commitment you can realistically allocate.",
  "Existing networks you can activate (investors, influencers, creators, communities).",
  "Your goals as an Ingrain Portfolio Partner and what success looks like in 6–12 months.",
];

export default function PartnershipsPage() {
  const [form, setForm] = useState<PartnershipForm>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init({ publicKey: "YqhHimx4WJvVTMIXU" });
  }, []);

  const handleInputChange =
    (field: keyof PartnershipForm) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSelectChange = (field: keyof PartnershipForm) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const requiredFields = [
    form.company,
    form.parts,
    form.name,
    form.email,
    form.phone,
    form.experienceYears,
    form.socialAccounts,
    form.avgFollowers,
    form.expertise,
    form.pastProjects,
    form.timeCommitment,
    form.networkAccess,
    form.goals,
  ];

  const isDisabled = useMemo(() => {
    return requiredFields.some((value) => value.trim().length === 0) || isSubmitting;
  }, [requiredFields, isSubmitting]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (requiredFields.some((value) => value.trim().length === 0)) {
      setStatus({
        type: "error",
        message: "Please complete the required questions so we can review your fit.",
      });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "idle" });

    const companyLabel =
      COMPANY_OPTIONS.find((option) => option.value === form.company)?.label ??
      form.company;
    const partsLabel =
      PART_CHOICES.find((option) => option.value === form.parts)?.label ?? form.parts;

    const message = `
INGAGIN Partnerships Submission

PORTFOLIO SELECTION
- Company: ${companyLabel}
- Desired participation: ${partsLabel}

APPLICANT DETAILS
- Name: ${form.name}
- Email: ${form.email}
- Telephone: ${form.phone}
- Years of experience: ${form.experienceYears}
- Active social media accounts: ${form.socialAccounts}
- Average followers per account: ${form.avgFollowers}
- Primary expertise: ${form.expertise}
- Past projects or brands grown: ${form.pastProjects}
- Weekly time commitment: ${form.timeCommitment}
- Networks available: ${form.networkAccess}
- Goals in 6–12 months: ${form.goals}
`;

    try {
      await emailjs.send("service_sfn99yn", "template_weetxsy", {
        name: "INGAGIN - Partnerships Submission",
        recipient: "info@xgepro.com",
        from_name: form.name || "INGAGIN Partner Applicant",
        email: form.email,
        phone_number: form.phone,
        reply_to: form.email,
        message,
        logoUrl: "https://www.ingagin.com/logo.png",
        logoLink: "https://www.ingagin.com/",
        logoString: "INGAGIN",
      });

      setStatus({
        type: "success",
        message:
          "Thanks for applying to partner with our portfolio brands. We’ll review your profile shortly.",
      });
      setForm(INITIAL_FORM);
    } catch (error) {
      console.error("Unable to submit partnerships form", error);
      setStatus({
        type: "error",
        message:
          "We couldn’t send your application right now. Please try again or email info@xgepro.com.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-24">
      <section className="space-y-6">
        <p className="w-fit rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          Partnerships
        </p>
        <div className="space-y-4">
          <h1 className="max-w-4xl text-4xl font-semibold text-foreground sm:text-5xl">
            Plug into an Ingrain portfolio brand
          </h1>
          <p className="max-w-3xl text-lg text-foreground/70">
            This application hub is for ambitious operators ready to contribute
            experience, reach, and execution to our portfolio companies. Each
            venture is divided into eight equal parts—select the company, claim
            the parts you can power, and show us how you’ll accelerate real
            outcomes.
          </p>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
        <article className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              How the Partnerships program works
            </h2>
            <p className="text-foreground/70">
              Choose from active Ingagin portfolio companies searching for new
              collaborators. Up to four partners can join each opportunity by
              claiming parts of the business. The diagram illustrates how equity
              and operating ownership is split between applicants and the core
              company.
            </p>
          </div>
          <PartnershipChart />
          <p className="text-sm text-foreground/60">
            Applicant parts are capped at 50% (four parts maximum). Company
            ownership retains the remaining 50% so incentives stay aligned.
          </p>
        </article>

        <aside className="space-y-6 rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-900/70 to-zinc-900/40 p-8">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">
              What we evaluate
            </h3>
            <p className="text-sm text-foreground/70">
              Answer each question clearly so we can slot you into the right
              company and part.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-foreground/80">
            {QUESTIONS.map((question) => (
              <li key={question} className="flex gap-3">
                <span className="mt-0.5 size-2.5 rounded-full bg-primary" aria-hidden />
                <span>{question}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="rounded-3xl border border-white/5 bg-white/[0.03] p-8 shadow-[0_35px_120px_-45px_rgba(105,230,211,0.35)]">
        <div className="space-y-3 pb-8">
          <h2 className="text-3xl font-semibold text-foreground">Apply now</h2>
          <p className="text-foreground/70">
            Select your project, choose how many parts you want to own, then
            complete the application so the relevant portfolio company can
            review and schedule next steps.
          </p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company">Portfolio project selection</Label>
              <Select
                value={form.company}
                onValueChange={handleSelectChange("company")}
              >
                <SelectTrigger id="company">
                  <SelectValue placeholder="Choose a company" />
                </SelectTrigger>
                <SelectContent>
                  {COMPANY_OPTIONS.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="parts">Partnership parts (max 4)</Label>
              <Select value={form.parts} onValueChange={handleSelectChange("parts")}>
                <SelectTrigger id="parts">
                  <SelectValue placeholder="Select parts" />
                </SelectTrigger>
                <SelectContent>
                  {PART_CHOICES.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <InputField
              id="name"
              label="Name"
              value={form.name}
              onChange={handleInputChange("name")}
            />
            <InputField
              id="email"
              type="email"
              label="Email"
              value={form.email}
              onChange={handleInputChange("email")}
            />
            <InputField
              id="phone"
              label="Telephone"
              value={form.phone}
              onChange={handleInputChange("phone")}
            />
            <InputField
              id="experienceYears"
              label="Years of business experience"
              value={form.experienceYears}
              onChange={handleInputChange("experienceYears")}
            />
            <InputField
              id="socialAccounts"
              label="Number of active social accounts"
              value={form.socialAccounts}
              onChange={handleInputChange("socialAccounts")}
            />
            <InputField
              id="avgFollowers"
              label="Approximate followers per account"
              value={form.avgFollowers}
              onChange={handleInputChange("avgFollowers")}
            />
          </div>

          <TextareaField
            id="expertise"
            label="Primary areas of expertise"
            placeholder="e.g., NFTs, tokenomics, BizDev, fundraising, legal, analytics"
            value={form.expertise}
            onChange={handleInputChange("expertise")}
          />

          <TextareaField
            id="pastProjects"
            label="Past projects or brands and your role"
            placeholder="Share the initiatives you’ve helped grow and how you contributed."
            value={form.pastProjects}
            onChange={handleInputChange("pastProjects")}
          />

          <TextareaField
            id="timeCommitment"
            label="Time commitment per week"
            placeholder="How many hours can you dedicate to this partnership?"
            value={form.timeCommitment}
            onChange={handleInputChange("timeCommitment")}
          />

          <TextareaField
            id="networkAccess"
            label="Access to existing networks"
            placeholder="Investors, influencers, creators, founders, regional communities, etc."
            value={form.networkAccess}
            onChange={handleInputChange("networkAccess")}
          />

          <TextareaField
            id="goals"
            label="Goals as an Ingrain Portfolio Partner"
            placeholder="Describe what success looks like in 6–12 months."
            value={form.goals}
            onChange={handleInputChange("goals")}
          />

          {status.type !== "idle" && (
            <div
              className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${
                status.type === "success"
                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                  : "border-red-500/40 bg-red-500/10 text-red-200"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle2 className="size-4" />
              ) : (
                <AlertCircle className="size-4" />
              )}
              <span>{status.message}</span>
            </div>
          )}

          <Button
            type="submit"
            className="w-full sm:w-auto"
            disabled={isDisabled}
          >
            {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
            Submit Partnership Application
          </Button>
        </form>
      </section>
    </div>
  );
}

function InputField({
  id,
  label,
  value,
  onChange,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}

function TextareaField({
  id,
  label,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Textarea id={id} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

function PartnershipChart() {
  return (
    <figure className="space-y-4 rounded-3xl border border-white/5 bg-[#0a0a0f] p-6 text-center">
      <div className="mx-auto size-64 max-w-full">
        <div className="relative size-full">
          <div
            className="size-full rounded-full shadow-inner"
            style={{
              backgroundImage:
                "conic-gradient(#93c5fd 0deg 45deg, #f97316 45deg 90deg, #34d399 90deg 135deg, #fde047 135deg 180deg, #111827 180deg 360deg)",
            }}
            role="img"
            aria-label="Pie chart showing applicant parts (50%) versus company ownership (50%)"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-slate-900/80 px-8 py-6 text-sm text-white/80">
              <p className="text-xs uppercase tracking-widest text-white/60">
                Company Ownership
              </p>
              <p className="text-2xl font-semibold text-white">50%</p>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="space-y-1 text-sm text-foreground/80">
        <p className="font-semibold text-foreground">
          Partnership Structure: Applicant Parts (50%) vs. Company Ownership (50%)
        </p>
        <p>
          Each applicant part equals 12.5% of the partnership allocation. Up to four
          parts can be assigned at any time.
        </p>
      </figcaption>
      <div className="grid gap-2 sm:grid-cols-2">
        {["Applicant Part 1", "Applicant Part 2", "Applicant Part 3", "Applicant Part 4"].map(
          (label, index) => (
            <div
              key={label}
              className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-3 py-2 text-xs font-medium text-white/80"
            >
              <span>{label}</span>
              <span>12.5%</span>
            </div>
          )
        )}
      </div>
    </figure>
  );
}

