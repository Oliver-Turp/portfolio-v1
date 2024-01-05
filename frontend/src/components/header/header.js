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
} from "@/assets/exports";
import styles from "./header.module.css";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const burgerRef = useRef();
  //console.log(`isPlaying`, isPlaying);

  const handleClick = () => {
    const currentFrame = Math.round(
      burgerRef.current.animationItem.currentFrame
    );
    console.log(`currentFrame`, currentFrame);

    if (currentFrame === 0) {
      setIsPlaying(true);
      burgerRef.current.play();
    } else if (currentFrame === 53) {
      setIsPlaying(false);
      burgerRef.current.play();
    } else if (currentFrame > 53) {
      burgerRef.current.goToAndPlay(0, true);
      setIsPlaying(true);
    }
  };

  const handleEnterFrame = (e) => {
    setCurrentTime(e.currentTime);
    const currentTime = Math.round(e.currentTime);
    // console.log(`currentTime`, currentTime);

    if (isPlaying && currentTime === 53) {
      burgerRef.current.pause();
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
        initialSegment={[13, 77]}
        animationData={Hamburger}
        onClick={handleClick}
        onEnterFrame={handleEnterFrame}
        className={styles.hamburger}
      />
      <nav
        className={`${styles.navWrap} ${
          isPlaying ? styles.burgerOpen : styles.burgerClosed
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
