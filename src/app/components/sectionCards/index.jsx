import styles from "./section-cards.module.css";
import Card from "../card";

const SectionCards = ({ cardData = [], corBotao, corTextoBotao }) => {
    return (
        <section className={styles.sectionCards}>
            <div className={styles.cards}>
                {cardData.length > 0 ? (
                    cardData.map((card, index) => (
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
                    ))
                ) : (
                    <p>Nenhum artigo encontrado.</p>
                )}
            </div>
            <button className={styles.botao} style={{ backgroundColor: corBotao, color: corTextoBotao }}>
                Encontre mais artigos
            </button>
        </section>
    );
};

export default SectionCards;