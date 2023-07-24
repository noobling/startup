import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a href="#">
          Billionaire by thirty&nbsp;
          <code className={styles.code}>BBT</code>
        </a>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <h2>🤤DroolingFace</h2>
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h2 className={styles.subtitle}>Achieve the impossible 🚀</h2>
      </div>

      <div className={styles.grid}>
        <a
          href="https://magenta-jeep-dff.notion.site/Public-Blog-b64ccae0a5d3489db7b4da016e8d5578?pvs=4"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Blog <span>-&gt;</span>
          </h2>
          <p>Read about Software Engineering and Career</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Consulting <span>-&gt;</span>
          </h2>
          <p>How we can revolutionise your business through software</p>
        </a>

        <a
          href="https://www.davidneo.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Apps <span>-&gt;</span>
          </h2>
          <p>See our world breaking apps that transform businesses and lives</p>
        </a>

        <a
          href="https://www.davidneo.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Podcast <span>-&gt;</span>
          </h2>
          <p>Game changing talks that will change your perspective on life</p>
        </a>
      </div>
    </main>
  );
}
