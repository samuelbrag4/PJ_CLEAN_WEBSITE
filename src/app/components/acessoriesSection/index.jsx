import styles from "./acessoriesSection.module.css";

const AcessoriesSection = () => {
  return (
    <section className={styles.acessoriesSection}>
      <div className={styles.acessoriesContainer}>
        <div className={styles.acessoriesTexto}>
          <h4 className={styles.acessoriesSubtitulo}>Acessários</h4>
          <h2 className={styles.acessoriesTitulo}>Massagem</h2>
        </div>

        <div className={styles.acessoriesCards}>
          <div className={styles.acessoriesCard}>
            <div className={styles.acessoriesCardTexto}>
              <h3 className={styles.acessoriesCardTitulo}>Massagem</h3>
              <p className={styles.acessoriesCardParagrafo}>
                O Corretivo Cobertura<br/> Extrema 24h Una<br/> proporciona alta<br/> cobertura
                com efeito<br/> natural e longa duração,<br/> disfarçando olheiras,<br/>
                manchas e imperfeições.
              </p>
            </div>

            <img
              src="https://glov.eu/cdn/shop/products/QuartzGuaSha_ef4b3c01-9fe4-4761-b21d-1097fe2307c6.png?v=1649078742"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcessoriesSection;
