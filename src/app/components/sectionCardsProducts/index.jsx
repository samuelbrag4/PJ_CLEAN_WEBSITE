import styles from './section_cards_products.module.css'

const SectionCardsProducts = ({ children, titulo, corGradiente  }) => {

    return (
        <div className={styles.container} style={{ background: `linear-gradient(to bottom, #fff, ${corGradiente})` }}>
            <h1 className={styles.titulo}>{titulo}</h1>
            <div className={styles.produtos}>{children}</div>
        </div>
    )
}

export default SectionCardsProducts;