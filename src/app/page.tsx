"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const detailsRef = useRef<HTMLDivElement>(null);

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
          className="absolute bottom-0 -left-50 sm:left-1/2 sm:-translate-x-1/2 w-auto h-full max-w-none object-cover animate-[heroImageReveal_1.2s_ease-out_0.3s_both]"
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
        className="relative w-full min-h-dvh bg-background flex items-center justify-center py-[60px] px-5 sm:py-20 sm:px-6 snap-start"
        ref={detailsRef}
      >
        <div className="max-w-[520px] w-full text-center px-4 flex flex-col items-center gap-4">
          <Image
            src="/bowtie.svg"
            alt=""
            width={864}
            height={190}
            className="w-[180px] h-auto mx-auto mb-12 object-contain right-0 absolute top-0"
          />

          <h1 className="text-[clamp(1.6rem,4vw,2.2rem)] font-bold tracking-[0.12em] uppercase text-[var(--color-ink)] mb-2 reveal reveal-delay-1">
            Абитуриентски бал
          </h1>
          <p className="text-[clamp(0.9rem,2vw,1.1rem)] font-normal tracking-[0.25em] uppercase text-[var(--color-warm-gray)] mb-12 reveal reveal-delay-1">
            на Георги Янков
          </p>

          <p className="text-[clamp(1.05rem,2.5vw,1.25rem)] font-normal leading-[1.8] text-[#444] mb-5 italic reveal reveal-delay-2">
            Училището свършва,
            <br />
            но истинското приключение
            <br />
            тепърва започва!
          </p>

          <p className="text-[clamp(1rem,2.2vw,1.15rem)] font-normal leading-[1.8] text-[#555] mb-12 reveal reveal-delay-3">
            Каня ви на моя абитуриентски бал, за да
            <br />
            вдигнем наздравица за всичко, което предстои.
          </p>

          <div className="flex flex-col gap-2.5 mb-12 reveal reveal-delay-4">
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

          <div className="w-10 h-px bg-[var(--color-gold)] mx-auto mb-10 reveal reveal-delay-5" />

          <p className="text-[clamp(1rem,2.2vw,1.1rem)] font-normal leading-[1.9] text-[var(--color-gold)] italic mb-10 reveal reveal-delay-6">
            Ще има музика, спомени и много танци.
            <br />
            Без вас няма да е същото!
          </p>

          <div className="text-[clamp(1.3rem,3vw,1.6rem)] font-medium italic text-[var(--color-ink)] tracking-[0.05em] reveal reveal-delay-7">
            Георги Янков
          </div>
        </div>
      </section>
    </>
  );
}
