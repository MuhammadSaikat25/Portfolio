"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface Dot {
  x: number;
  y: number;
  size: number;
  color: string;
}

const Text: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const arrayColors: string[] = ["#eee", "#545454", "#596d91", "#bb5a68", "#696541"];

  const drawDots = useCallback((ctx: CanvasRenderingContext2D) => {
    dotsRef.current.forEach((dot) => {
      ctx.fillStyle = dot.color;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      ctx.fill();
    });
  }, []);

  const initializeDots = useCallback(
    (canvasWidth: number, canvasHeight: number) => {
      dotsRef.current = [];
      for (let index = 0; index < 50; index++) {
        dotsRef.current.push({
          x: Math.floor(Math.random() * canvasWidth),
          y: Math.floor(Math.random() * canvasHeight),
          size: Math.random() * 3 + 5,
          color: arrayColors[Math.floor(Math.random() * arrayColors.length)],
        });
      }
    },
    [arrayColors]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;
    if (!canvas || !banner) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
      initializeDots(canvas.width, canvas.height);
      clearAndRedrawCanvas();
    };

    const clearAndRedrawCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots(ctx);
    };

    const handleMouseMove = (event: MouseEvent) => {
      setIsAnimating(true);
      clearAndRedrawCanvas();

      const rect = banner.getBoundingClientRect();
      const mouse = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      dotsRef.current.forEach((dot) => {
        let distance = Math.sqrt(
          (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
        );
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = () => {
      setIsAnimating(false);
      clearAndRedrawCanvas();
    };

    resizeCanvas();
    banner.addEventListener("mousemove", handleMouseMove);
    banner.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      banner.removeEventListener("mousemove", handleMouseMove);
      banner.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [drawDots, initializeDots]);

  return (
    <div
      ref={bannerRef}
      className={`h-[400px] relative text-center bg-background transition-colors duration-300 ${
        isAnimating ? "bg-secondary" : ""
      }`}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
      <div className="text-left">
        <h1 className="text-3xl">
          <span className=""> Hello,</span>
          <br /> This is <span className="text-[#16F2B3]">Muhammad Saikat</span> , I'm <br /> frontend focus a Mern
          Stack <br /> Developer.
        </h1>
      </div>
    </div>
  );
};

export default Text;
