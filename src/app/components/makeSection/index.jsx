import styles from "./makeSection.module.css";

export default function MakeSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Maquiagem</h2>
      <p className={styles.subtitle}>
        Explore dicas e produtos para realçar sua beleza natural com
        maquiagem de qualidade.
      </p>
      <button className={styles.button}>Ver Mais</button>
    </section>
  );
}