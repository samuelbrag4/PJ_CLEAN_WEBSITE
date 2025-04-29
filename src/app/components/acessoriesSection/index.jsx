import styles from "./acessoriesSection.module.css";

const AcessoriesSection = ({ subtitulo, titulo, cards, degrade, corPrincipal }) => {
  return (
    <section className={styles.acessoriesSection} style={{ background: degrade }}>
      <div className={styles.acessoriesContainer}>
        <div className={styles.acessoriesTexto}>
          <h4 className={styles.acessoriesSubtitulo} style={{ color: corPrincipal }}>{subtitulo}</h4>
          <h2 className={styles.acessoriesTitulo}>{titulo}</h2>
        </div>

        <div className={styles.acessoriesCards}>
          {cards.map((card, index) => (
            <div key={index} className={styles.acessoriesCard}>
              <div className={styles.acessoriesCardTexto}>
                <h3 className={styles.acessoriesCardTitulo}>{card.titulo}</h3>
                <p className={styles.acessoriesCardParagrafo}>
                  {card.descricao}
                </p>
              </div>

              <img src={card.imagem} alt={card.titulo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcessoriesSection;
