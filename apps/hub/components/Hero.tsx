"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND } from "@portfolio/config";
import Button from "@/components/ui/Button";
import AmbientOrbs from "@/components/AmbientOrbs";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const showcase = [
  {
    src: "/projects/schoolorbit/hero.png",
    className: "col-span-1 row-span-2",
    delay: 0.25,
  },
  {
    src: "/projects/plug-by-descasio/hero.png",
    className: "col-span-1 row-span-1",
    delay: 0.4,
  },
  {
    src: "/projects/tailorflow/hero.png",
    className: "col-span-1 row-span-1",
    delay: 0.5,
  },
] as const;

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 min-h-[90vh] flex items-center overflow-hidden grain">
      <AmbientOrbs />
      <div className="mesh-grid absolute inset-0 opacity-80" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
        aria-hidden
      />

      <div className="max-w-content mx-auto w-full relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-8"
          >
            {BRAND.fullName}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-display-xl font-semibold text-ink text-balance"
          >
            Building software that solves real-world problems.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
          >
            I&apos;m Kenny — a software engineer, AI engineer, and cybersecurity
            practitioner with over five years shipping production systems. I
            build products, automate workflows, and design systems people can
            trust.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/80"
          >
            <span>Software Engineer</span>
            <span className="text-line-strong" aria-hidden>
              ·
            </span>
            <span>Cybersecurity Practitioner</span>
            <span className="text-line-strong" aria-hidden>
              ·
            </span>
            <span>Founder</span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 text-sm text-muted max-w-xl leading-relaxed"
          >
            <span className="text-ink font-medium">Current focus:</span> Growing{" "}
            <a
              href="https://schoolorbit.ng"
              className="text-accent underline-offset-4 hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              SchoolOrbit
            </a>{" "}
            while deepening expertise in cybersecurity — SOC operations, GRC,
            and secure architecture.
          </motion.p>

          <motion.div variants={item} className="mt-12 flex flex-wrap gap-4">
            <Button href="#portfolios" variant="primary">
              Explore portfolios
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </motion.div>

          {/* Mobile / tablet preview strip */}
          <motion.div
            variants={item}
            className="mt-14 grid grid-cols-3 gap-2 lg:hidden"
            aria-hidden
          >
            {showcase.map((shot) => (
              <div
                key={shot.src}
                className="relative aspect-[4/3] overflow-hidden border border-line shadow-soft"
              >
                <Image
                  src={shot.src}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="33vw"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div
          className="relative hidden lg:grid grid-cols-2 grid-rows-2 gap-3 h-[28rem]"
          aria-hidden
        >
          {showcase.map((shot) => (
            <motion.div
              key={shot.src}
              className={`relative overflow-hidden border border-line bg-ink/[0.03] shadow-soft ${shot.className}`}
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: shot.delay, ease }}
              whileHover={{ y: -4 }}
            >
              <Image
                src={shot.src}
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 0px, 28rem"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
            </motion.div>
          ))}
          <motion.div
            className="absolute -inset-6 -z-10 rounded-full bg-accent/[0.07] blur-3xl"
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
