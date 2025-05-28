import Link from "next/link";
import styles from "./cards.module.css";

const Card = ({
  capa,
  textoAlt,
  categoria,
  titulo,
  descricao,
  caminhoArtigo,
  corBorda,
  corCategoria,
  preco,
  marca,
  linkMarca,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.imageCard} src={capa} alt={textoAlt} />
        <span
          className={styles.categoriaBadge}
          style={{ background: corCategoria || "#f05080" }}
        >
          {categoria}
        </span>
      </div>
      <div className={styles.textCard}>
        <h3 className={styles.tituloCard}>{titulo}</h3>
        <div className={styles.precoMarca}>
          <span className={styles.preco}>
            R$ {preco?.toFixed(2) || "--"}
          </span>
          {marca && linkMarca && (
            <a
              href={linkMarca}
              className={styles.marcaLink}
              target="_blank"
              rel="noopener noreferrer"
              title={`Ver produtos da marca ${marca}`}
            >
              {marca}
            </a>
          )}
        </div>
        <div className={styles.descricaoWrapper}>
          <p className={styles.descricao}>{descricao}</p>
        </div>
        <Link href={caminhoArtigo} className={styles.botaoCard} style={{ borderColor: corBorda }}>
          Ver Mais
        </Link>
      </div>
    </div>
  );
};

export default Card;