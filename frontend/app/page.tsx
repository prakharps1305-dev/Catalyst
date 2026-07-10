import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import Features from "@/components/landing/Features";
import Agents from "@/components/landing/Agents";
import Pricing from "@/components/landing/Pricing";
import Flywheel from "@/components/landing/Flywheel";
import Comparison from "@/components/landing/Comparison";
import Freelancers from "@/components/landing/Freelancers";
import FinalCTA from "@/components/landing/FinalCTA";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main className="text-cream bg-grain min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Reveal><Problem /></Reveal>
      <Reveal><Features /></Reveal>
      <Reveal><Agents /></Reveal>
      <Reveal><Pricing /></Reveal>
      <Reveal><Flywheel /></Reveal>
      <Reveal><Comparison /></Reveal>
      <Reveal><Freelancers /></Reveal>
      <Reveal><FinalCTA /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Footer />
    </main>
  );
}
