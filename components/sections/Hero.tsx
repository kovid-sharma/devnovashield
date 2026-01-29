"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-700" />
                <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-indigo-500/10 rounded-full blur-[100px]" />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm border border-secondary transition-all hover:bg-secondary/70 rounded-full px-4 py-1.5"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                        <span className="text-sm font-medium text-secondary-foreground">
                            New: Antigravity GenAI Solutions
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground"
                    >
                        The Future of <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
                            Agentic Intelligence
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                    >
                        NovaAI empowers enterprises with crystal clear, autonomous AI agents
                        that automate complex workflows. Experience the next evolution of
                        software development with Antigravity.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Button size="lg" variant="premium" className="group text-lg px-8">
                            Start Building
                            <Sparkles className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="group text-lg px-8">
                            <Play className="mr-2 h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                            Watch Demo
                        </Button>
                    </motion.div>
                </div>

                {/* Floating Abstract Element (Optional Visual) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 relative w-full h-64 md:h-96 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden flex items-center justify-center group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 group-hover:opacity-75 transition-opacity" />
                    <p className="text-muted-foreground font-mono text-sm">
                        [Visualization of AI Agents Collaborating...]
                    </p>
                    {/* This could be replaced with a spline 3d scene or complex svg later */}
                </motion.div>
            </Container>
        </section>
    );
};
