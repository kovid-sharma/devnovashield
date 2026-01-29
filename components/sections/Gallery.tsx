"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";

export const Gallery = () => {
    // Using gradient placeholders instead of images to ensure no broken links
    const items = [
        "bg-gradient-to-br from-purple-600 to-indigo-700",
        "bg-gradient-to-br from-pink-600 to-rose-700",
        "bg-gradient-to-br from-blue-600 to-cyan-700",
        "bg-gradient-to-br from-emerald-600 to-green-700",
        "bg-gradient-to-br from-orange-600 to-amber-700",
        "bg-gradient-to-br from-violet-600 to-fuchsia-700",
    ];

    return (
        <section id="gallery" className="py-24 bg-muted/5">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Innovation Gallery
                    </h2>
                    <p className="text-muted-foreground mt-4">
                        Visualizing the future of intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((gradient, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`aspect-video rounded-xl ${gradient} shadow-lg relative overflow-hidden group cursor-pointer`}
                        >
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">View Project</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
