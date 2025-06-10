import styles from "./contentArticle.module.css";

const ConteudoArticle = ({
  tags = [],
  date = "",
  title = "",
  subtitle = "",
  imageSrc = "",
  imageAlt = "",
  paragraphs = [],
  sectionTitle = "",
  listItems = [],
  sectionTitleTwo = "",
  paragraphsList = [],
}) => {
  return (
    <>
      <div className={styles.tagsRow}>
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={styles.tag}
            style={{
              color: tag.color, // Cor do texto
              background: tag.background, // Cor de fundo
            }}
          >
            {tag.text}
          </span>
        ))}
        <span className={styles.date}>{date}</span>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.imageContainer}>
        <img
          src={imageSrc}
          alt={imageAlt}
          width={650}
          height={400}
          className={styles.articleImage}
        />
      </div>
      {paragraphs.map((text, idx) => (
        <p key={idx} className={styles.paragraph}>{text}</p>
      ))}
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
      <p className={styles.paragraph}>As principais características da pele seca são:</p>
      <ul className={styles.list}>
        {listItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <h2 className={styles.sectionTitleTwo}>{sectionTitleTwo}</h2>
      {paragraphsList.map((text, idx) => (
        <p key={idx} className={styles.paragraph}>{text}</p>
      ))}
    </>
  );
}

export default ConteudoArticle;