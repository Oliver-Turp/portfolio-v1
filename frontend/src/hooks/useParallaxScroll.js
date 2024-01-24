"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function useParallaxScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const cardPos1 = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);
  const cardPos2 = useTransform(scrollYProgress, [0, 1], ["75%", "0%"]);
  const cardPos3 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const cardPos4 = useTransform(scrollYProgress, [0, 1], ["125%", "0%"]);

  return { ref, cardPos1, cardPos2, cardPos3, cardPos4 };
}
