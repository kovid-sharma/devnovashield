"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const FEED = [
    { type: "ship", msg: "Production deploy — checkout-api v2.4.0", time: "just now" },
    { type: "warn", msg: "E2E flaky — retrying pipeline on staging", time: "2m ago" },
    { type: "info", msg: "Design review approved — onboarding v3", time: "6m ago" },
    { type: "ship", msg: "Feature flag enabled — 10% rollout", time: "12m ago" },
    { type: "info", msg: "Sprint 34 planned — 42 story points", time: "18m ago" },
];

const NEW_FEED = [
    { type: "info", msg: "PR merged — auth hardening (#884)", time: "just now" },
    { type: "ship", msg: "Preview env ready — dev.nova marketing", time: "just now" },
    { type: "warn", msg: "Bundle size +4% — ticket created", time: "just now" },
];

const NAV = [
    { id: "overview", icon: "⚡", label: "Overview" },
    { id: "backlog", icon: "📋", label: "Backlog" },
    { id: "releases", icon: "🚀", label: "Releases" },
] as const;

type Tab = (typeof NAV)[number]["id"];

export const DevPipelineDashboard = () => {
    const [active, setActive] = useState<Tab>("overview");
    const [feed, setFeed] = useState(FEED);
    const [tick, setTick] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setTick((t) => t + 1);
            setFeed((prev) => [NEW_FEED[tick % NEW_FEED.length], ...prev.slice(0, 7)]);
        }, 4000);
        return () => clearInterval(id);
    }, [tick]);

    return (
        <section id="dashboard" className="py-20 md:py-24">
            <Container className="max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-14"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400/90">
                        Live product rhythm
                    </span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                        Development dashboard
                    </h2>
                    <p className="mt-3 text-[#a8b2d1] max-w-2xl mx-auto text-base md:text-lg">
                        The kind of clarity dev.nova brings to your roadmap — builds, backlog, and
                        releases in one view.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[20px] border border-violet-500/25 bg-[#0c1020] shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(139,92,246,0.08)] overflow-hidden grid grid-cols-1 md:grid-cols-[172px_1fr] min-h-[480px]"
                >
                    <aside className="bg-[#070b18] border-b md:border-b-0 md:border-r border-violet-500/15 p-4 md:p-5 flex flex-row md:flex-col gap-3 md:gap-2">
                        <div className="hidden md:block text-sm font-extrabold text-violet-400 pb-4 mb-1 border-b border-violet-500/15 px-2">
                            {"</>"} dev.nova
                        </div>
                        <nav className="flex flex-row md:flex-col flex-1 gap-1.5 overflow-x-auto">
                            {NAV.map(({ id, icon, label }) => (
                                <button
                                    key={id}
                                    type="button"
                                    onClick={() => setActive(id)}
                                    className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-left text-sm whitespace-nowrap transition-colors ${
                                        active === id
                                            ? "bg-violet-500/15 text-violet-300 font-bold"
                                            : "text-[#a8b2d1]/55 hover:bg-white/[0.04] hover:text-[#a8b2d1]/90"
                                    }`}
                                >
                                    <span>{icon}</span>
                                    <span>{label}</span>
                                </button>
                            ))}
                        </nav>
                        <div className="hidden md:flex items-center gap-2 text-[0.7rem] text-[#a8b2d1]/40 pt-3 mt-auto border-t border-violet-500/10 px-2">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                            Pipeline live
                        </div>
                    </aside>

                    <main className="p-6 md:p-7">
                        {active === "overview" && (
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <h3 className="text-base font-bold text-white m-0">Delivery overview</h3>
                                    <div className="flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold border border-violet-400/25 bg-violet-500/10 text-violet-300">
                                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                                        All streams healthy
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                                    {[
                                        { icon: "🧩", val: "42", lab: "Story points (sprint)" },
                                        { icon: "✅", val: "18", lab: "PRs merged (week)" },
                                        { icon: "🚀", val: "6", lab: "Deploys (week)" },
                                        { icon: "🐛", val: "3", lab: "Open P1 bugs" },
                                    ].map((k) => (
                                        <div
                                            key={k.lab}
                                            className="rounded-xl p-3.5 border border-white/[0.06] bg-white/[0.03] border-violet-500/20"
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg">{k.icon}</span>
                                                <div>
                                                    <div className="text-xl font-extrabold text-white leading-none">
                                                        {k.val}
                                                    </div>
                                                    <div className="text-[0.69rem] text-[#a8b2d1]/65 mt-1">
                                                        {k.lab}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
                                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3.5">
                                        <div className="text-[0.73rem] font-bold uppercase tracking-wider text-[#a8b2d1]/75 mb-3">
                                            Weekly build activity
                                        </div>
                                        <div className="flex items-end gap-1 h-[90px]">
                                            {[38, 62, 45, 80, 53, 29, 17].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end"
                                                >
                                                    <div
                                                        className="w-full rounded-t bg-gradient-to-t from-violet-600 to-fuchsia-500 opacity-90"
                                                        style={{ height: `${(h / 80) * 100}%` }}
                                                    />
                                                    <span className="text-[0.62rem] text-[#a8b2d1]/45">
                                                        {["M", "T", "W", "T", "F", "S", "S"][i]}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3.5 flex flex-col">
                                        <div className="text-[0.73rem] font-bold uppercase tracking-wider text-[#a8b2d1]/75 mb-2 flex items-center gap-2">
                                            Live activity
                                            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                                        </div>
                                        <div className="flex flex-col gap-1.5 flex-1">
                                            {feed.slice(0, 5).map((item, i) => (
                                                <div
                                                    key={`${i}-${item.time}-${item.msg.slice(0, 12)}`}
                                                    className={`flex gap-2 px-2 py-1.5 rounded-lg text-[0.74rem] text-[#a8b2d1]/85 bg-white/[0.025] border-l-2 ${
                                                        item.type === "ship"
                                                            ? "border-l-fuchsia-400"
                                                            : item.type === "warn"
                                                              ? "border-l-amber-400"
                                                              : "border-l-violet-400"
                                                    }`}
                                                >
                                                    <div className="min-w-0 flex-1 truncate">{item.msg}</div>
                                                    <span className="text-[0.64rem] text-[#a8b2d1]/35 shrink-0">
                                                        {item.time}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {active === "backlog" && (
                            <div className="flex flex-col gap-4">
                                <h3 className="text-base font-bold text-white">Prioritized backlog</h3>
                                <ul className="space-y-2 text-sm text-[#a8b2d1]/90">
                                    {[
                                        "MVP scope lock — user interviews synthesis",
                                        "API contract for mobile v1",
                                        "Accessibility pass — core flows",
                                        "Performance budget — LCP & TTFB",
                                    ].map((line) => (
                                        <li
                                            key={line}
                                            className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2"
                                        >
                                            <span className="text-violet-400">◆</span>
                                            {line}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {active === "releases" && (
                            <div className="flex flex-col gap-4">
                                <h3 className="text-base font-bold text-white">Recent releases</h3>
                                {[
                                    {
                                        name: "Ideation → PRD template pack",
                                        date: "Mar 2025",
                                        note: "Shipped for partner teams",
                                    },
                                    {
                                        name: "Design system v2 — purple theme",
                                        date: "Feb 2025",
                                        note: "Aligned with NovaShield family",
                                    },
                                    {
                                        name: "MVP starter — Next.js + API",
                                        date: "Jan 2025",
                                        note: "Faster first deploy",
                                    },
                                ].map((r) => (
                                    <div
                                        key={r.name}
                                        className="flex flex-wrap items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3"
                                    >
                                        <div className="flex-1 min-w-[200px]">
                                            <div className="font-bold text-white text-sm">{r.name}</div>
                                            <div className="text-xs text-[#a8b2d1]/50 mt-0.5">{r.date}</div>
                                        </div>
                                        <span className="text-xs font-semibold rounded-full px-3 py-1 bg-violet-500/15 text-violet-300 border border-violet-500/25">
                                            {r.note}
                                        </span>
                                    </div>
                                ))}
                                <div className="rounded-xl border border-violet-500/25 bg-gradient-to-r from-violet-500/[0.08] to-fuchsia-500/[0.06] px-5 py-4 flex gap-3 items-start">
                                    <span className="text-xl shrink-0">💬</span>
                                    <div>
                                        <div className="font-bold text-sm text-white">
                                            Want a delivery rhythm like this?
                                        </div>
                                        <div className="text-xs text-[#a8b2d1]/65 mt-1">
                                            Tell us about your development needs — we&apos;ll map a path from idea
                                            to production.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </main>
                </motion.div>
            </Container>
        </section>
    );
};
