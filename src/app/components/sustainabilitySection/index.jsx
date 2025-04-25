import styles from "./sustainabilitySection.module.css";

export default function SustainabilitySection() {
  return (
    <section className={styles.sustainability}>
      <h2 className={styles.title}>Nosso Compromisso com a Sustentabilidade</h2>
      <p className={styles.text}>
        Trabalhamos para oferecer produtos que respeitam o meio ambiente,
        utilizando embalagens recicláveis e ingredientes naturais.
      </p>
    </section>
  );
}