"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const useCases = [
    {
        title: "Validate the idea",
        description: "Rapid prototypes and user tests before you over-invest in the wrong build.",
        icon: "💡",
    },
    {
        title: "Ship the MVP",
        description: "A tight scope, weekly demos, and a release your early adopters can use.",
        icon: "🚀",
    },
    {
        title: "Scale the platform",
        description: "Hardening, observability, and integration patterns as usage grows.",
        icon: "📈",
    },
    {
        title: "Hand off cleanly",
        description: "Documentation, repos, and DX so your internal team owns the next chapter.",
        icon: "🤝",
    },
];

export const UseCases = () => {
    return (
        <section id="use-cases" className="py-20 md:py-24 bg-[#080c1f]/90">
            <Container className="max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-14"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400/90">
                        Solutions
                    </span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Use cases</h2>
                    <p className="mt-3 text-[#a8b2d1] text-base md:text-lg">
                        How teams use dev.nova across the product lifecycle.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {useCases.map((uc, index) => (
                        <motion.div
                            key={uc.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07 }}
                            className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#141b2d] p-6 hover:border-violet-500/30 transition-colors group"
                        >
                            <div className="text-3xl mb-4">{uc.icon}</div>
                            <h4 className="text-lg font-bold text-white">{uc.title}</h4>
                            <p className="mt-2 text-sm text-[#a8b2d1] leading-relaxed">{uc.description}</p>
                            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-violet-500/[0.06] to-transparent" />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
