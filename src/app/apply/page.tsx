'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const STAGE_OPTIONS = [
  { value: "idea", label: "Idea" },
  { value: "prototype", label: "Prototype" },
  { value: "in-market", label: "In Market" },
  { value: "scaling", label: "Scaling" },
];

const PROJECT_TYPES = [
  { value: "blockchain_infrastructure", label: "Blockchain Infrastructure" },
  { value: "defi_dex", label: "DeFi / DEX" },
  { value: "nft_gamefi", label: "NFT / GameFi" },
  { value: "metaverse", label: "Metaverse" },
  { value: "token_launch", label: "Token Launch" },
  { value: "corporate_blockchain", label: "Corporate Blockchain Integration" },
];

const DEVELOPMENT_STAGE_OPTIONS = [
  { value: "idea", label: "Idea" },
  { value: "mvp", label: "MVP" },
  { value: "live", label: "Live" },
  { value: "funded", label: "Funded" },
];

const SMART_CONTRACT_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const AUDIT_STATUS_OPTIONS = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
  { value: "planned", label: "Planned" },
];

const PARTNERSHIP_OPTIONS = [
  { value: "investment", label: "Investment / Funding Partnership" },
  { value: "marketing", label: "Marketing & Community Growth" },
  { value: "tokenomics", label: "Tokenomics / Whitepaper Development" },
  { value: "legal", label: "Legal & Compliance Support" },
  { value: "incubation", label: "Incubation or Technical Development" },
  { value: "listing", label: "Exchange Listing or Launchpad Help" },
];

const INVESTMENT_OPTIONS = [
  { value: "yes", label: "Yes — Funding required" },
  { value: "no", label: "No — Advisory or collaboration only" },
];

const PROJECT_TYPE_LABEL = Object.fromEntries(
  PROJECT_TYPES.map((option) => [option.value, option.label]),
) as Record<string, string>;

const STAGE_LABEL = Object.fromEntries(
  STAGE_OPTIONS.map((option) => [option.value, option.label]),
) as Record<string, string>;

const DEVELOPMENT_STAGE_LABEL = Object.fromEntries(
  DEVELOPMENT_STAGE_OPTIONS.map((option) => [option.value, option.label]),
) as Record<string, string>;

const SMART_CONTRACT_LABEL = Object.fromEntries(
  SMART_CONTRACT_OPTIONS.map((option) => [option.value, option.label]),
) as Record<string, string>;

const AUDIT_STATUS_LABEL = Object.fromEntries(
  AUDIT_STATUS_OPTIONS.map((option) => [option.value, option.label]),
) as Record<string, string>;

const PARTNERSHIP_LABEL = Object.fromEntries(
  PARTNERSHIP_OPTIONS.map((option) => [option.value, option.label]),
) as Record<string, string>;

const INVESTMENT_LABEL = Object.fromEntries(
  INVESTMENT_OPTIONS.map((option) => [option.value, option.label]),
) as Record<string, string>;

type FormStatus =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

type ApplyForm = {
  founderName: string;
  role: string;
  email: string;
  companyName: string;
  stage: string;
  description: string;
  contractAddress: string;
  website: string;
  projectType: string;
  projectSentence: string;
  developmentStage: string;
  problem: string;
  targetAudience: string;
  blockchain: string;
  smartContract: string;
  tokenSymbol: string;
  supplyModel: string;
  auditStatus: string;
  partnershipNeeds: string[];
  investmentInterest: string;
  fundingGoal: string;
  launchTimeline: string;
  useOfFunds: string;
  originStory: string;
};

type DocumentUploads = {
  pitchDeck: File | null;
  whitepaper: File | null;
  tokenomics: File | null;
  demoLink: string;
};

const INITIAL_FORM: ApplyForm = {
  founderName: "",
  role: "",
  email: "",
  companyName: "",
  stage: "",
  description: "",
  contractAddress: "",
  website: "",
  projectType: "",
  projectSentence: "",
  developmentStage: "",
  problem: "",
  targetAudience: "",
  blockchain: "",
  smartContract: "",
  tokenSymbol: "",
  supplyModel: "",
  auditStatus: "",
  partnershipNeeds: [],
  investmentInterest: "",
  fundingGoal: "",
  launchTimeline: "",
  useOfFunds: "",
  originStory: "",
};

