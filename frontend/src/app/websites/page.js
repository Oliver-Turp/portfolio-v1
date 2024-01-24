import SideScroller from "@/components/scroller/SideScroller.js";
import ParallaxCards from "@/components/scroller/ParallaxCards";
import {
  HTML5,
  CSS3,
  JS,
  React,
  NextJS,
  Git,
  MongoDB,
  MySQL,
  CPanel,
} from "@/assets/exports";
import styles from "./page.module.css";

const images = [HTML5, CSS3, JS, React, NextJS, Git, MongoDB, MySQL, CPanel];

export default function page() {
  return (
    <main className={styles.webWrap}>
      <section className={styles.heroWrap}>
        <h1>Catchy heading</h1>
        <a href="#" className={`tertiaryBtnHover`}>
          click me!
        </a>
        <SideScroller images={images} data-speed="fast" />
        <ParallaxCards />
      </section>
    </main>
  );
}

export const metadata = {
  title: "Oliver Turp | Websites",
  description: "You need a website? Well see what I can do!",
};
