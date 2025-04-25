import styles from "./blogSection.module.css";

export default function BlogSection() {
  return (
    <section className={styles.blog}>
      <h2 className={styles.title}>Nosso Blog</h2>
      <p className={styles.subtitle}>
        Descubra dicas incríveis de beleza, cuidados com a pele e muito mais.
      </p>
      <button className={styles.button}>Acessar Blog</button>
    </section>
  );
}