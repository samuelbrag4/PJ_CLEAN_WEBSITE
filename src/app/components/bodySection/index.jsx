import Link from "next/link";
import styles from "./bodySection.module.css";

export default function BodySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.butterflies}>
          <div className={`${styles.butterfly} ${styles.butterfly1}`}></div>
          <div className={`${styles.butterfly} ${styles.butterfly2}`}></div>
          <div className={`${styles.butterfly} ${styles.butterfly3}`}></div>
        </div>
        <h2 className={styles.title}>Cuidados com o Corpo</h2>
        <p className={styles.subtitle}>
          Descubra como manter seu corpo saudável e radiante com dicas de <strong>hidratação</strong>, <strong>limpeza</strong> e cuidados diários. Transforme sua rotina e sinta-se bem consigo mesmo!
        </p>
        <Link href="/body">
          <button className={styles.button}>Ver Mais</button>
        </Link>
      </div>
    </section>
  );
}