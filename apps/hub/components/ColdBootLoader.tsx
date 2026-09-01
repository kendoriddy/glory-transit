"use client";

import { useEffect, useState } from "react";
import { BRAND } from "@portfolio/config";

const STORAGE_KEY = "kenny-hub-loader-seen";
const SHOW_MS = 1000;
const FADE_MS = 500;

export default function ColdBootLoader() {
  const [shown, setShown] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    setShown(true);

    const fadeTimer = window.setTimeout(() => setFading(true), SHOW_MS);
    const hideTimer = window.setTimeout(() => {
      setShown(false);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, SHOW_MS + FADE_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!shown) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-canvas ${
        fading ? "animate-loader-fade pointer-events-none" : ""
      }`}
      aria-hidden
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center border border-accent-border text-accent font-display font-extrabold text-lg gold-ring">
          K
        </span>
        <span className="font-display text-lg font-extrabold tracking-tight text-ink">
          {BRAND.shortName} Onifade
        </span>
      </div>
      <div className="relative mt-8 h-px w-48 overflow-hidden bg-line">
        <span className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent animate-gold-sweep" />
      </div>
    </div>
  );
}
