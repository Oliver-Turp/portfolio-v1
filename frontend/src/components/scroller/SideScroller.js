"use client";

import { useEffect, useRef } from "react";
import styles from "./SideScroller.module.css";

const SideScroller = ({ images }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scroller);
    }
  }, []);

  const addAnimation = (scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(`.${styles.scrollerInner}`);
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  };

  return (
    <div className={styles.scrollerWrap} data-speed="fast" ref={scrollerRef}>
      <ul className={styles.scrollerInner}>
        {images.map((image, index) => (
          <li key={index}>
            <img src={image.src} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideScroller;
