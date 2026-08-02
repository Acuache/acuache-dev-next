"use client";

import { useEffect, useRef } from "react";

const R180 = Math.PI;
const R90 = Math.PI / 2;
const R15 = Math.PI / 12;

const COLOR = "#88888825";
const MIN_BRANCH = 50;
const LEN = 5;
/** Tope de segmentos para que el dibujo estático no bloquee el hilo principal */
const MAX_SEGMENTS = 25000;

const randomMiddle = () => Math.random() * 0.6 + 0.2;

function polar2cart(x: number, y: number, r: number, theta: number): [number, number] {
  return [x + r * Math.cos(theta), y + r * Math.sin(theta)];
}

export function BackgroundArt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const size = { width: window.innerWidth, height: window.innerHeight };
    let resizeTimeout: ReturnType<typeof setTimeout> | undefined;

    const draw = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpi = window.devicePixelRatio || 1;
      canvas.style.width = `${size.width}px`;
      canvas.style.height = `${size.height}px`;
      canvas.width = dpi * size.width;
      canvas.height = dpi * size.height;
      ctx.scale(dpi, dpi);
      ctx.clearRect(0, 0, size.width, size.height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = COLOR;

      const pending: Array<() => void> = [];

      const step = (x: number, y: number, rad: number, counter = { value: 0 }) => {
        const length = Math.random() * LEN;
        counter.value += 1;

        const [nx, ny] = polar2cart(x, y, length, rad);

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        const rad1 = rad + Math.random() * R15;
        const rad2 = rad - Math.random() * R15;

        if (
          nx < -100 ||
          nx > size.width + 100 ||
          ny < -100 ||
          ny > size.height + 100
        )
          return;

        const rate = counter.value <= MIN_BRANCH ? 0.8 : 0.5;

        if (Math.random() < rate) pending.push(() => step(nx, ny, rad1, counter));
        if (Math.random() < rate) pending.push(() => step(nx, ny, rad2, counter));
      };

      pending.push(
        () => step(randomMiddle() * size.width, -5, R90),
        () => step(randomMiddle() * size.width, size.height + 5, -R90),
        () => step(-5, randomMiddle() * size.height, 0),
        () => step(size.width + 5, randomMiddle() * size.height, R180)
      );
      if (size.width < 500) pending.length = 2;

      let segments = 0;
      while (pending.length && segments < MAX_SEGMENTS) {
        segments += 1;
        pending.pop()!();
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        size.width = window.innerWidth;
        size.height = window.innerHeight;
        draw();
      }, 200);
    };

    draw();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 print:hidden -z-1"
      style={{
        maskImage: "radial-gradient(circle, transparent, black)",
        WebkitMaskImage: "radial-gradient(circle, transparent, black)",
      }}
    >
      <canvas ref={canvasRef} width={400} height={400} />
    </div>
  );
}
