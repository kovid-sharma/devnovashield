"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "NovaAI transformed our customer service operations. The autonomous agents handle 80% of inquiries with human-like empathy.",
        author: "Sarah Chen",
        role: "CTO, FinEdge Global",
    },
    {
        quote: "The predictive analytics model predicted market shifts two weeks in advance, saving us over $2M in inventory costs.",
        author: "James Wilson",
        role: "Director of Operations, RetailGiant",
    },
    {
        quote: "Implementation was seamless. The tailored GenAI solution integrates perfectly with our legacy stack.",
        author: "Dr. Emily Carter",
        role: "Head of Innovation, MedTech Inc.",
    },
    {
        quote: "We've seen a 300% ROI within the first quarter. Antigravity's approach to AI is truly revolutionary.",
        author: "Michael Chang",
        role: "CEO, Nexus Dynamics",
    },
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-muted/10 relative overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#4f46e5 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />

            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Trusted by Visionaries
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm relative"
                        >
                            <Quote className="absolute top-8 right-8 w-8 h-8 text-primary/20" />
                            <p className="text-xl text-zinc-300 italic mb-6 leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.author[0]}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
