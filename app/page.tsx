"use client";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { IndustriesWeServe } from "@/components/industries-we-serve";
import { OurServices } from "@/components/our-services";
import { MergersRestructuring } from "@/components/mergers-restructuring";
import { ProjectConsulting } from "@/components/project-consulting";
import { GreenEnergySolutions } from "@/components/green-energy-solutions";
import { SOPSection } from "@/components/sop-section";
import { OurExperts } from "@/components/our-experts";
import { ContactUs } from "@/components/contact-us";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <WhyChooseUs />
        <section id="industries">
          <IndustriesWeServe />
        </section>
        <section id="services">
          <OurServices />
        </section>
        <MergersRestructuring />
        <ProjectConsulting />
        <GreenEnergySolutions />
        <SOPSection />
        <section id="about">
          <OurExperts />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </main>
      <Footer />
    </div>
  );
}
