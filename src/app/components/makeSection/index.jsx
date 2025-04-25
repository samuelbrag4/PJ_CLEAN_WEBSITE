import styles from "./makeSection.module.css";

export default function MakeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Maquiagem</h2>
        <p className={styles.subtitle}>
          Explore dicas e produtos para realçar sua beleza natural com <strong>maquiagem de qualidade</strong>. Descubra como criar looks incríveis e destacar o que há de melhor em você!
        </p>
        <button className={styles.button}>Ver Mais</button>
      </div>
    </section>
  );
}