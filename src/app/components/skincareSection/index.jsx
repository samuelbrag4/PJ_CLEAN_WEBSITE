import styles from "./skincareSection.module.css";

export default function SkincareSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Cuidados com a Pele</h2>
      <p className={styles.subtitle}>
        Explore dicas e produtos para manter sua pele saudável e radiante.
      </p>
      <button className={styles.button}>Ver Mais</button>
    </section>
  );
}