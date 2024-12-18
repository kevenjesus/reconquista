import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <p>Com carinho,</p>
      <p>seu nenem, Keven &hearts;</p>
      <div className={styles.videoContainer}>
        <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/dTuaKP61Ib8?si=6qc-lgzgs8-b29RF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  );
}
