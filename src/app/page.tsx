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
      <div className="grain-overlay" />

      {/* Hero — Tuxedo Cover */}
      <section className="hero-section">
        <Image
          src="/tuxedo.svg"
          alt=""
          width={864}
          height={1004}
          className="hero-image"
          priority
        />

        <div className="hero-text">
          <div className="hero-label">Покана</div>
          <div className="hero-sublabel">за абитуриентски бал</div>
          <div className="hero-name">на Георги Янков</div>
        </div>

        <div className="scroll-hint">
          <div className="scroll-hint-line" />
          <div className="scroll-hint-dot" />
        </div>
      </section>

      {/* Details Section */}
      <section className="details-section" ref={detailsRef}>
        <div className="details-card">
          <Image
            src="/bowtie.svg"
            alt=""
            width={864}
            height={190}
            className="details-bowtie reveal"
          />

          <h1 className="details-title reveal reveal-delay-1">
            Абитуриентски бал
          </h1>
          <p className="details-subtitle reveal reveal-delay-1">
            на Георги Янков
          </p>

          <p className="details-message reveal reveal-delay-2">
            Училището свършва,
            <br />
            но истинското приключение
            <br />
            тепърва започва!
          </p>

          <p className="details-invite reveal reveal-delay-3">
            Каня ви на моя абитуриентски бал, за да
            <br />
            вдигнем наздравица за всичко, което предстои.
          </p>

          <div className="event-info reveal reveal-delay-4">
            <div className="event-info-row">
              <span className="event-info-label">Дата:</span>
              <span className="event-info-value">16 май</span>
            </div>
            <div className="event-info-row">
              <span className="event-info-label">Старт:</span>
              <span className="event-info-value">19:00 ч.</span>
            </div>
            <div className="event-info-row">
              <span className="event-info-label">Локация:</span>
              <span className="event-info-value">
                Ресторант &ldquo;Каменец&rdquo;
              </span>
            </div>
          </div>

          <div className="closing-divider reveal reveal-delay-5" />

          <p className="closing-message reveal reveal-delay-6">
            Ще има музика, спомени и много танци.
            <br />
            Без вас няма да е същото!
          </p>

          <div className="signature reveal reveal-delay-7">Георги Янков</div>
        </div>
      </section>
    </>
  );
}
