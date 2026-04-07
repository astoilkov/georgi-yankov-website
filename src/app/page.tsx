"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const detailsRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    const elements = detailsRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => {
      observer.observe(el);
    });

    if (portraitRef.current) {
      observer.observe(portraitRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="grain-overlay fixed inset-0 pointer-events-none z-100 opacity-[0.03] bg-repeat bg-size-[256px]" />

      {/* Hero — Tuxedo Cover */}
      <section className="relative w-full h-dvh bg-foreground flex items-end justify-start overflow-hidden snap-start">
        <Image
          src="/tuxedo.svg"
          alt=""
          width={369}
          height={455}
          className="absolute bottom-0 -left-[40%] sm:left-1/2 sm:-translate-x-1/2 w-auto h-full max-w-none object-cover animate-[heroImageReveal_1.2s_ease-out_0.3s_both]"
          priority
        />

        <div className="relative z-10 text-left p-6 animate-[heroTextUp_1s_ease-out_0.8s_both]">
          <div className="text-[clamp(2rem,5vw,3.2rem)] text-white tracking-[0.15em] uppercase leading-[1.1] mb-1">
            Покана
          </div>
          <div className="text-[clamp(0.85rem,2vw,1.1rem)] text-white/70 tracking-[0.3em] uppercase mb-1.5">
            за абитуриентски бал
          </div>
          <div className="text-[clamp(1rem,2.5vw,1.3rem)] text-(--color-gold) tracking-[0.2em] uppercase">
            на Георги Янков
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section
        className="relative w-full min-h-dvh bg-background flex items-center justify-center py-[75px] px-5 sm:py-20 sm:px-6 snap-start"
        ref={detailsRef}
      >
        <div className="max-w-[520px] w-full text-center px-4 flex flex-col items-center gap-6">
          <Image
            src="/bowtie.svg"
            alt=""
            width={864}
            height={190}
            className="absolute top-4 right-4 w-[100px] h-auto object-contain sm:relative sm:top-auto sm:right-auto sm:w-[180px] sm:mx-auto"
          />

          <div>
            <h1 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-[0.12em] uppercase text-[var(--color-ink)] reveal reveal-delay-1">
              Абитуриентски бал
            </h1>
            <p className="text-[clamp(0.9rem,2vw,1.1rem)] font-normal tracking-[0.25em] uppercase text-[var(--color-warm-gray)] reveal reveal-delay-1">
              на Георги Янков
            </p>
          </div>

          <p className="text-[clamp(1.05rem,2.5vw,1.25rem)] font-normal leading-[1.8] text-[#444] italic reveal reveal-delay-2">
            Училището свършва,
            <br />
            но истинското приключение
            <br />
            тепърва започва!
          </p>

          <p className="text-[clamp(1rem,2.2vw,1.15rem)] font-normal leading-[1.8] text-[#555] reveal reveal-delay-3">
            Каня ви на моя абитуриентски бал, за да
            <br />
            вдигнем наздравица за всичко, което предстои.
          </p>

          <div className="flex flex-col gap-2.5 reveal reveal-delay-4">
            <div className="flex justify-center gap-4 text-[clamp(1rem,2vw,1.15rem)]">
              <span className="font-semibold text-[var(--color-ink)] text-right min-w-[100px] tracking-[0.05em]">
                Дата:
              </span>
              <span className="font-normal text-[#555] text-left min-w-[160px]">
                16 май
              </span>
            </div>
            <div className="flex justify-center gap-4 text-[clamp(1rem,2vw,1.15rem)]">
              <span className="font-semibold text-[var(--color-ink)] text-right min-w-[100px] tracking-[0.05em]">
                Старт:
              </span>
              <span className="font-normal text-[#555] text-left min-w-[160px]">
                19:00 ч.
              </span>
            </div>
            <div className="flex justify-center gap-4 text-[clamp(1rem,2vw,1.15rem)]">
              <span className="font-semibold text-[var(--color-ink)] text-right min-w-[100px] tracking-[0.05em]">
                Локация:
              </span>
              <span className="font-normal text-[#555] text-left min-w-[160px]">
                Ресторант &ldquo;Каменец&rdquo;
              </span>
            </div>
          </div>

          <div className="w-10 h-px bg-[var(--color-gold)] mx-auto reveal reveal-delay-5" />

          <p className="text-[clamp(1rem,2.2vw,1.1rem)] font-normal leading-[1.9] text-[var(--color-gold)] italic reveal reveal-delay-6">
            Ще има музика, спомени и много танци.
            <br />
            Без вас няма да е същото!
          </p>

          <div className="text-[clamp(1.3rem,3vw,1.6rem)] font-medium italic text-[var(--color-ink)] tracking-[0.05em] reveal reveal-delay-7">
            Георги Янков
          </div>
        </div>
      </section>

      {/* Portrait — The Man of the Hour */}
      <section
        className="group relative w-full h-dvh bg-[#0a0608] flex items-center justify-center overflow-hidden snap-start"
        ref={portraitRef}
      >
        {/* Ambient red glow to echo the curtain */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(140,30,30,0.15)_0%,_transparent_70%)]" />

        <div className="relative z-10 flex flex-col items-center gap-6 opacity-0 scale-95 transition-all duration-1000 ease-out group-[.visible]:opacity-100 group-[.visible]:scale-100">
          {/* Gold frame */}
          <div className="relative p-[3px] bg-gradient-to-b from-[var(--color-gold)] via-[var(--color-gold-light)] to-[var(--color-gold)]">
            <div className="relative overflow-hidden">
              <Image
                src="/georgi.jpg"
                alt="Георги Янков"
                width={440}
                height={590}
                className="block w-[min(75vw,440px)] h-auto object-cover"
              />
              {/* Bottom vignette */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0608]/60 to-transparent" />
            </div>
          </div>

          <div className="text-center">
            <p className="text-[clamp(0.75rem,1.6vw,0.9rem)] tracking-[0.35em] uppercase text-white/40 mt-1 opacity-0 translate-y-3 transition-all duration-700 ease-out delay-700 group-[.visible]:opacity-100 group-[.visible]:translate-y-0">
              Випуск 2026
            </p>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-[var(--color-gold)]/30" />
        <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[var(--color-gold)]/30" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[var(--color-gold)]/30" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-[var(--color-gold)]/30" />
      </section>
    </>
  );
}
