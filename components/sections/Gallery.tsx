"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

const galleryProjects = [
    {
        name: "DocuMind",
        description: "Agentic AI for automated document processing and intelligent data extraction.",
        gradient: "bg-gradient-to-br from-purple-600 to-indigo-700",
    },
    {
        name: "SalesPilot",
        description: "GenAI-powered sales assistant for automated lead qualification and outreach.",
        gradient: "bg-gradient-to-br from-pink-600 to-rose-700",
    },
    {
        name: "CodeReview Agent",
        description: "Autonomous code review agent that provides PR feedback and suggests improvements.",
        gradient: "bg-gradient-to-br from-blue-600 to-cyan-700",
    },
    {
        name: "SupplyChain Oracle",
        description: "Predictive analytics for supply chain optimization and demand forecasting.",
        gradient: "bg-gradient-to-br from-emerald-600 to-green-700",
    },
    {
        name: "CustomerVoice",
        description: "Multi-channel customer feedback analysis using GenAI sentiment understanding.",
        gradient: "bg-gradient-to-br from-orange-600 to-amber-700",
    },
    {
        name: "HRAssist",
        description: "Agentic AI for employee onboarding, FAQ handling, and HR policy queries.",
        gradient: "bg-gradient-to-br from-violet-600 to-fuchsia-700",
    },
];

export const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-muted/5">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Innovation Gallery
                    </h2>
                    <p className="text-muted-foreground mt-4">
                        Our GenAI & Agentic AI solutions solving real business problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryProjects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`aspect-video rounded-xl ${project.gradient} shadow-lg relative overflow-hidden group cursor-pointer`}
                        >
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                                <p className="text-sm text-zinc-300">{project.description}</p>
                            </div>
                            <div className="absolute bottom-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity">
                                <span className="text-white font-semibold text-lg drop-shadow-lg">{project.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
