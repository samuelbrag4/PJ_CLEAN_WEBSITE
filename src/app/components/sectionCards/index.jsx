import styles from "./section-cards.module.css"

const SectionCards = ({ children, corBotao, corTextoBotao }) => {
    return (
        <section className={styles.sectionCards}>
            <div className={styles.cards}>{children}</div>
            <button className={styles.botao} style={{ backgroundColor: corBotao, color: corTextoBotao }}>
                Encontre mais artigos
            </button>
        </section>
    );
};

export default SectionCards;