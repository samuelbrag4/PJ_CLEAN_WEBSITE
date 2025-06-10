import Link from "next/link";
import styles from "./cards.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Card = ({
  capa,
  textoAlt,
  categoria,
  titulo,
  descricao,
  caminhoArtigo,
  corBorda,
  corCategoria,
  corPreco,
  preco,
  marca,
  linkMarca,
  isLiked,
  onToggleLike,
}) => {
  return (
    <div className={styles.card} style={{ borderColor: corBorda }}>
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
          <span
            className={styles.preco}
            style={{ color: corCategoria || "#f05080" }}
          >
            R$ {preco?.toFixed(2) || "--"}
          </span>
          {marca && (
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
        <div className={styles.cardActions}>
          <Link
            href={caminhoArtigo}
            className={styles.botaoCard}
            style={{
              borderColor: corBorda,
              color: corCategoria || "#f05080",
            }}
          >
            Ver Mais
          </Link>
          {/* Botão de curtir/descurtir */}
          {typeof isLiked !== "undefined" && onToggleLike && (
            <button
              className={styles.likeButton}
              onClick={() => onToggleLike()}
              aria-label={isLiked ? "Descurtir" : "Curtir"}
              title={isLiked ? "Descurtir" : "Curtir"}
            >
              {isLiked ? <FaHeart color="#ff0000" /> : <FaRegHeart />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
