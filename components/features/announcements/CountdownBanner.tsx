"use client";

import { useEffect, useState } from "react";

type Slot = { value: number; label: string };

function getTimeLeft(target: Date): Slot[] {
  const diff = Math.max(0, target.getTime() - Date.now());
  return [
    { value: Math.floor(diff / 86_400_000),                       label: "Jours" },
    { value: Math.floor((diff % 86_400_000) / 3_600_000),         label: "Hrs"   },
    { value: Math.floor((diff % 3_600_000)  / 60_000),            label: "Min"   },
    { value: Math.floor((diff % 60_000)     / 1_000),             label: "Sec"   },
  ];
}

const TARGET = new Date("2026-08-01T15:00:00");

export default function CountdownBanner() {
  const [slots, setSlots] = useState<Slot[]>(() => getTimeLeft(TARGET));

  useEffect(() => {
    const id = setInterval(() => setSlots(getTimeLeft(TARGET)), 1_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-3xl bg-white/70 px-5 py-5 text-center shadow-sm">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal/45 mb-3">
        Avant le grand jour 💍
      </p>

      <div className="flex justify-center gap-3">
        {slots.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div
              className="w-16 rounded-2xl py-2.5"
              style={{ backgroundColor: "#6B8FD4" }}
            >
              <span className="block text-2xl font-extrabold text-white tabular-nums leading-none">
                {String(value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-charcoal/45">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
