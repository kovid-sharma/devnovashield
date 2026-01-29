"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-24 relative">
            {/* Decorative blob */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 transform -translate-y-1/2" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            We are <span className="text-primary">Antigravity</span>. <br />
                            Defying Limits with AI.
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            NovaAI is the flagship initiative of Antigravity, dedicated to pushing the boundaries of what's possible with Generative Artificial Intelligence. We don't just build software; we architect intelligent systems that think, learn, and evolve.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Industry-leading R&D in Large Language Models",
                                "Ethical AI implementation frameworks",
                                "Seamless integration with legacy systems",
                                "24/7 autonomous monitoring and optimization"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                    className="flex items-center space-x-3"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                                    <span className="text-foreground font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="space-y-4 translate-y-8">
                                <div className="h-48 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 p-6 flex items-center justify-center">
                                    <span className="text-4xl font-bold text-foreground">50+</span>
                                </div>
                                <div className="h-64 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-end">
                                    <span className="text-lg font-medium text-muted-foreground">Projects Delivered</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-64 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-md border border-white/10 p-6 flex flex-col justify-end">
                                    <span className="text-lg font-medium text-muted-foreground">Efficiency Gain</span>
                                </div>
                                <div className="h-48 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-md border border-white/10 p-6 flex items-center justify-center">
                                    <span className="text-4xl font-bold text-foreground">95%</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
