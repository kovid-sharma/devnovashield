"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Code2, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#summary" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Use cases", href: "#use-cases" },
    { name: "Stories", href: "#testimonials" },
    { name: "Why dev.nova", href: "#why-choose" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "border-violet-500/15 bg-[#0a0e27]/95 shadow-lg shadow-black/20 backdrop-blur-md"
                    : "border-transparent bg-[#0a0e27]/80 backdrop-blur-sm"
            )}
        >
            <Container className="max-w-[1400px]">
                <div className="flex h-16 md:h-[72px] items-center justify-between">
                    <Link href="/" className="group flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 transition-colors group-hover:bg-violet-500/20">
                            <Code2 className="h-6 w-6 text-violet-300" aria-hidden />
                        </div>
                        <span className="text-xl font-extrabold tracking-tight text-white md:text-2xl">
                            dev<span className="text-violet-300">.nova</span>
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-7 lg:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-[#a8b2d1] transition-colors hover:text-violet-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className={cn(buttonVariants({ variant: "premium", size: "sm" }), "px-5")}
                        >
                            Get started
                        </Link>
                    </nav>

                    <div className="lg:hidden">
                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-violet-500/25 bg-white/[0.04] text-white"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </Container>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-b border-violet-500/15 bg-[#0a0e27]/98 backdrop-blur-lg lg:hidden"
                    >
                        <div className="mx-auto max-w-[1400px] space-y-1 px-4 py-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-[#a8b2d1] hover:bg-white/[0.04] hover:text-violet-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-3">
                                <Link
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        buttonVariants({ variant: "premium" }),
                                        "flex w-full justify-center"
                                    )}
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
