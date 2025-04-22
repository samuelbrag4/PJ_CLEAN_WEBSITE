import styles from "./acessoriesSection.module.css";

const AcessoriesSection = ({
  subtitulo = "Acessórios",
  titulo = "Massagem",
  cards = [
    {
      titulo: "Gua Sha",
      descricao:
        "Ferramenta milenar chinesa que estimula a circulação, reduz inchaço, alivia tensão facial e promove drenagem linfática.",
      imagem:
        "https://glov.eu/cdn/shop/products/QuartzGuaSha_ef4b3c01-9fe4-4761-b21d-1097fe2307c6.png?v=1649078742",
    },
    {
      titulo: "Rolo de Jade",
      descricao:
        "Massageador facial que reduz inchaço, melhora circulação sanguínea e ajuda na absorção de produtos skincare.",
      imagem:
        "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/products/89926/89926.png",
    },
    {
      titulo: "Derma Roller",
      descricao:
        "Alivia tensões faciais, reduz olheiras e promove relaxamento. Excelente para uso durante sua rotina noturna de skincare.",
      imagem:
        "https://www.swisscollc.com/cdn/shop/products/48009.png?v=1594308069",
    },
    {
      titulo: "Kansa Wand",
      descricao:
        "Ferramenta ayurvédica que reduz linhas de expressão e ativa pontos de energia facial. Ideal para massagem diária.",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkp1bTw4Fp3UKu3s6OXTYX7PfRIO7M2Do3hA&s",
    },
  ],
}) => {
  return (
    <section className={styles.acessoriesSection}>
      <div className={styles.acessoriesContainer}>
        <div className={styles.acessoriesTexto}>
          <h4 className={styles.acessoriesSubtitulo}>{subtitulo}</h4>
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
