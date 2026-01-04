"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

interface ScrollRotateImageProps {
  src: string;
  alt: string;
  className?: string;
  circular?: boolean;
}

export function ScrollRotateImage({
  src,
  alt,
  className,
  circular = false,
}: ScrollRotateImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Rotate from 0 to 360 degrees as user scrolls
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ rotate }}
        className={`relative w-full h-full ${
          circular ? "rounded-full overflow-hidden" : ""
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={circular ? "object-cover" : "object-contain"}
        />
      </motion.div>
    </div>
  );
}
