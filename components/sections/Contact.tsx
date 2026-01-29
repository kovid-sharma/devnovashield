"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const Contact = () => {
    // This would connect to a real backend in production
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your interest! We will contact you shortly.");
    };

    return (
        <section id="contact" className="py-24 bg-background relative">
            <Container>
                <div className="max-w-2xl mx-auto bg-zinc-900/50 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4">Start Your Transformation</h2>
                        <p className="text-muted-foreground">
                            Ready to deploy autonomous agents? Get in touch with our solution architects.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="john@company.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                required
                                id="message"
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                placeholder="Tell us about your AI needs..."
                            />
                        </div>

                        <Button type="submit" variant="premium" className="w-full text-lg h-12">
                            Send Message
                            <Send className="ml-2 w-4 h-4" />
                        </Button>
                    </form>
                </div>
            </Container>
        </section>
    );
};