const INITIAL_DOCUMENTS: DocumentUploads = {
  pitchDeck: null,
  whitepaper: null,
  tokenomics: null,
  demoLink: "",
};

export default function ApplyPage() {
  const [form, setForm] = useState<ApplyForm>(INITIAL_FORM);
  const [documents, setDocuments] = useState<DocumentUploads>(INITIAL_DOCUMENTS);
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init({
      publicKey: "YqhHimx4WJvVTMIXU",
    });
  }, []);

  const handleFieldChange =
    <Field extends keyof ApplyForm>(field: Field) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setForm((prev) => ({ ...prev, [field]: value }));
    };

  const handleSelectChange = (field: keyof ApplyForm) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleProjectTypeChange = (value: string) => {
    setForm((prev) => ({ ...prev, projectType: value }));
  };

  const handlePartnershipToggle =
    (value: string) => (checked: boolean | "indeterminate") => {
      const isChecked = checked === true;
      setForm((prev) => {
        const alreadySelected = prev.partnershipNeeds.includes(value);
        let nextNeeds = prev.partnershipNeeds;
        if (isChecked && !alreadySelected) {
          nextNeeds = [...prev.partnershipNeeds, value];
        } else if (!isChecked && alreadySelected) {
          nextNeeds = prev.partnershipNeeds.filter((item) => item !== value);
        }
        return { ...prev, partnershipNeeds: nextNeeds };
      });
    };

  const handleInvestmentChange = (value: string) => {
    setForm((prev) => ({ ...prev, investmentInterest: value }));
  };

  const handleFileChange =
    (field: keyof Omit<DocumentUploads, "demoLink">) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] ?? null;
      setDocuments((prev) => ({ ...prev, [field]: file }));
    };

  const handleDemoLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDocuments((prev) => ({ ...prev, demoLink: value }));
  };

  const isDisabled = useMemo(() => {
    const requiredValues = [
      form.founderName,
      form.role,
      form.email,
      form.companyName,
      form.stage,
      form.description,
      form.contractAddress,
      form.website,
      form.projectType,
      form.projectSentence,
      form.developmentStage,
      form.problem,
      form.targetAudience,
      form.blockchain,
      form.smartContract,
      form.auditStatus,
      form.useOfFunds,
      form.originStory,
      form.investmentInterest,
    ];
    const missing = requiredValues.some((value) => value.trim().length === 0);
    return missing || isSubmitting;
  }, [form, isSubmitting]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requiredValues = [
      form.founderName,
      form.role,
      form.email,
      form.companyName,
      form.stage,
      form.description,
      form.contractAddress,
      form.website,
      form.projectType,
      form.projectSentence,
      form.developmentStage,
      form.problem,
      form.targetAudience,
      form.blockchain,
      form.smartContract,
      form.auditStatus,
      form.useOfFunds,
      form.originStory,
      form.investmentInterest,
    ];

    if (requiredValues.some((value) => value.trim().length === 0)) {
      setStatus({
        type: "error",
        message: "Please complete the required fields before submitting.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle" });

    const partnershipSummary =
      form.partnershipNeeds.length > 0
        ? form.partnershipNeeds
            .map((value) => `- ${PARTNERSHIP_LABEL[value] ?? value}`)
            .join("\n")
        : "- Not specified";

    const documentsSummary = [
      `- Pitch Deck: ${documents.pitchDeck ? documents.pitchDeck.name : "Not provided"}`,
      `- Whitepaper / Litepaper: ${documents.whitepaper ? documents.whitepaper.name : "Not provided"}`,
      `- Tokenomics Document: ${documents.tokenomics ? documents.tokenomics.name : "Not provided"}`,
      `- Demo / MVP Link: ${documents.demoLink || "Not provided"}`,
    ].join("\n");

    const emailContent = `
INGAGIN Partnership Application

CONTACT & VENTURE DETAILS
- Founder / Contact Name: ${form.founderName}
- Role / Title: ${form.role}
- Email Address: ${form.email}
- Company / Project Name: ${form.companyName}
- Stage: ${STAGE_LABEL[form.stage] ?? form.stage}
- Contract Address: ${form.contractAddress}
- Website / Social: ${form.website}
- Business Description: ${form.description}

PROJECT OVERVIEW
- Project Type: ${PROJECT_TYPE_LABEL[form.projectType] ?? form.projectType}
- One-sentence Overview: ${form.projectSentence}
- Stage of Development: ${DEVELOPMENT_STAGE_LABEL[form.developmentStage] ?? form.developmentStage}
- Problem Solved: ${form.problem}
- Target Audience / Industry: ${form.targetAudience}

TECHNICAL DETAILS
- Blockchain / Network: ${form.blockchain}
- Smart Contract Deployed: ${SMART_CONTRACT_LABEL[form.smartContract] ?? form.smartContract}
- Token Symbol: ${form.tokenSymbol || "Not provided"}
- Total Supply & Distribution Model: ${form.supplyModel || "Not provided"}
- Audited: ${AUDIT_STATUS_LABEL[form.auditStatus] ?? form.auditStatus}

PARTNERSHIP GOALS
- Support Requested:
${partnershipSummary}
- Seeking Investment from INGAGIN: ${INVESTMENT_LABEL[form.investmentInterest] ?? form.investmentInterest}
- Estimated Funding Goal: ${form.fundingGoal || "Not provided"}
- Expected Launch Timeline: ${form.launchTimeline || "Not provided"}

USE OF SUPPORT & ORIGIN
- How support or funding will be used: ${form.useOfFunds}
- Origin story / founder background: ${form.originStory}

DOCUMENTS & LINKS
${documentsSummary}
`;

    const serviceId = "service_sfn99yn";
    const templateId = "template_weetxsy";

    try {
      await emailjs.send(serviceId, templateId, {
        name: "INGAGIN - Partnership Application",
        recipient: "info@xgepro.com",
        from_name: form.founderName || "INGAGIN Applicant",
        email: form.email,
        phone_number: form.contractAddress || "N/A",
        reply_to: form.email,
        message: emailContent,
        logoUrl: "https://www.ingagin.com/logo.png",
        logoLink: "https://www.ingagin.com/",
        logoString: "INGAGIN",
      });

      setStatus({
        type: "success",
        message:
          "Thank you for sharing your project. Our partnership will review your application.",
      });
      setForm(INITIAL_FORM);
      setDocuments(INITIAL_DOCUMENTS);
      formRef.current?.reset();
    } catch (error) {
      console.error("Unable to submit partnership application", error);
      setStatus({
        type: "error",
        message:
          "We couldn’t submit your application right now. Please try again or email us at info@xgepro.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 pb-24">
      <section className="space-y-6">
        <p className="w-fit rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          INGAGIN
        </p>
        <div className="space-y-4">
          <h1 className="max-w-4xl text-4xl font-semibold text-foreground sm:text-5xl">
            Apply to build with INGAGIN
          </h1>
          <p className="max-w-3xl text-lg text-foreground/70">
            Share the essentials of your blockchain venture so we can connect you with
            the right advisors across strategy, token design, capital, and go-to-market.
            We review every submission carefully and tailor the next steps to your goals.
          </p>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
        {/* <div className="space-y-6">
          <div className="rounded-4xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_60px_-30px_rgba(17,191,166,0.35)]">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              What we look for
            </h2>
            <p className="mt-4 text-sm text-foreground/70">
              INGAGIN supports founders and teams building meaningful blockchain
              infrastructure, products, and ecosystems.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/70">
              <li className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                Clear problem-solution fit and target audience.
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                Transparent tokenomics and sustainable operating model.
              </li>
              <li className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                Teams ready to collaborate on growth, compliance, and execution.
              </li>
            </ul>
          </div>

          <div className="rounded-4xl border border-white/10 bg-secondary/60 p-8">
            <h3 className="text-xl font-semibold text-foreground">
              How the process works
            </h3>
            <ol className="mt-4 space-y-3 text-sm text-foreground/70">
              <li>1. Submit this form with as much detail as you can.</li>
              <li>2. Our team reviews your materials within two business days.</li>
              <li>3. We schedule a discovery call or share tailored next steps.</li>
              <li>4. We align on partnership scope, timelines, and milestones.</li>
            </ol>
          </div>
        </div> */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-8 rounded-4xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_80px_-30px_rgba(105,230,211,0.45)]"
        >
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                1. Contact & Venture Details
              </p>
              <h2 className="text-2xl font-semibold text-foreground">
                Tell us who you are
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="founderName">Founder / Contact Name *</Label>
                <Input
                  id="founderName"
                  name="founderName"
                  value={form.founderName}
                  onChange={handleFieldChange("founderName")}
                  autoComplete="name"
                  placeholder="Adam West"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role / Title *</Label>
                <Input
                  id="role"
                  name="role"
                  value={form.role}
                  onChange={handleFieldChange("role")}
                  autoComplete="organization-title"
                  placeholder="Founder, CTO, Lead"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleFieldChange("email")}
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company / Project Name *</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleFieldChange("companyName")}
                  autoComplete="organization"
                  placeholder="Project or company name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Stage *</Label>
                <Select
                  value={form.stage || undefined}
                  onValueChange={handleSelectChange("stage")}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    {STAGE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contractAddress">Contract Address *</Label>
                <Input
                  id="contractAddress"
                  name="contractAddress"
                  value={form.contractAddress}
                  onChange={handleFieldChange("contractAddress")}
                  placeholder="0x..."
                  required
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="website">Website / Social *</Label>
                <Input
                  id="website"
                  name="website"
                  value={form.website}
                  onChange={handleFieldChange("website")}
                  placeholder="https:// or @handle"
                  required
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="description">
                  Brief one-sentence description of your business *
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleFieldChange("description")}
                  rows={3}
                  placeholder="Summarise the problem you solve and how."
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                2. Project Overview
              </p>
              <h2 className="text-2xl font-semibold text-foreground">
                Describe your initiative
              </h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Project Type *</Label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {PROJECT_TYPES.map((option) => {
                    const checked = form.projectType === option.value;
                    return (
                      <label
                        key={option.value}
                        className={cn(
                          "flex cursor-pointer items-start gap-3 rounded-3xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-primary/50",
                          checked && "border-primary/60 bg-primary/10 text-foreground",
                        )}
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={option.value}
                          checked={checked}
                          onChange={() => handleProjectTypeChange(option.value)}
                          className="sr-only"
                        />
                        <span className="text-sm font-medium text-foreground">
                          {option.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectSentence">
                  Describe your project in one sentence *
                </Label>
                <Textarea
                  id="projectSentence"
                  name="projectSentence"
                  value={form.projectSentence}
                  onChange={handleFieldChange("projectSentence")}
                  rows={2}
                  placeholder="A crisp vision of what you are building."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Stage of Development *</Label>
                <Select
                  value={form.developmentStage || undefined}
                  onValueChange={handleSelectChange("developmentStage")}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Idea / MVP / Live / Funded" />
                  </SelectTrigger>
                  <SelectContent>
                    {DEVELOPMENT_STAGE_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="problem">
                  What problem does your project solve? *
                </Label>
                <Textarea
                  id="problem"
                  name="problem"
                  value={form.problem}
                  onChange={handleFieldChange("problem")}
                  rows={4}
                  placeholder="Explain the challenge and how you address it."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="targetAudience">
                  Target audience or industry *
                </Label>
                <Textarea
                  id="targetAudience"
                  name="targetAudience"
                  value={form.targetAudience}
                  onChange={handleFieldChange("targetAudience")}
                  rows={3}
                  placeholder="Who benefits most from your solution?"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                3. Technical Details
              </p>
              <h2 className="text-2xl font-semibold text-foreground">
                Share the build specifics
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="blockchain">Blockchain / Network used *</Label>
                <Input
                  id="blockchain"
                  name="blockchain"
                  value={form.blockchain}
                  onChange={handleFieldChange("blockchain")}
                  placeholder="Solana, Ethereum, Polygon, etc."
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Smart contract deployed? *</Label>
                <div className="flex gap-3">
                  {SMART_CONTRACT_OPTIONS.map((option) => {
                    const checked = form.smartContract === option.value;
                    return (
                      <label
                        key={option.value}
                        className={cn(
                          "flex cursor-pointer items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-2 text-sm transition-colors hover:border-primary/50",
                          checked && "border-primary/60 bg-primary/10 text-foreground",
                        )}
                      >
                        <input
                          type="radio"
                          name="smartContract"
                          value={option.value}
                          checked={checked}
                          onChange={() => setForm((prev) => ({ ...prev, smartContract: option.value }))}
                          className="sr-only"
                        />
                        {option.label}
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tokenSymbol">Token symbol (if applicable)</Label>
                <Input
                  id="tokenSymbol"
                  name="tokenSymbol"
                  value={form.tokenSymbol}
                  onChange={handleFieldChange("tokenSymbol")}
                  placeholder="ING"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="supplyModel">
                  Total supply and distribution model
                </Label>
                <Textarea
                  id="supplyModel"
                  name="supplyModel"
                  value={form.supplyModel}
                  onChange={handleFieldChange("supplyModel")}
                  rows={3}
                  placeholder="Outline supply, vesting schedules, or token allocations."
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Audited? *</Label>
                <div className="flex flex-wrap gap-3">
                  {AUDIT_STATUS_OPTIONS.map((option) => {
                    const checked = form.auditStatus === option.value;
                    return (
                      <label
                        key={option.value}
                        className={cn(
                          "flex cursor-pointer items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-2 text-sm transition-colors hover:border-primary/50",
                          checked && "border-primary/60 bg-primary/10 text-foreground",
                        )}
                      >
                        <input
                          type="radio"
                          name="auditStatus"
                          value={option.value}
                          checked={checked}
                          onChange={() => setForm((prev) => ({ ...prev, auditStatus: option.value }))}
                          className="sr-only"
                        />
                        {option.label}
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                4. Partnership Goals
              </p>
              <h2 className="text-2xl font-semibold text-foreground">
                How can INGAGIN support you?
              </h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>What are you looking for from us?</Label>
                <div className="grid gap-3">
                  {PARTNERSHIP_OPTIONS.map((option) => {
                    const checked = form.partnershipNeeds.includes(option.value);
                    return (
                      <div
                        key={option.value}
                        className={cn(
                          "flex items-start gap-3 rounded-3xl border border-white/10 bg-white/[0.02] p-4",
                          checked && "border-primary/60 bg-primary/10",
                        )}
                      >
                        <Checkbox
                          id={option.value}
                          checked={checked}
                          onCheckedChange={handlePartnershipToggle(option.value)}
                        />
                        <Label htmlFor={option.value} className="text-sm text-foreground/80">
                          {option.label}
                        </Label>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Do you seek investment from us or our partners? *</Label>
                <div className="flex flex-wrap gap-3">
                  {INVESTMENT_OPTIONS.map((option) => {
                    const checked = form.investmentInterest === option.value;
                    return (
                      <label
                        key={option.value}
                        className={cn(
                          "flex cursor-pointer items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-2 text-sm transition-colors hover:border-primary/50",
                          checked && "border-primary/60 bg-primary/10 text-foreground",
                        )}
                      >
                        <input
                          type="radio"
                          name="investmentInterest"
                          value={option.value}
                          checked={checked}
                          onChange={() => handleInvestmentChange(option.value)}
                          className="sr-only"
                        />
                        {option.label}
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fundingGoal">Estimated funding goal (if applicable)</Label>
                <Input
                  id="fundingGoal"
                  name="fundingGoal"
                  value={form.fundingGoal}
                  onChange={handleFieldChange("fundingGoal")}
                  placeholder="Amount in USD or USDC"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="launchTimeline">Expected timeline for launch</Label>
                <Input
                  id="launchTimeline"
                  name="launchTimeline"
                  value={form.launchTimeline}
                  onChange={handleFieldChange("launchTimeline")}
                  placeholder="e.g. Q2 2025"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                5. Use & Origin
              </p>
              <h2 className="text-2xl font-semibold text-foreground">
                Share your story and plans
              </h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="useOfFunds">
                  How will you use INGAGIN&apos;s support or funding? *
                </Label>
                <Textarea
                  id="useOfFunds"
                  name="useOfFunds"
                  value={form.useOfFunds}
                  onChange={handleFieldChange("useOfFunds")}
                  rows={4}
                  placeholder="Outline the priority initiatives and resources needed."
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="originStory">Origin story or founder background *</Label>
                <Textarea
                  id="originStory"
                  name="originStory"
                  value={form.originStory}
                  onChange={handleFieldChange("originStory")}
                  rows={4}
                  placeholder="How did the project begin and what motivates the team?"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                6. Uploads & Links
              </p>
              <h2 className="text-2xl font-semibold text-foreground">
                Share supporting materials
              </h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pitchDeck">Pitch Deck (PDF)</Label>
                <input
                  id="pitchDeck"
                  name="pitchDeck"
                  type="file"
                  accept=".pdf,.ppt,.pptx,.key"
                  onChange={handleFileChange("pitchDeck")}
                  className="block w-full cursor-pointer rounded-md border border-dashed border-white/20 bg-white/[0.02] px-4 py-3 text-sm text-foreground/70 file:mr-4 file:rounded-md file:border-0 file:bg-primary/20 file:px-3 file:py-2 file:text-sm file:font-medium file:text-primary hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-0"
                />
                {documents.pitchDeck && (
                  <p className="text-xs text-foreground/50">{documents.pitchDeck.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="whitepaper">Whitepaper / Litepaper</Label>
                <input
                  id="whitepaper"
                  name="whitepaper"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange("whitepaper")}
                  className="block w-full cursor-pointer rounded-md border border-dashed border-white/20 bg-white/[0.02] px-4 py-3 text-sm text-foreground/70 file:mr-4 file:rounded-md file:border-0 file:bg-primary/20 file:px-3 file:py-2 file:text-sm file:font-medium file:text-primary hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-0"
                />
                {documents.whitepaper && (
                  <p className="text-xs text-foreground/50">{documents.whitepaper.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="tokenomics">Tokenomics document</Label>
                <input
                  id="tokenomics"
                  name="tokenomics"
                  type="file"
                  accept=".pdf,.doc,.docx,.xlsx"
                  onChange={handleFileChange("tokenomics")}
                  className="block w-full cursor-pointer rounded-md border border-dashed border-white/20 bg-white/[0.02] px-4 py-3 text-sm text-foreground/70 file:mr-4 file:rounded-md file:border-0 file:bg-primary/20 file:px-3 file:py-2 file:text-sm file:font-medium file:text-primary hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-0"
                />
                {documents.tokenomics && (
                  <p className="text-xs text-foreground/50">{documents.tokenomics.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="demoLink">Demo / MVP link</Label>
                <Input
                  id="demoLink"
                  name="demoLink"
                  type="url"
                  value={documents.demoLink}
                  onChange={handleDemoLinkChange}
                  placeholder="https://demo.ingagin.app"
                />
              </div>
            </div>
          </div>

          {status.type !== "idle" && (
            <div
              role="status"
              className={cn(
                "flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm",
                status.type === "success"
                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                  : "border-destructive/40 bg-destructive/10 text-destructive",
              )}
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
                Submitting…
              </>
            ) : (
              "Submit application"
            )}
          </Button>
        </form>
      </section>
    </div>
  );
}
