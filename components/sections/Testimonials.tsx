"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "dev.nova took us from a slide deck to a working MVP in weeks — clear scope, weekly cuts, and no surprises.",
        initials: "AK",
        name: "Ananya K.",
        role: "Product lead, B2B SaaS",
    },
    {
        text: "The handoff was exceptional: runbooks, repos, and a CI pipeline our engineers picked up immediately.",
        initials: "RJ",
        name: "Rahul J.",
        role: "Engineering manager",
    },
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 md:py-24">
            <Container className="max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-14"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400/90">
                        Client success
                    </span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">What our clients say</h2>
                    <p className="mt-3 text-[#a8b2d1] text-base md:text-lg">
                        Teams building real products with dev.nova.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-2xl border border-white/[0.08] bg-[#141b2d] p-8 md:p-10 relative"
                        >
                            <div className="absolute top-8 right-8 text-5xl font-serif text-violet-500/25 leading-none">
                                &ldquo;
                            </div>
                            <p className="text-[#a8b2d1] text-lg leading-relaxed relative z-[1]">{t.text}</p>
                            <div className="mt-8 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-white font-bold text-sm">
                                    {t.initials}
                                </div>
                                <div>
                                    <h5 className="font-bold text-white">{t.name}</h5>
                                    <p className="text-sm text-violet-300/90">{t.role}</p>
                                </div>
                            </div>
                            <div className="mt-4 text-amber-400/90 tracking-widest text-sm" aria-hidden>
                                ★★★★★
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
