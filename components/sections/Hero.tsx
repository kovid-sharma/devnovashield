"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const trust = [
    "Idea-to-MVP playbooks",
    "Founder-friendly engagement",
    "Purple-stack design system",
    "Built alongside NovaShield",
];

export const Hero = () => {
    return (
        <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[min(420px,45vw)] h-[min(420px,45vw)] rounded-full bg-violet-600/20 blur-[100px]" />
                <div className="absolute bottom-[5%] right-[0%] w-[min(480px,50vw)] h-[min(480px,50vw)] rounded-full bg-fuchsia-600/15 blur-[110px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-purple-900/10 blur-[90px]" />
            </div>

            <Container className="relative z-10 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_min(420px,42%)] gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1.5 text-sm text-[#a8b2d1]">
                            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
                            <span>Child studio of NovaShield — dev products & ideas</span>
                        </div>

                        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight">
                            We turn product ideas into{" "}
                            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-200 bg-clip-text text-transparent">
                                shipped development
                            </span>
                        </h1>

                        <p className="mt-5 text-lg text-[#a8b2d1] max-w-xl leading-relaxed">
                            Discovery workshops · solution architecture · MVP engineering · developer
                            experience. dev.nova is where your roadmap becomes working software.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                            <Link
                                href="#contact"
                                className={cn(
                                    buttonVariants({ size: "lg", variant: "premium" }),
                                    "text-base px-7 h-12 inline-flex items-center gap-2"
                                )}
                            >
                                <span>Book a discovery call</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#summary"
                                className={cn(
                                    buttonVariants({ size: "lg", variant: "outline" }),
                                    "text-base px-7 h-12 border-violet-500/35 bg-white/[0.03] hover:bg-white/[0.06] text-white"
                                )}
                            >
                                View summary
                            </Link>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                            {trust.map((t) => (
                                <div
                                    key={t}
                                    className="flex items-center gap-2 text-sm text-[#a8b2d1]/95"
                                >
                                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
                                        <path
                                            d="M10 2L13 8L19 9L14.5 13.5L15.5 19.5L10 16.5L4.5 19.5L5.5 13.5L1 9L7 8L10 2Z"
                                            fill="currentColor"
                                            className="text-violet-400"
                                        />
                                    </svg>
                                    <span>{t}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.65, delay: 0.15 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-[min(100%,320px)] aspect-[200/210]">
                            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-3xl scale-110" />
                            <svg
                                className="relative w-full h-full drop-shadow-[0_0_28px_rgba(139,92,246,0.35)]"
                                viewBox="0 0 200 210"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden
                            >
                                <defs>
                                    <linearGradient id="dnOuter" x1="0" x2="1">
                                        <stop offset="0" stopColor="#a78bfa" />
                                        <stop offset="1" stopColor="#c026d3" />
                                    </linearGradient>
                                    <linearGradient id="dnInner" x1="0" x2="1">
                                        <stop offset="0" stopColor="#7c3aed" />
                                        <stop offset="1" stopColor="#e879f9" />
                                    </linearGradient>
                                    <filter id="dnGlow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur stdDeviation="8" result="b" />
                                        <feMerge>
                                            <feMergeNode in="b" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                <path
                                    d="M100 14 L168 54 C170 100 132 154 100 194 C68 154 30 100 32 54 L100 14 Z"
                                    fill="none"
                                    stroke="url(#dnOuter)"
                                    strokeWidth="6"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    filter="url(#dnGlow)"
                                />
                                <path
                                    d="M100 36 L150 74 C150 108 122 146 100 172 C78 146 50 108 50 74 L100 36 Z"
                                    fill="none"
                                    stroke="url(#dnInner)"
                                    strokeWidth="4"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 rounded-full border border-violet-400/20 animate-pulse scale-125 opacity-40 pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
