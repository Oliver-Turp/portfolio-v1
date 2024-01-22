import styles from "./page.module.css";

export const metadata = {
  title: "Template Home Page",
  description: "This is the home page of my nextjs template.",
};


export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Content Here</h1>
      <div className={`evenGrid`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, porro?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, porro?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, porro?
        </p>
      </div>
    </main>
  );
}
