import styles from "./category_card.module.css";
import Link from "next/link";

const CategoryCard = () => {
  return (
    <section className={styles.categoria}>
      <div className={styles.degrade}></div>
      <nav className={styles.cards}>
        <Link href="/skincare" className={styles.navLink}>
          <div className={`${styles.card} ${styles.skincareCard}`}>
            <div className={styles.titulo}>
              <h1 className={styles.tituloCard}>Página de Skincare</h1>
              <h2 className={styles.numberCard}>1</h2>
            </div>
            <p className={styles.cardTexto}>
              O que não pode faltar no skincare? Os passos básicos de uma rotina de skincare simples são: higienização, tonificação, hidratação e proteção solar.
            </p>
            <button className={styles.cardButton}>Clique para ir à página</button>
          </div>
        </Link>
        <Link href="/body" className={styles.navLink}>
          <div className={`${styles.card} ${styles.bodyCard}`}>
            <div className={styles.titulo}>
              <h1 className={styles.tituloCard}>Página de Corpo</h1>
              <h2 className={styles.numberCard}>2</h2>
            </div>
            <p className={styles.cardTexto}>
              Descubra como cuidar do corpo com dicas simples e práticas para manter a pele saudável e hidratada.
            </p>
            <button className={styles.cardButton}>Clique para ir à página</button>
          </div>
        </Link>
        <Link href="/makeup" className={styles.navLink}>
          <div className={`${styles.card} ${styles.makeupCard}`}>
            <div className={styles.titulo}>
              <h1 className={styles.tituloCard}>Página de Maquiagem</h1>
              <h2 className={styles.numberCard}>3</h2>
            </div>
            <p className={styles.cardTexto}>
              Aprenda truques de maquiagem para realçar sua beleza natural e criar looks incríveis para qualquer ocasião.
            </p>
            <button className={styles.cardButton}>Clique para ir à página</button>
          </div>
        </Link>
        <Link href="/blog" className={styles.navLink}>
          <div className={`${styles.card} ${styles.blogCard}`}>
            <div className={styles.titulo}>
              <h1 className={styles.tituloCard}>Página de Blog</h1>
              <h2 className={styles.numberCard}>4</h2>
            </div>
            <p className={styles.cardTexto}>
              Descubra artigos, dicas e novidades sobre cuidados com a pele, maquiagem e muito mais.
            </p>
            <button className={styles.cardButton}>Clique para ir à página</button>
          </div>
        </Link>
      </nav>
    </section>
  );
};

export default CategoryCard;