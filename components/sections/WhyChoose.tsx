"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const features = [
    {
        icon: "🎯",
        title: "Clarity first",
        description: "Fixed milestones, visible backlog, and decisions documented — so build stays aligned.",
    },
    {
        icon: "📋",
        title: "Product thinking",
        description: "We optimize for outcomes, not ticket volume — scope that respects your runway.",
    },
    {
        icon: "⚡",
        title: "Velocity with quality",
        description: "Automated checks, previews, and reviews so speed doesn’t trade off reliability.",
    },
];

export const WhyChoose = () => {
    return (
        <section id="why-choose" className="py-20 md:py-24 bg-[#060913] border-t border-[var(--ns-border)]">
            <Container className="max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-14"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400/90">
                        Our advantage
                    </span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Why choose dev.nova</h2>
                    <p className="mt-3 text-[#a8b2d1] text-base md:text-lg">
                        A development studio shaped like modern product teams — transparent, pragmatic, and
                        purple by design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((f, index) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="rounded-2xl border border-white/[0.08] bg-[#141b2d] p-8 text-center hover:border-violet-500/30 transition-colors"
                        >
                            <div className="text-4xl mb-4">{f.icon}</div>
                            <h4 className="text-lg font-bold text-white">{f.title}</h4>
                            <p className="mt-3 text-sm text-[#a8b2d1] leading-relaxed">{f.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
