"use client";

import { useState } from "react";
import styles from "./section-cards.module.css";
import Card from "../card";

const SectionCards = ({ cardData = [], corBotao, corTextoBotao }) => {
    const [expanded, setExpanded] = useState(false);

    const mostrarCards = expanded ? cardData : cardData.slice(0, 3);

    return (
        <section className={styles.sectionCards}>
            <div className={styles.cards}>
                {mostrarCards.length > 0 ? (
                    mostrarCards.map((card, index) => (
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
                    <p className={styles.nenhumCard}>Nenhum artigo foi encontrado no momento. Volte mais tarde para novidades!</p>
                )}
            </div>
            {cardData.length > 3 && (
                <button
                    className={styles.botao}
                    style={{ backgroundColor: corBotao, color: corTextoBotao }}
                    onClick={() => setExpanded((prev) => !prev)}
                >
                    {expanded ? "Ver Menos" : "Encontre mais artigos"}
                </button>
            )}
        </section>
    );
};

export default SectionCards;