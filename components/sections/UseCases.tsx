"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const projects = [
    {
        category: "FinTech",
        title: "Autonomous Fraud Detection",
        description: "Deployed agentic AI processing real-time transactions with 99.9% accuracy.",
        stats: "85% Fraud Reduction",
        gradient: "from-emerald-900 to-green-900",
    },
    {
        category: "Healthcare",
        title: "Diagnostic Assistant",
        description: "GenAI model assisting radiologists in early cancer detection from MRI scans.",
        stats: "30% Faster Diagnosis",
        gradient: "from-blue-900 to-indigo-900",
    },
    {
        category: "E-Commerce",
        title: "Hyper-Personalized Shopping",
        description: "Real-time preference learning engine for personalized product recommendations.",
        stats: "45% Conversion Lift",
        gradient: "from-purple-900 to-pink-900",
    },
];

export const UseCases = () => {
    return (
        <section id="use-cases" className="py-24 bg-black relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background" />

            <Container className="relative z-10">
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-medium tracking-wide uppercase text-sm"
                    >
                        Proven Results
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mt-2"
                    >
                        Use Cases Solved
                    </motion.h2>
                </div>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                            <div className="relative p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="space-y-4 max-w-2xl">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/80 border border-white/10">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-400 text-lg">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="text-right">
                                        <p className="text-sm text-zinc-500 uppercase tracking-widest font-semibold">Impact</p>
                                        <p className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                                            {project.stats}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
