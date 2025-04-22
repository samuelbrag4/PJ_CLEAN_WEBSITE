import styles from "./section-cards.module.css"
import Card from "../card";


const SectionCards = ({ cardData, corBotao, corTextoBotao }) => {
    return (
        <section className={styles.sectionCards}>
            <div className={styles.cards}>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        capa={card.capa}
                        textoAlt={card.textoAlt}
                        categoria={card.categoria}
                        titulo={card.titulo}
                        descricao={card.descricao}
                        caminhoArtigo={card.caminhoArtigo}
                        corBorda={card.corBorda}
                        corCategoria={card.corCategoria}
                    />
                ))}
            </div>
            <button className={styles.botao} style={{ backgroundColor: corBotao, color: corTextoBotao }}>
                Encontre mais artigos
            </button>
        </section>
    );
};


export default SectionCards;