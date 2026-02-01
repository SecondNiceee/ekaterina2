"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
  once?: boolean
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade" | "scale"
}

const animations = {
  "fade-up": { hidden: "opacity-0 translate-y-4", visible: "opacity-100 translate-y-0" },
  "fade-down": { hidden: "opacity-0 -translate-y-4", visible: "opacity-100 translate-y-0" },
  "fade-left": { hidden: "opacity-0 translate-x-4", visible: "opacity-100 translate-x-0" },
  "fade-right": { hidden: "opacity-0 -translate-x-4", visible: "opacity-100 translate-x-0" },
  fade: { hidden: "opacity-0", visible: "opacity-100" },
  scale: { hidden: "opacity-0 scale-98", visible: "opacity-100 scale-100" },
}

export function useAnimateOnScroll(threshold = 0.1, once = true) {
  const supportsIO = typeof window !== "undefined" && "IntersectionObserver" in window;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const triggerAnimation = () => {
      setIsVisible(true);
      if (once && ioInstance) {
        ioInstance.unobserve(element);
      }
    };

    let ioInstance: IntersectionObserver | null = null;

    if (supportsIO) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;

      const isVisibleNow =
        rect.top <= windowHeight * (1 - threshold) &&
        rect.bottom >= 0 &&
        rect.left <= windowWidth &&
        rect.right >= 0;

      if (isVisibleNow) {
        triggerAnimation();
        return;
      } else {
        ioInstance = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              triggerAnimation();
            } else if (!once) {
              setIsVisible(false);
            }
          },
          { threshold, rootMargin: "0px 0px -50px 0px" }
        );
        ioInstance.observe(element);
        return () => ioInstance?.disconnect();
      }
    } else {
      triggerAnimation();
    }
  }, [threshold, once, supportsIO]);

  return { ref, isVisible };
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  once = true,
  animation = "fade-up",
}: AnimateOnScrollProps) {
  const supportsIO = typeof window !== "undefined" && "IntersectionObserver" in window;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const triggerAnimation = () => {
      setIsVisible(true);
      if (once && ioInstance) {
        ioInstance.unobserve(element);
      }
    };

    let ioInstance: IntersectionObserver | null = null;

    if (supportsIO) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;

      const isVisibleNow =
        rect.top <= windowHeight * (1 - threshold) &&
        rect.bottom >= 0 &&
        rect.left <= windowWidth &&
        rect.right >= 0;

      if (isVisibleNow) {
        const timer = setTimeout(triggerAnimation, delay);
        return () => clearTimeout(timer);
      } else {
        ioInstance = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              if (delay > 0) {
                setTimeout(triggerAnimation, delay);
              } else {
                triggerAnimation();
              }
            } else if (!once) {
              setIsVisible(false);
            }
          },
          { threshold, rootMargin: "0px 0px -50px 0px" }
        );
        ioInstance.observe(element);
        return () => ioInstance?.disconnect();
      }
    } else {
      const timer = setTimeout(triggerAnimation, delay);
      return () => clearTimeout(timer);
    }
  }, [delay, threshold, once, supportsIO]);

  const { hidden, visible } = animations[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-500 ease-out will-change-auto",
        isVisible ? visible : hidden,
        className
      )}
      style={{ transform: 'translateZ(0)' }}
    >
      {children}
    </div>
  );
}
