import styles from "./bodySection.module.css";

export default function BodySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Cuidados com o Corpo</h2>
        <p className={styles.subtitle}>
          Descubra como manter seu corpo saudável e radiante com dicas de <strong>hidratação</strong>, <strong>limpeza</strong> e cuidados diários. Transforme sua rotina e sinta-se bem consigo mesmo!
        </p>
        <button className={styles.button}>Ver Mais</button>
      </div>
    </section>
  );
}