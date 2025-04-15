import styles from "./category_blog.module.css"; 

const CategoryBlog = ({ linkImagem, textoAlt, titulo, texto }) => {
  return (
    <div className={styles.categoriaBlog}>
      <div className={styles.categoriaImagem}>
        <img src={linkImagem} alt={textoAlt} className={styles.imagem}/>
      </div>
      <div className={styles.categoriaTexto}>
        <h2 className={styles.titulo}>{titulo}</h2>
        <p className={styles.texto}>{texto}</p>
      </div>
    </div>
  );
};

export default CategoryBlog;