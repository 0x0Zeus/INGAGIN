import type { Metadata } from "next";
import {
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";

import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with INGAGIN. Our blockchain advisory team is ready to explore partnerships, projects, and growth opportunities with you.",
};

const contactChannels = [
  {
    title: "Email",
    value: "info@xgepro.com",
    description:
      "Partnerships, project briefs, and media enquiries go straight to our core team.",
    icon: Mail,
  },
  {
    title: "Schedule a Strategy Call",
    value: "Share your availability in the form",
    description:
      "We coordinate across time zones and connect you with the right subject matter expert.",
    icon: Phone,
  },
  {
    title: "Global Presence",
    value: "Remote-first • North America / Europe / Asia",
    description:
      "We support founders, enterprises, and investors wherever they are building.",
    icon: MapPin,
  },
];

const responseHighlights = [
  "24-hour response on business days",
  "Dedicated blockchain advisory desk",
  "Secure NDAs available on request",
  "Support across token, product, and go-to-market",
];

export default function ContactPage() {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <p className="w-fit rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          INGAGIN
        </p>
        <div className="space-y-4">
          <h1 className="max-w-4xl text-2xl font-semibold text-foreground sm:text-3xl">
            Let’s build the future of digital assets together
          </h1>
          <p className="max-w-3xl text-lg text-foreground/70">
            Tell us about your blockchain initiative, investment mandate, or
            ecosystem goals. Our team will review your message and respond with
            next steps, resources, or a call invitation within 24 hours.
          </p>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr,1.1fr]">
        {/* <div className="space-y-8">
          <div className="rounded-4xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_60px_-30px_rgba(17,191,166,0.4)]">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Talk to our team
            </h2>
            <p className="mt-4 text-base text-foreground/70">
              Choose the path that matches your needs. We assemble the right
              advisors across strategy, token design, fundraising, growth, and
              technical delivery.
            </p>
            <div className="mt-8 grid gap-4">
              {contactChannels.map((channel) => (
                <div
                  key={channel.title}
                  className="flex items-start gap-4 rounded-3xl border border-white/10 bg-secondary/60 p-5"
                >
                  <channel.icon className="mt-1 size-6 text-primary" />
                  <div className="space-y-2">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                        {channel.title}
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {channel.value}
                      </p>
                    </div>
                    <p className="text-sm text-foreground/70">
                      {channel.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-secondary/60 p-8">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              What to expect
            </h2>
            <p className="mt-3 text-sm text-foreground/70">
              We tailor every engagement to the phase and ambition of your
              project.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {responseHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-foreground/70"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3 text-sm text-foreground/70">
              <Clock className="size-5 text-primary" />
              <span>Operating hours: Monday — Friday · 9:00 – 18:00 EST</span>
            </div>
          </div>
        </div> */}

        <div className="rounded-4xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_80px_-30px_rgba(105,230,211,0.45)]">
          {/* <div className="mb-8 space-y-3">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Share your vision
            </h2>
            <p className="text-sm text-foreground/70">
              Complete the form and we’ll collaborate on the next steps for your
              digital asset, blockchain integration, or growth roadmap.
            </p>
          </div> */}
          <ContactForm />
        </div>
      </section>

      {/* <section className="rounded-4xl border border-white/10 bg-gradient-to-br from-primary/15 via-transparent to-accent/20 p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Build with confidence
            </p>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Not sure where to start?
            </h2>
            <p className="max-w-2xl text-sm text-foreground/70">
              We support founders and enterprises from concept to scale. Send a
              short brief and we’ll share an initial roadmap, curated resources,
              or schedule a discovery call.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-3xl border border-primary/40 bg-primary/10 px-6 py-4 text-sm text-primary">
            <MessageSquare className="size-5" />
            <span>
              Prefer a direct line? Email{" "}
              <span className="font-semibold text-primary">
                info@xgepro.com
              </span>
            </span>
          </div>
        </div>
      </section> */}
    </div>
  );
}