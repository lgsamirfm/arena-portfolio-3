"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

interface HeroImageProps {
  className?: string;
}

// Intrinsic dimensions of public/hero.png and public/heroBeforeHover.png.
// They share the exact same canvas, so the two images stack pixel-perfectly
// (keep these in sync if you ever swap the images).
const WIDTH = 1933;
const HEIGHT = 2560;

export default function HeroImage({ className = "" }: HeroImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

  // Pointer events are coalesced to one update per animation frame so the mask
  // follows the mouse smoothly without re-rendering on every mousemove.
  const pendingPointerRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);

  // The reveal is a circle centered exactly on the pointer. The middle is
  // fully transparent (so the image underneath is completely visible there),
  // then it fades back in over a long smooth gradient toward the edge — no
  // visible rim. Tune these to taste.
  const circleRadius = 100;
  const coreRadius = 95;

  const updateRect = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    setContainerRect(container.getBoundingClientRect());
  }, []);

  // Keep the measured rect in sync with the container's real size (images and
  // fonts can shift layout after first paint).
  useEffect(() => {
    updateRect();
    const container = containerRef.current;
    if (!container) return;
    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(updateRect);
      observer.observe(container);
      return () => observer.disconnect();
    }
    window.addEventListener("resize", updateRect);
    return () => window.removeEventListener("resize", updateRect);
  }, [updateRect]);

  const schedulePointerMove = (clientX: number, clientY: number) => {
    pendingPointerRef.current = { x: clientX, y: clientY };
    if (rafRef.current !== null) return; // a frame is already scheduled
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const pending = pendingPointerRef.current;
      if (!pending || !containerRect) return;
      setMousePos({
        x: pending.x - containerRect.left,
        y: pending.y - containerRect.top,
      });
    });
  };

  useEffect(() => () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
  }, []);

  // Mask for the TOP image (heroBeforeHover.png): fully transparent in the
  // middle of the circle, then a smooth gradient back to opaque toward the
  // edge, so the reveal transitions naturally with no visible rim.
  const topImageMask =
    isHovering && containerRect
      ? `radial-gradient(circle ${circleRadius}px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, transparent ${coreRadius}px, black ${circleRadius}px)`
      : "none";

  // Mask for the BOTTOM image (hero.png): the exact complement of the top mask
  // — fully visible in the middle, smooth gradient to transparent at the edge.
  const bottomImageMask =
    isHovering && containerRect
      ? `radial-gradient(circle ${circleRadius}px at ${mousePos.x}px ${mousePos.y}px, black 0%, black ${coreRadius}px, transparent ${circleRadius}px)`
      : "none";

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={(e) => schedulePointerMove(e.clientX, e.clientY)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={(e) => {
        const touch = e.touches[0];
        schedulePointerMove(touch.clientX, touch.clientY);
        setIsHovering(true);
      }}
      onTouchMove={(e) => {
        const touch = e.touches[0];
        schedulePointerMove(touch.clientX, touch.clientY);
      }}
      onTouchEnd={() => setIsHovering(false)}
      style={{ cursor: isHovering ? "crosshair" : "default", touchAction: "pan-y" }}
    >
      {/* Bottom image (hero.png) — sits in normal flow and sizes the container;
          visible through the gradient reveal while hovering. */}
      <Image
        src="/hero.png"
        alt=""
        width={WIDTH}
        height={HEIGHT}
        priority
        draggable={false}
        sizes="(max-width: 1024px) 70vw, 52vw"
        className="h-auto w-full object-contain object-bottom select-none lg:max-h-[85vh]"
        style={{
          maskImage: bottomImageMask,
          WebkitMaskImage: bottomImageMask,
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.25s ease",
        }}
      />

      {/* Top image (heroBeforeHover.png) — absolutely positioned, covers the
          bottom image completely; the feathered hole follows the pointer. */}
      <div className="absolute inset-0">
        <Image
          src="/heroBeforeHover.png"
          alt="Portrait of LGS Amirfm, full-stack developer"
          width={WIDTH}
          height={HEIGHT}
          priority
          draggable={false}
          sizes="(max-width: 1024px) 70vw, 52vw"
          className="h-auto w-full object-contain object-bottom select-none lg:max-h-[85vh]"
          style={{
            maskImage: topImageMask,
            WebkitMaskImage: topImageMask,
          }}
        />
      </div>
    </div>
  );
}
