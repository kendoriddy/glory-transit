"use client";

import { useRef, useState, forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { SOCIAL } from "@portfolio/config";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { control, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
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
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 px-6 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you.
          </p>
        </motion.div>

        <motion.div
          className="glass rounded-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field, fieldState }) => (
                <AnimatedInput
                  label="Name"
                  type="text"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field, fieldState }) => (
                <AnimatedInput
                  label="Email"
                  type="email"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              rules={{ required: "Message is required" }}
              render={({ field, fieldState }) => (
                <AnimatedTextarea
                  label="Message"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full px-8 py-4 text-lg font-medium text-white rounded-full border-2 border-accent-blue/50 bg-transparent relative overflow-hidden"
              whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
            >
              <span className="relative z-10">
                {isSubmitted
                  ? "Message Sent!"
                  : isSubmitting
                    ? "Sending..."
                    : "Send Message"}
              </span>
            </motion.button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/10 flex justify-center gap-6">
            {[
              { label: "GitHub", href: SOCIAL.github },
              { label: "LinkedIn", href: SOCIAL.linkedin },
              { label: "X", href: SOCIAL.twitter },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent-blue transition-colors text-sm"
              >
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const AnimatedInput = forwardRef<
  HTMLInputElement,
  {
    label: string;
    error?: string;
    type?: string;
    value?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
  }
>(
  (
    { label, error, type = "text", value = "", onBlur, onChange, name },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <div className="relative">
        <input
          ref={ref}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(e.target.value.length > 0);
            onBlur?.(e);
          }}
          className="w-full px-4 pt-6 pb-2 bg-dark-secondary/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent-blue"
        />
        <label
          className="absolute left-4 pointer-events-none text-white/60 transition-all"
          style={{
            top: isFocused || value ? 8 : 20,
            fontSize: isFocused || value ? 12 : 16,
            color: error ? "#EF4444" : isFocused ? "#00D9FF" : undefined,
          }}
        >
          {label}
        </label>
        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
      </div>
    );
  },
);
AnimatedInput.displayName = "AnimatedInput";

const AnimatedTextarea = forwardRef<
  HTMLTextAreaElement,
  {
    label: string;
    error?: string;
    value?: string;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    name?: string;
  }
>(({ label, error, value = "", onBlur, onChange, name }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative">
      <textarea
        ref={ref}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(e.target.value.length > 0);
          onBlur?.(e);
        }}
        className="w-full px-4 pt-6 pb-2 bg-dark-secondary/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent-blue min-h-[150px] resize-none"
      />
      <label
        className="absolute left-4 top-4 pointer-events-none text-white/60"
        style={{
          transform: isFocused || value ? "translateY(-8px)" : "translateY(0)",
          fontSize: isFocused || value ? 12 : 16,
          color: error ? "#EF4444" : isFocused ? "#00D9FF" : undefined,
        }}
      >
        {label}
      </label>
      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
});
AnimatedTextarea.displayName = "AnimatedTextarea";
