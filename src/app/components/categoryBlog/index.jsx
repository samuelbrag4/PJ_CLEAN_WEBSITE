import styles from "./category_blog.module.css";
import { FaArrowRight, FaUserCircle } from "react-icons/fa";

const CategoryBlog = ({
  linkImagem,
  textoAlt,
  titulo,
  texto,
  background,
  onClick,
  artigosCount,
  autor,
}) => {
  return (
    <div
      className={styles.categoriaBlog}
      style={background ? { background } : {}}
    >
      <div className={styles.categoriaImagem}>
        <img src={linkImagem} alt={textoAlt} className={styles.imagem} />
        <span className={styles.badge}>{titulo}</span>
      </div>
      <div className={styles.categoriaTexto}>
        <div className={styles.cabecalho}>
          <h2 className={styles.titulo}>{titulo}</h2>
          {autor && (
            <span className={styles.autor}>
              <FaUserCircle className={styles.autorIcon} />
              {autor}
            </span>
          )}
        </div>
        <p className={styles.texto}>{texto}</p>
        <div className={styles.footerCard}>
          {typeof artigosCount === "number" && (
            <span className={styles.contador}>
              {artigosCount} artigo{artigosCount === 1 ? "" : "s"}
            </span>
          )}
          <button className={styles.botao} onClick={onClick}>
            Ver artigos <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryBlog;