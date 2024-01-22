"use client";

import { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import { useAnimate, stagger, easeInOut } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LogoLeaves as Logo, Hamburger } from "@/assets/exports";
import styles from "./header.module.css";

function useMenuAnimation(isOpen) {
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
      ["span a", { x: "-50%" }, { at: "<" }],
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
      // animate(openSequence);
      animate(openSequence);
    } else {
      animate(closeSequence);
    }
  }, [isOpen]);

  return scope;
}

const Header = () => {
  const burgerRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const handleClick = () => {
    const currentFrame = Math.round(
      burgerRef.current.animationItem.currentFrame
    );

    if (currentFrame === 0) {
      burgerRef.current.play();
    } else if (currentFrame === 35) {
      burgerRef.current.goToAndPlay(48, true);
    } else if (currentFrame === 77) {
      burgerRef.current.goToAndPlay(1, true);
    }
  };

  const handleEnterFrame = (e) => {
    setCurrentTime(e.currentTime);
    const currentTime = Math.round(e.currentTime);
    // console.log(`currentTime`, currentTime);
    // console.log(`isPlaying`, isPlaying);
    console.log(`isOpen`, isOpen);

    // FIRST CLICK SETPLAYING AND OPEN TO TRUE
    if (currentTime == 1) {
      setIsPlaying(true);
      setIsOpen(true);
      // PAUSE AT FRAME 35 && SET PLAYING TO FALSE
    } else if (currentTime == 35) {
      burgerRef.current.pause();
      // SECOND CLICK @ FRAME 48 SETPLAYING TO TRUE AND OPEN TO FALSE
    } else if (currentTime == 48) {
      setIsPlaying(true);
      setIsOpen(false);
      // SET PLAYING TO FALSE @ FRAME 77
    } else if (currentTime == 77) {
      setIsPlaying(false);
    }
  };

  return (
    <header className={styles.headerWrap}>
      <div className={styles.logoWrap}>
        <Image src={Logo} alt="logo" />
      </div>
      <nav className={styles.desktopNav}>
        <Link href={`/`} className={styles.navLink}>
          Websites
        </Link>
        <Link href={`/`} className={styles.navLink}>
          Discord Bots
        </Link>
        <Link href={`/`} className={styles.navLink}>
          About
        </Link>
        <Link className={styles.navBtn} href={`/`}>
          Contact
        </Link>
      </nav>
      <div className={styles.mobileNav} ref={scope}>
        <Lottie
          lottieRef={burgerRef}
          loop={false}
          autoplay={false}
          animationData={Hamburger}
          onClick={handleClick}
          onEnterFrame={handleEnterFrame}
          className={styles.hamburger}
          priority="true"
        />
        <nav className={styles.navWrap} animate={isOpen ? "open" : "closed"}>
          <span>
            <hr className={styles.navLine} />
            <Link href={`/`} className={styles.navLink}>
              Websites
            </Link>
          </span>
          <span>
            <hr className={styles.navLine} />
            <Link href={`/`} className={styles.navLink}>
              Discord Bots
            </Link>
            <hr className={styles.navLine} />
          </span>
          <span>
            <Link href={`/`} className={styles.navLink}>
              About
            </Link>
            <hr className={styles.navLine} />
          </span>
          <section className={styles.mobContact}>
            <h3>something here</h3>
            <section>
              <p>email here</p>
              <p>more text</p>
            </section>
            <Link className={styles.mobBtn} href={`/`}>
              Let's Start A Project
            </Link>
          </section>
        </nav>
      </div>
    </header>
  );
};

export default Header;
