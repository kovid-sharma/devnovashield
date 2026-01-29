"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export const WhyChoose = () => {
    return (
        <section className="py-24 relative bg-black text-white overflow-hidden">
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />

            <Container className="relative z-10">
                <div className="text-center space-y-4 mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold">Why Choose NovaAI?</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        We bridge the gap between theoretical AI and practical, profit-driving implementation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            95%
                        </div>
                        <h3 className="text-xl font-semibold text-white">Efficiency Improved</h3>
                        <p className="text-sm text-zinc-500">
                            AI Enablement of Manual Processes
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        <div className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            500+
                        </div>
                        <h3 className="text-xl font-semibold text-white">Hours Saved Monthly</h3>
                        <p className="text-sm text-zinc-500">
                            Per Enterprise Client on Average
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <div className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            24/7
                        </div>
                        <h3 className="text-xl font-semibold text-white">Autonomous Operation</h3>
                        <p className="text-sm text-zinc-500">
                            Continuous Learning & Optimization
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
