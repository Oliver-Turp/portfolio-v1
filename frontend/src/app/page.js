import Link from "next/link";
import HomeHoverButtons from "@/components/buttons/HomeHoverButtons";
import { Websites } from "@/routes/allRoutes";
import styles from "./page.module.css";

export const metadata = {
  title: "Oliver Turp | Home",
  description: "Edit this later.",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentWrap}>
        <p className="">👋, my name is Oliver and I am a freelance</p>
        <HomeHoverButtons />
        <p className="">based in Hertfordshire, England.</p>
      </div>
      <div className={styles.buttonWrap}>
        <Link href={Websites} className={`accentBtnHover`}>
          I need a Website
        </Link>
        <Link href={`/`} className={`accentBtnHover`}>
          I need a Discord Bot
        </Link>
      </div>
    </main>
  );
}
