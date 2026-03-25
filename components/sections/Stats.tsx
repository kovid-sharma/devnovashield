"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const stats = [
    { value: "98%", label: "On-time delivery", sub: "Across discovery → launch" },
    { value: "120+", label: "Builds shipped", sub: "Products, MVPs & platforms" },
    { value: "24/7", label: "Build & support", sub: "Aligned with your roadmap" },
];

export const Stats = () => {
    return (
        <section
            id="stats"
            className="py-20 border-y border-[var(--ns-border)] bg-[#0c1028]/80"
        >
            <Container className="max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="text-center md:text-left relative"
                        >
                            <div className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                                {s.value}
                            </div>
                            <p className="mt-2 text-lg font-semibold text-white/90">{s.label}</p>
                            <p className="text-sm text-[#a8b2d1]/80 mt-1">{s.sub}</p>
                            <div className="hidden md:block absolute -bottom-4 left-0 right-0 mx-auto md:mx-0 md:left-0 md:right-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-80" />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
