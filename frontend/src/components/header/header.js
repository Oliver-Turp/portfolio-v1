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
    console.log(`currentTime`, currentTime);

    if (isPlaying && currentTime === 53) {
      setIsPlaying(false);
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
        animationData={Hamburger}
        style={{ width: 150, height: 150 }}
        onClick={handleClick}
        onEnterFrame={handleEnterFrame}
        className={styles.hamburger}
      />
      <nav className={styles.navWrap}>
        <Link href={`/`} className={styles.navLink}>
          Link
        </Link>
        <Link href={`/`} className={styles.navLink}>
          Link
        </Link>
        <Link href={`/`} className={styles.navLink}>
          Link
        </Link>
        <Link className={styles.navBtn} href={`/`}>
          Link
        </Link>
      </nav>
    </header>
  );
};

export default Header;
