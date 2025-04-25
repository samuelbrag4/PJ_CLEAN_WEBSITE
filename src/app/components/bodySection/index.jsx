import styles from "./bodySection.module.css";

export default function BodySection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Corpo</h2>
      <p className={styles.subtitle}>
        Explore dicas e produtos para manter sua pele saudável e radiante.
      </p>
      <button className={styles.button}>Ver Mais</button>
    </section>
  );
}