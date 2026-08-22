"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  submitLabel?: string;
}

export default function ContactForm({
  submitLabel = "Send message",
}: ContactFormProps) {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
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
        className="w-full md:w-auto px-8 py-3 text-sm font-medium bg-ink text-canvas border border-ink hover:bg-accent hover:border-accent shadow-soft hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300 ease-smooth disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-ink"
      >
        {isSubmitting ? "Sending…" : submitLabel}
      </button>
    </form>
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
              className="w-full px-4 py-3 bg-white/40 border border-line-strong text-ink placeholder:text-muted/60 focus:border-accent/50 focus:ring-2 focus:ring-accent/10 focus:outline-none resize-y min-h-[140px] transition-all duration-300"
              aria-invalid={!!fieldState.error}
              aria-describedby={fieldState.error ? `${name}-error` : undefined}
            />
          ) : (
            <input
              id={name}
              type={type}
              {...field}
              className="w-full px-4 py-3 bg-white/40 border border-line-strong text-ink placeholder:text-muted/60 focus:border-accent/50 focus:ring-2 focus:ring-accent/10 focus:outline-none transition-all duration-300"
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
