import Link from "next/link";
import styles from "./makeSection.module.css";

export default function MakeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.butterflies}>
          <div className={`${styles.butterfly} ${styles.butterfly1}`}></div>
          <div className={`${styles.butterfly} ${styles.butterfly2}`}></div>
          <div className={`${styles.butterfly} ${styles.butterfly3}`}></div>
        </div>
        <h2 className={styles.title}>Maquiagem</h2>
        <p className={styles.subtitle}>
          Explore dicas e produtos para realçar sua beleza natural com <strong>maquiagem de qualidade</strong>. Descubra como criar looks incríveis e destacar o que há de melhor em você!
        </p>
        <Link href="/makeup">
          <button className={styles.button}>Ver Mais</button>
        </Link>
      </div>
    </section>
  );
}