import styles from "./blogSection.module.css";

export default function BlogSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.butterflies}>
          <div className={`${styles.butterfly} ${styles.butterfly1}`}></div>
          <div className={`${styles.butterfly} ${styles.butterfly2}`}></div>
          <div className={`${styles.butterfly} ${styles.butterfly3}`}></div>
        </div>
        <h2 className={styles.title}>Nosso Blog</h2>
        <p className={styles.subtitle}>
          Descubra um mundo de <strong>artigos</strong>, <strong>vídeos</strong> e <strong>dicas</strong> para cuidar da sua pele e realçar sua beleza natural. Nosso blog é o lugar perfeito para aprender, se inspirar e transformar sua rotina de cuidados.
        </p>
        <button className={styles.button}>Acessar Blog</button>
      </div>
    </section>
  );
}