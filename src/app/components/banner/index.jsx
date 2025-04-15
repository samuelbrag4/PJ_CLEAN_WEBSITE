import styles from "./banner.module.css";

const Banner = ({ image, imageAlt, title, description, buttonText = "Ler mais", buttonLink = "#", corButton }) => {
    return (
        <div className={styles.featureBanner}>
            <div className={styles.featureImage}>
                <img src={image} alt={imageAlt} />
            </div>
            <div className={styles.featureContent}>
                <h2 className={styles.featureTitle}>{title}</h2>
                <p className={styles.featureDescription}>{description}</p>
                <a href={buttonLink} className={styles.featureButton} style={{ backgroundColor: corButton }}>{buttonText}</a>
            </div>
        </div>
    )
}

export default Banner;