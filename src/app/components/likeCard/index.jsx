"use client";

import styles from "./likeCard.module.css";

export default function LikeCard({ type, title, image, description, review, link }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>
        {type === "produto" ? (title || "Curtida de Produto") : "Curtida de Avaliação"}
      </h2>
      {type === "produto" && (
        <>
          <img
            src={image || "https://via.placeholder.com/150"}
            alt="Imagem do Produto"
            className={styles.cardImage}
          />
          <p className={styles.cardDescription}>{description}</p>
        </>
      )}
      {type === "avaliacao" && <p className={styles.cardReview}>{review}</p>}
      <button
        className={styles.cardButton}
        onClick={() => window.location.href = link}
      >
        Ver Mais
      </button>
    </div>
  );
}