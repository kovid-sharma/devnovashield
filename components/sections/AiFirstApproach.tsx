"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Bot, Layers, Zap, Wallet } from "lucide-react";

const pillars = [
    {
        icon: Layers,
        title: "Reuse, don’t restart",
        description:
            "We use AI to map your goals to proven modules and internal libraries — less greenfield typing, more value per week.",
    },
    {
        icon: Zap,
        title: "Faster to market",
        description:
            "Accelerated scaffolding, reviews, and refactors mean your users see working software sooner, without cutting quality.",
    },
    {
        icon: Wallet,
        title: "Leaner cost curve",
        description:
            "Fewer duplicate efforts and smarter automation keep delivery efficient — you pay for outcomes, not repeated wheel-spinning.",
    },
];

export const AiFirstApproach = () => {
    return (
        <section
            id="ai-first"
            className="relative border-t border-[var(--ns-border)] bg-gradient-to-b from-[#0a0e27] to-[#080c1f] py-16 md:py-24 overflow-hidden"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-0 top-1/2 h-[min(420px,70vw)] w-[min(420px,70vw)] -translate-y-1/2 translate-x-1/4 rounded-full bg-violet-600/12 blur-[100px]" />
            </div>

            <Container className="relative z-10 max-w-[1400px]">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-sm font-medium text-violet-200/95">
                            <Bot className="h-4 w-4 shrink-0" aria-hidden />
                            AI-first development company
                        </div>

                        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-[2.35rem] leading-[1.15]">
                            How we build makes us{" "}
                            <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                                faster and cheaper
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#a8b2d1]">
                            We put AI at the center of delivery — not as a gimmick, but as leverage. It helps us
                            reutilise existing code, patterns, and components so your product moves from idea to
                            shipped software in less time and with a leaner budget.
                        </p>

                        <p className="mt-4 max-w-xl text-base leading-relaxed text-[#a8b2d1]/90">
                            You get the same rigor on architecture and security (we sit next to NovaShield),
                            with a workflow built for speed: intelligent reuse, automated checks, and human-led
                            decisions where it matters.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.08 }}
                        className="flex flex-col gap-4"
                    >
                        {pillars.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + index * 0.06 }}
                                className="group rounded-2xl border border-white/[0.08] bg-[#141b2d] p-5 md:p-6 transition-colors hover:border-violet-500/35"
                            >
                                <div className="flex gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-500/25 bg-violet-500/10 text-violet-300 transition-colors group-hover:bg-violet-500/15">
                                        <item.icon className="h-6 w-6" aria-hidden />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-[#a8b2d1]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
