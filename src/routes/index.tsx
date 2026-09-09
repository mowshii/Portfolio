import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Certificates } from "@/components/Certificates";
import { ConnectBar } from "@/components/ConnectBar";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Exploring } from "@/components/Exploring";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteLayout } from "@/components/SiteLayout";
import { Skills } from "@/components/Skills";
import { Ticker } from "@/components/Ticker";
import { Updates } from "@/components/Updates";
import { WhatIBuild } from "@/components/WhatIBuild";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <ConnectBar />
      <Ticker />
      <About />
      <WhatIBuild />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Exploring />
      <Updates />
      <Certificates />
      <Contact />
    </SiteLayout>
  );
}
