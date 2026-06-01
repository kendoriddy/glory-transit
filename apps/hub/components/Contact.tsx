"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { SOCIAL } from "@portfolio/config";
import Section from "@/components/Section";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const { control, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit form");
      }
      setStatus("success");
      reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's build something meaningful."
      description="Open to engineering roles, security opportunities, collaborations, and conversations with founders."
      className="border-t border-line"
    >
      <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="space-y-6">
            <li>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-2">
                Email
              </p>
              <a
                href={`mailto:${SOCIAL.email}`}
                className="text-lg text-ink hover:text-accent transition-colors"
              >
                {SOCIAL.email}
              </a>
            </li>
            <li>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-2">
                LinkedIn
              </p>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-ink hover:text-accent transition-colors"
              >
                linkedin.com/in/kehindeonifade
              </a>
            </li>
            <li>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-2">
                GitHub
              </p>
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-ink hover:text-accent transition-colors"
              >
                github.com/kendoriddy
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            <Field
              label="Name"
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
            />
            <Field
              label="Message"
              name="message"
              control={control}
              rules={{ required: "Message is required" }}
              multiline
            />

            {status === "success" && (
              <p className="text-sm text-accent" role="status">
                Message sent. I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-700" role="alert">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 text-sm font-medium bg-ink text-canvas border border-ink hover:bg-ink/90 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  control,
  rules,
  type = "text",
  multiline,
}: {
  label: string;
  name: keyof FormData;
  control: ReturnType<typeof useForm<FormData>>["control"];
  rules?: object;
  type?: string;
  multiline?: boolean;
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div>
          <label
            htmlFor={name}
            className="block text-sm font-medium text-ink mb-2"
          >
            {label}
          </label>
          {multiline ? (
            <textarea
              id={name}
              {...field}
              rows={5}
              className="w-full px-4 py-3 bg-canvas border border-line-strong text-ink placeholder:text-muted/60 focus:border-ink/30 focus:outline-none resize-y min-h-[140px]"
              aria-invalid={!!fieldState.error}
              aria-describedby={fieldState.error ? `${name}-error` : undefined}
            />
          ) : (
            <input
              id={name}
              type={type}
              {...field}
              className="w-full px-4 py-3 bg-canvas border border-line-strong text-ink placeholder:text-muted/60 focus:border-ink/30 focus:outline-none"
              aria-invalid={!!fieldState.error}
              aria-describedby={fieldState.error ? `${name}-error` : undefined}
            />
          )}
          {fieldState.error && (
            <p id={`${name}-error`} className="mt-2 text-sm text-red-700">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}
