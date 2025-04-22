import styles from './skinTypeGrid.module.css';

const SkinTypeGrid = ({ 
  title,
  oilyImage, oilyTitle, oilyDescription,
  dryImage, dryTitle, dryDescription,
  combinationImage, combinationTitle, combinationDescription,
  normalImage, normalTitle, normalDescription, category, corCategory
}) => {
  return (
    <div className={styles.skinTypeContainer}>
      <h5 className={styles.category} style={{ color: corCategory }} >{category}</h5>
      <h2 className={styles.skinTypeMainTitle}>{title}</h2>
      <div className={styles.skinTypeGrid}>
        {/* Tipo de pele oleosa */}
        <div className={styles.skinTypeCard}>
          <div className={styles.skinTypeImage}>
            <img src={oilyImage} alt={`Pele ${oilyTitle}`} />
          </div>
          <div className={styles.skinTypeContent}>
            <h3 className={styles.skinTypeTitle}>{oilyTitle}</h3>
            <p className={styles.skinTypeDescription}>{oilyDescription}</p>
          </div>
        </div>

        {/* Tipo de pele seca */}
        <div className={styles.skinTypeCard}>
          <div className={styles.skinTypeImage}>
            <img src={dryImage} alt={`Pele ${dryTitle}`} />
          </div>
          <div className={styles.skinTypeContent}>
            <h3 className={styles.skinTypeTitle}>{dryTitle}</h3>
            <p className={styles.skinTypeDescription}>{dryDescription}</p>
          </div>
        </div>

        {/* Tipo de pele mista */}
        <div className={styles.skinTypeCard}>
          <div className={styles.skinTypeImage}>
            <img src={combinationImage} alt={`Pele ${combinationTitle}`} />
          </div>
          <div className={styles.skinTypeContent}>
            <h3 className={styles.skinTypeTitle}>{combinationTitle}</h3>
            <p className={styles.skinTypeDescription}>{combinationDescription}</p>
          </div>
        </div>

        {/* Tipo de pele normal */}
        <div className={styles.skinTypeCard}>
          <div className={styles.skinTypeImage}>
            <img src={normalImage} alt={`Pele ${normalTitle}`} />
          </div>
          <div className={styles.skinTypeContent}>
            <h3 className={styles.skinTypeTitle}>{normalTitle}</h3>
            <p className={styles.skinTypeDescription}>{normalDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinTypeGrid;