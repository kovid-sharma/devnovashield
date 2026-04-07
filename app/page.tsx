import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { AiFirstApproach } from "@/components/sections/AiFirstApproach";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { DevPipelineDashboard } from "@/components/sections/DevPipelineDashboard";
import { Stats } from "@/components/sections/Stats";
import { UseCases } from "@/components/sections/UseCases";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
    return (
        <main className="min-h-screen overflow-x-hidden selection:bg-violet-500/30 bg-[#0a0e27] text-white">
            <Navbar />

            <div className="flex w-full flex-col">
                <Hero />
                <AiFirstApproach />
                <Services />
                <Portfolio />
                <DevPipelineDashboard />
                <Stats />
                <UseCases />
                <Testimonials />
                <WhyChoose />
                <Contact />
            </div>

            <Footer />
        </main>
    );
}
