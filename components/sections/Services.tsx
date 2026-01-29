"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Brain, MessageSquare, Monitor, BarChart, Shield, Zap } from "lucide-react";

const services = [
    {
        title: "Generative AI Agents",
        description: "Autonomous agents that handle complex customer interactions and workflows.",
        icon: Brain,
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Natural Language Processing",
        description: "Advanced semantic understanding for document analysis and sentiment tracking.",
        icon: MessageSquare,
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Computer Vision",
        description: "Real-time image and video analysis for quality control and security.",
        icon: Monitor,
        color: "from-green-500 to-emerald-500",
    },
    {
        title: "Predictive Analytics",
        description: "Data-driven insights to forecast trends and optimize decision making.",
        icon: BarChart,
        color: "from-orange-500 to-red-500",
    },
    {
        title: "AI Security & Compliance",
        description: "Ensuring your AI implementations are secure, ethical, and compliant.",
        icon: Shield,
        color: "from-indigo-500 to-blue-500",
    },
    {
        title: "Process Automation",
        description: "End-to-end automation of manual processes with 95% efficiency improvement.",
        icon: Zap,
        color: "from-yellow-500 to-orange-500",
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-muted/20 relative overflow-hidden">
            <Container>
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                    >
                        Core Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg"
                    >
                        Comprehensive AI solutions tailored for enterprise scalability and performance.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-xl"
                        >
                            <div
                                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} p-2.5 mb-6 text-white shadow-lg`}
                            >
                                <service.icon className="w-full h-full" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl`} />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
