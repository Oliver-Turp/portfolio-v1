"use client";

import { useRef, useState } from "react";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import {
  LogoLeaves as Logo,
  LogoTreeCPU,
  LogoTreeCyberPunk,
  LogoTreeMan,
  LogoTreePower,
  Hamburger,
  Hamburger_Test,
} from "@/assets/exports";
import styles from "./header.module.css";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const burgerRef = useRef();

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
    console.log(`currentTime`, currentTime);
    console.log(`isPlaying`, isPlaying);
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
      <Lottie
        lottieRef={burgerRef}
        loop={false}
        autoplay={false}
        animationData={Hamburger}
        onClick={handleClick}
        onEnterFrame={handleEnterFrame}
        className={styles.hamburger}
      />
      <nav
        className={`${styles.navWrap} ${
          isOpen ? styles.burgerOpen : styles.burgerClosed
        }`}
      >
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
        <section className={styles.mobContact}>
          <h3>Oliver Turp</h3>
          <section>
            <p>email here</p>
            <p>more text</p>
          </section>
          <Link className={styles.mobBtn} href={`/`}>
            Let's Start A Project
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;