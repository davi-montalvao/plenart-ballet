"use client";

import { useState, useEffect } from "react";
import Container from "./Container";

export default function FernandaCarousel() {
  const images = Array.from({ length: 11 }, (_, i) => `/images/galery/fe${i + 1}.png`);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((s) => (s + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);

  function prev() {
    setIndex((s) => (s - 1 + images.length) % images.length);
  }

  function next() {
    setIndex((s) => (s + 1) % images.length);
  }

  return (
    <div style={{ width: "100%" }}>
      <Container $wide>
        <div style={{ position: "relative", width: "100%", borderRadius: 12, overflow: "hidden" }}>
          <img
            src={images[index]}
            alt={`Fernanda Abreu ${index + 1}`}
            style={{ width: "100%", height: "480px", objectFit: "cover", display: "block" }}
            loading="lazy"
          />

          <button
            aria-label="Anterior"
            onClick={prev}
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              padding: "10px 12px",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          <button
            aria-label="Próxima"
            onClick={next}
            style={{
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              border: "none",
              padding: "10px 12px",
              borderRadius: 8,
              cursor: "pointer",
            }}
          >
            ›
          </button>

          <div style={{ position: "absolute", left: 0, right: 0, bottom: 12, display: "flex", justifyContent: "center", gap: 8 }}>
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para ${i + 1}`}
                onClick={() => setIndex(i)}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  border: "none",
                  background: i === index ? "#333" : "rgba(255,255,255,0.7)",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
