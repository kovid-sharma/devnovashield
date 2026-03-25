import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Code2 } from "lucide-react";

const footerLinks = {
    services: [
        { name: "Discovery & PRDs", href: "#summary" },
        { name: "MVP build", href: "#summary" },
        { name: "Platform & APIs", href: "#summary" },
        { name: "Developer experience", href: "#summary" },
    ],
    company: [
        { name: "Live dashboard", href: "#dashboard" },
        { name: "Use cases", href: "#use-cases" },
        { name: "Client stories", href: "#testimonials" },
        { name: "Why dev.nova", href: "#why-choose" },
        { name: "Contact", href: "#contact" },
    ],
    legal: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
    ],
};

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-auto border-t border-violet-500/15 bg-[#060913]">
            <Container className="max-w-[1400px] py-14 md:py-16">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3">
                            <Code2 className="h-7 w-7 text-violet-300" aria-hidden />
                            <span className="text-xl font-extrabold text-white">
                                dev<span className="text-violet-300">.nova</span>
                            </span>
                        </Link>
                        <p className="max-w-sm text-sm leading-relaxed text-[#a8b2d1]">
                            A NovaShield child application focused on development products and idea building —
                            from first sketch to production-ready software.
                        </p>
                        <div className="space-y-2 text-sm text-[#a8b2d1]">
                            <div className="flex items-center gap-2">
                                <span className="text-violet-400">✉</span>
                                <a
                                    href="mailto:contact@novashield.in"
                                    className="hover:text-violet-200 transition-colors"
                                >
                                    contact@novashield.in
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-violet-400">☎</span>
                                <a href="tel:+918308628739" className="hover:text-violet-200 transition-colors">
                                    +91 8308628739
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-violet-400">⌖</span>
                                <span>Wakad, Pune, India</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Services</h4>
                        <ul className="space-y-2 text-sm text-[#a8b2d1]">
                            {footerLinks.services.map((l) => (
                                <li key={l.name}>
                                    <Link href={l.href} className="hover:text-violet-200 transition-colors">
                                        {l.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Explore</h4>
                        <ul className="space-y-2 text-sm text-[#a8b2d1]">
                            {footerLinks.company.map((l) => (
                                <li key={l.name}>
                                    <Link href={l.href} className="hover:text-violet-200 transition-colors">
                                        {l.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Legal</h4>
                        <ul className="space-y-2 text-sm text-[#a8b2d1]">
                            {footerLinks.legal.map((l) => (
                                <li key={l.name}>
                                    <Link href={l.href} className="hover:text-violet-200 transition-colors">
                                        {l.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-xs text-[#6b7280] leading-relaxed">
                            Parent:{" "}
                            <a
                                href="https://novashield.in"
                                className="text-violet-400 hover:text-violet-300 underline-offset-2 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                NovaShield Cybertech LLP
                            </a>
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-violet-500/10 pt-8 md:flex-row">
                    <p className="text-sm text-[#6b7280]">
                        © {year} dev.nova · NovaShield Cybertech LLP. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};
