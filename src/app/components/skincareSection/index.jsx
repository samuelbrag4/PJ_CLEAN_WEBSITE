import styles from "./skincareSection.module.css";

export default function SkincareSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Cuidados com a Pele</h2>
        <p className={styles.subtitle}>
          Explore dicas e produtos para manter sua pele saudável e radiante. Descubra como criar uma rotina de cuidados que realça sua beleza natural e protege sua pele todos os dias.
        </p>
        <button className={styles.button}>Ver Mais</button>
      </div>
    </section>
  );
}