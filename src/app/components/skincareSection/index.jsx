import Link from "next/link";
import styles from "./skincareSection.module.css";

export default function SkincareSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.butterflies}>
          <div className={`${styles.butterfly} ${styles.butterfly1}`}></div>
          <div className={`${styles.butterfly} ${styles.butterfly2}`}></div>
          <div className={`${styles.butterfly} ${styles.butterfly3}`}></div>
        </div>
        <h2 className={styles.title}>Cuidados com a Pele</h2>
        <p className={styles.subtitle}>
          Explore dicas e produtos para manter sua pele saudável e radiante.
          Descubra como criar uma rotina de cuidados que realça sua beleza
          natural e protege sua pele todos os dias.
        </p>
        <Link href="/skincare">
          <button className={styles.button}>Ver Mais</button>
        </Link>
      </div>
    </section>
  );
}