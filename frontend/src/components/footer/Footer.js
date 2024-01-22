import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  //code
  return (
    <footer className={styles.footerWrap}>
      <ul>
        <li>
          <Link href="/">Link</Link>
        </li>
        <li>
          <Link href="/">Link</Link>
        </li>
        <li>
          <Link href="/">Link</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
