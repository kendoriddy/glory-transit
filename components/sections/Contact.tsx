"use client";

import { useRef, useState, forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm, Controller } from "react-hook-form";

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
      // Send data to Next.js API route (which proxies to Google Apps Script)
      // This avoids CORS issues completely
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit form");
      }

      // Success!
      setIsSubmitted(true);
      reset();

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);

      // Show error message to user (you can enhance this with a toast notification)
      alert(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen py-20 px-6 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
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
              className="w-full px-8 py-4 text-lg font-medium text-white rounded-full border-2 border-accent-blue/50 bg-transparent relative overflow-hidden group"
              whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
            >
              {/* Background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />

              {/* Success state */}
              {isSubmitted && (
                <motion.div
                  className="absolute inset-0 bg-accent-green flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <motion.svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </motion.svg>
                </motion.div>
              )}

              {/* Loading state */}
              {isSubmitting && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div
                    className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              )}

              <span className="relative z-10">
                {isSubmitted
                  ? "Message Sent!"
                  : isSubmitting
                  ? "Sending..."
                  : "Send Message"}
              </span>
            </motion.button>
          </form>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/70 text-center mb-4">Or reach out via</p>
            <div className="flex justify-center gap-6">
              {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                <motion.a
                  key={social}
                  href={
                    social.toLowerCase() === "github"
                      ? "https://github.com/kendoriddy"
                      : social.toLowerCase() === "linkedin"
                      ? "https://www.linkedin.com/in/kehindeonifade/"
                      : "https://x.com/RideOnOne09"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent-blue transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
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
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(e.target.value.length > 0);
      onBlur?.(e);
    };

    return (
      <div className="relative">
        <motion.input
          ref={ref}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full px-4 pt-6 pb-2 bg-dark-secondary/50 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-accent-blue transition-colors"
          animate={{
            scale: isFocused ? 1.02 : 1,
            borderColor: error
              ? "#EF4444"
              : isFocused
              ? "#00D9FF"
              : "rgba(255, 255, 255, 0.2)",
          }}
          transition={{ duration: 0.2 }}
          initial={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        />
        <motion.label
          className="absolute left-4 text-white/60 pointer-events-none"
          animate={{
            y: isFocused || value ? -8 : 16,
            fontSize: isFocused || value ? 12 : 16,
            color: error
              ? "#EF4444"
              : isFocused
              ? "#00D9FF"
              : "rgba(255, 255, 255, 0.6)",
          }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.label>
        {error && (
          <motion.p
            className="mt-2 text-sm text-red-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  }
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

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(e.target.value.length > 0);
    onBlur?.(e);
  };

  return (
    <div className="relative">
      <motion.textarea
        ref={ref}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full px-4 pt-6 pb-2 bg-dark-secondary/50 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-accent-blue transition-colors min-h-[150px] resize-none"
        animate={{
          scale: isFocused ? 1.02 : 1,
          borderColor: error
            ? "#EF4444"
            : isFocused
            ? "#00D9FF"
            : "rgba(255, 255, 255, 0.2)",
        }}
        transition={{ duration: 0.2 }}
        initial={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
      />
      <motion.label
        className="absolute left-4 top-4 text-white/60 pointer-events-none"
        animate={{
          y: isFocused || value ? -8 : 0,
          fontSize: isFocused || value ? 12 : 16,
          color: error
            ? "#EF4444"
            : isFocused
            ? "#00D9FF"
            : "rgba(255, 255, 255, 0.6)",
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>
      {error && (
        <motion.p
          className="mt-2 text-sm text-red-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
});

AnimatedTextarea.displayName = "AnimatedTextarea";
