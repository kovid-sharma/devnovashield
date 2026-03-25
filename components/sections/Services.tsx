"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const services = [
    {
        id: "discovery",
        title: "Product discovery & PRDs",
        description:
            "Workshops, user journeys, and crisp requirements so engineering starts with clarity.",
        tag: "Strategy",
        icon: "🧭",
    },
    {
        id: "mvp",
        title: "MVP design & build",
        description:
            "End-to-end delivery — UX, APIs, and deployable software you can put in users’ hands.",
        tag: "Build",
        icon: "⚙️",
    },
    {
        id: "platform",
        title: "Platform & integrations",
        description:
            "Scalable foundations, third-party APIs, and developer tooling that stays maintainable.",
        tag: "Systems",
        icon: "🔌",
    },
    {
        id: "dx",
        title: "Developer experience",
        description:
            "Docs, CI/CD, previews, and standards so your team ships confidently after handoff.",
        tag: "Enablement",
        icon: "📦",
    },
];

export const Services = () => {
    return (
        <section id="summary" className="py-20 md:py-24 border-t border-[var(--ns-border)]">
            <Container className="max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-14"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400/90">
                        What we offer
                    </span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Core services</h2>
                    <p className="mt-3 text-[#a8b2d1] text-base md:text-lg">
                        Focused development offerings to take you from idea validation to production-ready
                        product.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.article
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="group relative rounded-2xl border border-white/[0.08] bg-[#141b2d] p-8 hover:border-violet-500/35 transition-colors shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
                        >
                            <div className="flex items-start gap-4">
                                <div className="relative shrink-0 w-14 h-14 rounded-xl bg-violet-500/15 flex items-center justify-center text-2xl border border-violet-500/20">
                                    <span>{service.icon}</span>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-violet-300/90">
                                        {service.tag}
                                    </span>
                                    <h3 className="mt-1 text-xl font-bold text-white group-hover:text-violet-200 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="mt-2 text-[#a8b2d1] text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                            <Link
                                href="#contact"
                                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 hover:text-fuchsia-300 transition-colors"
                            >
                                Start a conversation
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                                    <path
                                        d="M6 12L10 8L6 4"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </Container>
        </section>
    );
};
