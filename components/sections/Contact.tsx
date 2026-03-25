"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const CONTACT_API = "https://novashield-backend.onrender.com/api/contact";

const inputClass =
    "w-full rounded-lg border border-violet-500/20 bg-white/[0.04] px-4 py-2.5 text-white placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/40 transition-all";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    });
    const [formMessage, setFormMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setFormMessage("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch(CONTACT_API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormMessage("✅ Thank you! Your message has been sent successfully.");
                setFormData({ name: "", email: "", company: "", phone: "", message: "" });
                setTimeout(() => setFormMessage(""), 5000);
            } else {
                setFormMessage("⚠️ Something went wrong. Please try again or email us directly.");
            }
        } catch {
            setFormMessage("⚠️ Backend server is not responding. Please email us at contact@novashield.in");
            setTimeout(() => setFormMessage(""), 8000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-28 border-t border-[var(--ns-border)]">
            <Container className="max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400/90">
                            Get in touch
                        </span>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Contact us</h2>
                        <p className="mt-4 text-[#a8b2d1] leading-relaxed max-w-md">
                            Have a product idea or need a build partner? We typically reply within one business
                            day. dev.nova focuses on development products and idea building — tell us what
                            you&apos;re aiming to ship.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="flex gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-violet-500/25 bg-violet-500/10 text-violet-300">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                                        <path
                                            d="M3 8L10.89 13.26C11.23 13.47 11.61 13.59 12 13.59C12.39 13.59 12.77 13.47 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">Email</div>
                                    <a
                                        href="mailto:contact@novashield.in"
                                        className="text-violet-300 hover:text-fuchsia-300 transition-colors"
                                    >
                                        contact@novashield.in
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-violet-500/25 bg-violet-500/10 text-violet-300">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                                        <path
                                            d="M22 16.92V19.92C22 20.49 21.54 20.95 20.97 20.92C10.06 20.36 3.64 13.94 3.08 3.03C3.05 2.46 3.51 2 4.08 2H7.08C7.65 2 8.13 2.47 8.18 3.04C8.29 4.17 8.5 5.27 8.86 6.32C9 6.75 8.89 7.22 8.58 7.54L6.62 9.5C8.06 12.37 11.63 15.94 14.5 17.38L16.46 15.42C16.78 15.11 17.25 15 17.68 15.14C18.73 15.5 19.83 15.71 20.96 15.82C21.53 15.87 22 16.35 22 16.92Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">Phone</div>
                                    <a
                                        href="tel:+918308628739"
                                        className="text-violet-300 hover:text-fuchsia-300 transition-colors"
                                    >
                                        +91 8308628739
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-violet-500/25 bg-violet-500/10 text-violet-300">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                                        <path
                                            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">Studio</div>
                                    <span className="text-[#a8b2d1]">Wakad, Pune, India</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl border border-violet-500/20 bg-[#141b2d] p-6 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
                    >
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-[#a8b2d1]">
                                    Project Name *
                                </label>
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    required
                                    className={inputClass}
                                    placeholder="Your product or initiative name"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-[#a8b2d1]">
                                    Email Address *
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className={inputClass}
                                    placeholder="you@company.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-[#a8b2d1]">
                                    Full Name *
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className={inputClass}
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-[#a8b2d1]">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    className={inputClass}
                                    placeholder="+91 1234567890"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label htmlFor="message" className="text-sm font-medium text-[#a8b2d1]">
                                    Tell us about your development needs *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className={cn(inputClass, "min-h-[120px] resize-y")}
                                    placeholder="Tell us about your development needs."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    buttonVariants({ variant: "premium", size: "lg" }),
                                    "w-full h-12 text-base inline-flex items-center justify-center gap-2 disabled:pointer-events-none disabled:opacity-60"
                                )}
                            >
                                <span>{isSubmitting ? "Sending…" : "Send Message"}</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                                    <path
                                        d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {formMessage ? (
                                <div
                                    className={cn(
                                        "text-sm rounded-lg px-4 py-3",
                                        formMessage.includes("✅")
                                            ? "bg-emerald-500/15 text-emerald-200 border border-emerald-500/25"
                                            : "bg-amber-500/10 text-amber-100 border border-amber-500/25"
                                    )}
                                >
                                    {formMessage}
                                </div>
                            ) : null}
                        </form>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};
