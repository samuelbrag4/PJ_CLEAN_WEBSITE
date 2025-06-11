import Link from "next/link";
import styles from "./articleCard.module.css";

const ArticleCard = ({ caminhoPage, capa, titulo, descricao, categoria, corCategoria }) => {
  return (
    <Link href={caminhoPage} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={capa} alt={`Imagem do artigo ${titulo}`} className={styles.image} />
        <span
          className={styles.categoryBadge}
          style={{ backgroundColor: corCategoria || "#f05080" }}
        >
          {categoria}
        </span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{titulo}</h3>
        <p className={styles.description}>{descricao}</p>
        <button className={styles.readMoreBtn} type="button" style={{ backgroundColor: corCategoria }}>
          Leia mais
        </button> 
      </div>
    </Link>
  );
};

export default ArticleCard;