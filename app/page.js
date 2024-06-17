import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>


      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="CyberSecurTA"
          width={283}
          height={228}
          priority
        />
      </div>
      <div className={styles.center}>
      <p className={styles.title1}>Coming Summer 2024!!  See You Soon!</p>
      </div>

      
    </main>
  );
}
