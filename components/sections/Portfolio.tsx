"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, X } from "lucide-react";
import { Container } from "@/components/ui/container";

type PortfolioApp = {
    name: string;
    folder: string;
    category: string;
    summary: string;
    accent: string;
    badge: string;
    highlights: string[];
    stack: string[];
};

const portfolioApps: PortfolioApp[] = [
    {
        name: "FynX",
        folder: "fynX",
        category: "Crypto news application",
        summary:
            "A modern crypto news app concept with real-time feeds, curated market intelligence, and clean mobile-first reading experiences.",
        accent: "from-amber-400 via-orange-500 to-pink-500",
        badge: "Web + Mobile",
        highlights: ["Live news aggregation", "Watchlists & alerts", "Clean investor UX"],
        stack: ["React", "TypeScript", "Flutter", "Kafka", "Docker", "Node.js", "PostgreSQL"],
    },
    {
        name: "Pettoo.",
        folder: "pettoo",
        category: "Pet ecommerce application",
        summary:
            "A pet care commerce platform demo with product discovery, checkout flows, inventory management, and a delightful consumer experience.",
        accent: "from-emerald-400 via-teal-500 to-cyan-500",
        badge: "Commerce Platform",
        highlights: ["Catalog & cart flows", "Inventory sync", "Order management"],
        stack: ["React", "TypeScript", "Java", "Docker", "Redis", "MySQL", "REST APIs"],
    },
    {
        name: "Equinox Application",
        folder: "equinox",
        category: "SEBI-registered RA analysis tool",
        summary:
            "An advisory analytics platform concept for research workflows, insight dashboards, signal tracking, and compliance-aware reporting.",
        accent: "from-violet-400 via-fuchsia-500 to-indigo-500",
        badge: "Fintech Intelligence",
        highlights: ["Research dashboards", "Signal analysis", "Compliance-friendly reports"],
        stack: ["Java", "TypeScript", "React", "Kafka", "Docker", "Python", "AWS"],
    },
];

const modernStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Flutter",
    "Java",
    "Kafka",
    "Docker",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Redis",
    "AWS",
    "CI/CD",
    "API Integrations",
];

