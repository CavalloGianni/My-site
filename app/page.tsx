"use client";

import Cursor from "@/components/inverted-cursor";
import { Hero } from "@/components/ui/animated-hero";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/ui/rainbow-button";
import DisplayCards from "@/components/ui/display-cards";
import { Sparkles } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles"


const defaultCards = [
    {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Featured",
    description: "Discover amazing content",
    date: "Just now",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "Popular",
    description: "Trending this week",
    date: "2 days ago",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Sparkles className="size-4 text-blue-300" />,
    title: "New",
    description: "Latest updates and features",
    date: "Today",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

const cards = [
  {
    icon: "AI",
    title: "Assistente Smart",
    description:
      "Automatizza task ripetitivi con agenti che rispondono al contesto in tempo reale.",
  },
  {
    icon: "UX",
    title: "Esperienze Fluide",
    description:
      "Animazioni morbide e micro-interazioni che rendono piacevole ogni tap.",
  },
  {
    icon: "3D",
    title: "Visual Live",
    description:
      "Elementi 3D interattivi e contenuti dinamici per raccontare il prodotto.",
  },
  {
    icon: "API",
    title: "Integrazioni",
    description:
      "Collega CRM, analytics e servizi esterni con pipeline robuste.",
  },
  {
    icon: "Ops",
    title: "DevOps Ready",
    description:
      "Deploy automatizzati, alert intelligenti e rollback istantanei.",
  },
  {
    icon: "Sec",
    title: "Sicurezza",
    description:
      "Policy zero-trust, audit e monitoraggio continuo dei dati sensibili.",
  },
] as const;

export default function Page() {
  return (
    <div>
    
      <div className="block">
        <Hero />
      </div>

      <div className="space-y-16">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Scroll Animations
                </span>
              </h1>
            </>
          }
        >
          <Image
            src="/image.png"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>

        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Scroll Animations
                </span>
              </h1>
            </>
          }
        >
          <Image
            src="/image (1).png"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>

        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Scroll Animations
                </span>
              </h1>
            </>
          }
        >
          <Image
            src="/image.png"
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      <section className="mt-16 px-128 md:px-8">
        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <li key={card.title} className={cn("min-h-[14rem] list-none")}>
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted px-3 py-2 text-sm font-semibold uppercase tracking-wide">
                      {card.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                        {card.title}
                      </h3>
                      <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="py-16 flex justify-center">
        <RainbowButton>Get Unlimited Access</RainbowButton>
      </div>
      <div className="flex min-h-[400px] w-full items-center justify-center py-20">
        <div className="w-full max-w-3xl">
          <DisplayCards cards={defaultCards} />
        </div>
        <div className="w-full max-w-3xl">
          <DisplayCards cards={defaultCards} />
        </div>
      </div>
      <div className="relative"></div>
playCards cards={defaultCards} />
      </div>
      <div className="w-full max-w-3xl">
      <DisplayCards cards={defaultCards} />
      </div>
    </div>
    <div className="relative">
 
    
    </div>

<DisplayCards cards={defaultCards} />
      </div>
    </div>
    <div className="relative">
 
    
    </div>

    </div>
  );
}
