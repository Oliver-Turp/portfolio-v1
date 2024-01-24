"use client";

import { motion } from "framer-motion";
import useParallaxScroll from "@/hooks/useParallaxScroll";

import styles from "./ParallaxCards.module.css";

export default function ParallaxCards() {
  const { ref, cardPos1, cardPos2, cardPos3, cardPos4 } = useParallaxScroll();
  return (
    <div className={styles.cardsWrap} ref={ref}>
      <motion.img
        src="https://source.unsplash.com/random/400x600?1"
        alt="random unsplash image"
        style={{ y: cardPos1 }}
      />
      <motion.img
        src="https://source.unsplash.com/random/400x600?2"
        alt="random unsplash image"
        style={{ y: cardPos2 }}
      />
      <motion.img
        src="https://source.unsplash.com/random/400x600?3"
        alt="random unsplash image"
        style={{ y: cardPos3 }}
      />
      <motion.img
        src="https://source.unsplash.com/random/400x600?4"
        alt="random unsplash image"
        style={{ y: cardPos4 }}
      />
      <motion.img
        src="https://source.unsplash.com/random/400x600?5"
        alt="random unsplash image"
        style={{ y: cardPos3 }}
      />
      <motion.img
        src="https://source.unsplash.com/random/400x600?6"
        alt="random unsplash image"
        style={{ y: cardPos2 }}
      />
      <motion.img
        src="https://source.unsplash.com/random/400x600?7"
        alt="random unsplash image"
        style={{ y: cardPos1 }}
      />
    </div>
  );
}