export const Portfolio = () => {
    const [imagesByFolder, setImagesByFolder] = useState<Record<string, string[]>>({});
    const [activeFolder, setActiveFolder] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const allFoldersLoadedRef = useRef(false);

    const loadImages = useCallback(async () => {
        const results = await Promise.all(
            portfolioApps.map(async (app) => {
                try {
                    const response = await fetch(`/api/portfolio-images?folder=${app.folder}`, {
                        cache: "no-store",
                    });
                    if (!response.ok) {
                        return [app.folder, []] as const;
                    }

                    const data = (await response.json()) as { images?: string[] };
                    return [app.folder, data.images ?? []] as const;
                } catch {
                    return [app.folder, []] as const;
                }
            })
        );

        const nextImagesByFolder = Object.fromEntries(results);
        allFoldersLoadedRef.current = portfolioApps.every(
            (app) => (nextImagesByFolder[app.folder] ?? []).length > 0
        );
        setImagesByFolder(nextImagesByFolder);
    }, []);

    useEffect(() => {
        let isMounted = true;
        const refreshImages = async () => {
            if (!isMounted) {
                return;
            }
            await loadImages();
        };

        void refreshImages();

        const intervalId = window.setInterval(() => {
            if (allFoldersLoadedRef.current) {
                return;
            }
            void refreshImages();
        }, 5000);

        const handleFocus = () => {
            void refreshImages();
        };

        window.addEventListener("focus", handleFocus);

        return () => {
            isMounted = false;
            window.clearInterval(intervalId);
            window.removeEventListener("focus", handleFocus);
        };
    }, [loadImages]);

    const activeApp = useMemo(
        () => portfolioApps.find((app) => app.folder === activeFolder) ?? null,
        [activeFolder]
    );

    const activeImages = activeFolder ? imagesByFolder[activeFolder] ?? [] : [];

    const openProject = (folder: string) => {
        void loadImages();
        setActiveFolder(folder);
        setActiveIndex(0);
    };

    const closeProject = () => {
        setActiveFolder(null);
        setActiveIndex(0);
    };

    const showPrevious = () => {
        if (activeImages.length === 0) {
            return;
        }
        setActiveIndex((current) => (current - 1 + activeImages.length) % activeImages.length);
    };

    const showNext = () => {
        if (activeImages.length === 0) {
            return;
        }
        setActiveIndex((current) => (current + 1) % activeImages.length);
    };

    return (
        <section id="portfolio" className="border-t border-[var(--ns-border)] py-20 md:py-24">
            <Container className="max-w-[1400px]">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400/90">
                        Developer team portfolio
                    </span>
                    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                        Clickable product demos with real project visuals
                    </h2>
                    <p className="mt-3 text-base text-[#a8b2d1] md:text-lg">
                        Each portfolio card opens a visual project gallery and automatically pulls
                        screenshots from your asset folders as soon as you add them.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {portfolioApps.map((app, index) => {
                        const images = imagesByFolder[app.folder] ?? [];
                        const previewImage = images[0];

                        return (
                            <motion.div
                                key={app.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <button
                                    type="button"
                                    onClick={() => openProject(app.folder)}
                                    className="group block w-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#141b2d] text-left shadow-[0_6px_28px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-1 hover:border-violet-400/35"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        {previewImage ? (
                                            <>
                                                <img
                                                    src={previewImage}
                                                    alt={`${app.name} preview`}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/30 to-transparent" />
                                            </>
                                        ) : (
                                            <>
                                                <div className={`absolute inset-0 bg-gradient-to-br ${app.accent}`} />
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(10,14,39,0.45),transparent_40%)]" />
                                            </>
                                        )}

                                        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                                            <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                                                {app.badge}
                                            </span>
                                            <span className="inline-flex items-center gap-1 rounded-full border border-violet-300/30 bg-[#0a0e27]/70 px-3 py-1 text-xs font-medium text-violet-100 backdrop-blur-sm">
                                                Open gallery
                                                <ExternalLink className="h-3.5 w-3.5" />
                                            </span>
                                        </div>

                                        <div className="absolute inset-x-0 bottom-0 p-5">
                                            <p className="text-sm font-medium text-white/75">{app.category}</p>
                                            <h3 className="mt-1 text-3xl font-extrabold text-white">
                                                {app.name}
                                            </h3>
                                            <p className="mt-2 text-sm text-white/80">
                                                {images.length > 0
                                                    ? `${images.length} screenshot${images.length > 1 ? "s" : ""} available`
                                                    : `Drop images into assets/${app.folder}`}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <p className="text-sm leading-relaxed text-[#a8b2d1]">{app.summary}</p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {app.stack.map((item) => (
                                                <span
                                                    key={`${app.name}-${item}`}
                                                    className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-100"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-6 space-y-2">
                                            {app.highlights.map((point) => (
                                                <div
                                                    key={`${app.name}-${point}`}
                                                    className="flex items-center gap-2 text-sm text-white/90"
                                                >
                                                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                                                    <span>{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </button>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-10 rounded-3xl border border-white/[0.08] bg-[#101729] p-7 md:p-8"
                >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-2xl">
                            <h3 className="text-2xl font-bold text-white">Built with modern software stacks</h3>
                            <p className="mt-2 text-sm leading-relaxed text-[#a8b2d1] md:text-base">
                                From frontend apps to backend systems and mobile delivery, we assemble
                                the right mix of technologies for speed, scale, and long-term
                                maintainability.
                            </p>
                        </div>

                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition-colors hover:text-fuchsia-300"
                        >
                            Discuss your product idea
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2.5">
                        {modernStack.map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-[#d7def7]"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </Container>

            {activeApp ? (
                <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
                    <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d1324] shadow-2xl">
                        <button
                            type="button"
                            onClick={closeProject}
                            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#0a0e27]/80 text-white transition-colors hover:border-violet-400/35 hover:text-violet-200"
                            aria-label="Close portfolio gallery"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_420px]">
                            <div className="relative min-h-[320px] bg-[#050814]">
                                {activeImages.length > 0 ? (
                                    <>
                                        <img
                                            src={activeImages[activeIndex]}
                                            alt={`${activeApp.name} screenshot ${activeIndex + 1}`}
                                            className="h-full max-h-[70vh] w-full object-contain"
                                        />
                                        {activeImages.length > 1 ? (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={showPrevious}
                                                    className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a0e27]/80 text-white transition-colors hover:border-violet-400/35 hover:text-violet-200"
                                                    aria-label="Previous image"
                                                >
                                                    <ArrowLeft className="h-5 w-5" />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={showNext}
                                                    className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#0a0e27]/80 text-white transition-colors hover:border-violet-400/35 hover:text-violet-200"
                                                    aria-label="Next image"
                                                >
                                                    <ArrowRight className="h-5 w-5" />
                                                </button>
                                            </>
                                        ) : null}
                                    </>
                                ) : (
                                    <div className="flex h-full min-h-[320px] items-center justify-center p-8 text-center text-[#a8b2d1]">
                                        Add screenshots to <code className="mx-1 rounded bg-white/5 px-2 py-1 text-white">assets/{activeApp.folder}</code>
                                        and they will appear here automatically.
                                    </div>
                                )}
                            </div>

                            <div className="flex max-h-[90vh] flex-col overflow-y-auto border-t border-white/10 p-6 lg:border-l lg:border-t-0">
                                <span className="w-fit rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-100">
                                    {activeApp.badge}
                                </span>
                                <h3 className="mt-4 text-3xl font-bold text-white">{activeApp.name}</h3>
                                <p className="mt-1 text-sm text-violet-200/80">{activeApp.category}</p>
                                <p className="mt-4 text-sm leading-relaxed text-[#a8b2d1]">
                                    {activeApp.summary}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {activeApp.stack.map((item) => (
                                        <span
                                            key={`${activeApp.name}-${item}`}
                                            className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-100"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 space-y-2">
                                    {activeApp.highlights.map((point) => (
                                        <div
                                            key={`${activeApp.name}-${point}`}
                                            className="flex items-center gap-2 text-sm text-white/90"
                                        >
                                            <span className="h-2 w-2 rounded-full bg-violet-400" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>

                                {activeImages.length > 1 ? (
                                    <div className="mt-6 grid grid-cols-3 gap-3">
                                        {activeImages.map((image, imageIndex) => (
                                            <button
                                                key={image}
                                                type="button"
                                                onClick={() => setActiveIndex(imageIndex)}
                                                className={`overflow-hidden rounded-2xl border ${
                                                    imageIndex === activeIndex
                                                        ? "border-violet-400/60"
                                                        : "border-white/10"
                                                }`}
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${activeApp.name} thumbnail ${imageIndex + 1}`}
                                                    className="h-20 w-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </section>
    );
};
