"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar } from "@/assets/exports";
import useMouseMove from "@/hooks/useMouseMove";
import { Websites } from "@/routes/allRoutes";
import styles from "./HomeHoverButtons.module.css";

export default function HomeHoverButtons() {
  const [hovered, setHovered] = useState(false);
  const imageRef = useMouseMove();

  return (
    <div className={styles.hoverWrap}>
      <h1>
        <section className={styles.textWrap}>
          <Link
            href={Websites}
            data-hovered={!hovered}
            data-text="Web Designer"
          >
            Web Designer
          </Link>
          <p>Web Designer</p>
        </section>
        <section className={styles.textWrap}>
          <Link
            href={`/`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            data-hovered={hovered}
            data-text="& Developer"
          >
            & Developer
          </Link>
          <p>& Developer</p>
        </section>
      </h1>
      <Image
        priority={true}
        src={Avatar}
        className={styles.hoverImage}
        data-hovered={hovered}
        ref={imageRef}
        alt="AI mock up of what Oliver Turp looks like"
      />
    </div>
  );
}
