import styles from "./banner_article.module.css";

const BannerArticle = ({ linkImagem, textoAlt}) => {
    return (
        <section className={styles.bannerArticle}>
            <div className={styles.degrade}></div>
            <div className={styles.imagem}>
                <img className={styles.img} src={linkImagem} alt={textoAlt} />
            </div>
        </section>
    )
}

export default BannerArticle;