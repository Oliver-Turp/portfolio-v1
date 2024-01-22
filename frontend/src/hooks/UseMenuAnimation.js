import { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

export default function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();
  const navDuration = 1.5;
  const linkDelay = 0.13 * navDuration;
  const linkStagger = 0.23 * navDuration;
  const staggerMenuOpen = stagger(linkStagger);
  const staggerMenuClose = stagger(linkDelay);

  useEffect(() => {
    const openSequence = [
      // FIRST: nav moves up
      [
        "nav",
        {
          y: "25%",
        },
        {
          duration: navDuration / 4,
          ease: "easeInOut",
        },
      ],
      // SECOND1: nav fades in && moves up
      [
        "nav",
        {
          y: 0,
          opacity: 1,
        },
        { duration: navDuration / 2, ease: "easeInOut" },
      ],
      // SECOND2: links move right
      ["span a", { x: "-75%" }, { at: "<" }],
      // THIRD: span staggers in
      [
        "span a, span hr",
        {
          opacity: 1,
          x: 0,
          scale: 1,
          filter: "blur(0px)",
        },
        {
          duration: linkStagger,
          delay: staggerMenuOpen,
          ease: "easeInOut",
        },
      ],
    ];

    const closeSequence = [
      // FIRST: spans fade && move left
      [
        "span hr, span a",
        { x: "-100%", scale: 0.3, filter: "blur(20px)" },
        {
          duration: linkStagger * 2,
          ease: "easeInOut",
          delay: staggerMenuClose,
        },
      ],
      // SECOND: nav moves down
      [
        "nav",
        { opacity: 0, y: "100%" },
        {
          duration: navDuration,
          ease: "easeInOut",
          at: +linkDelay,
        },
      ],
    ];

    if (isOpen) {
      animate(openSequence);
      document.body.style.overflow = "hidden";
    } else {
      animate(closeSequence);
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return scope;
}
