import Image from "next/image";
import Link from "next/link";
import {
  LogoLeaves as Logo,
  LogoTreeCPU,
  LogoTreeCyberPunk,
  LogoTreeMan,
  LogoTreePower,
} from "@/assets/images/exports";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.headerWrap}>
      <div className={styles.logoWrap}>
        <Image src={Logo} alt="logo" />
      </div>
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
