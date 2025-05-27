import styles from "./loading.module.css";

export default function Loading({ texto = "Carregando..." }) {
  return (
    <div className={styles.loadingContainer}>
      <span className={styles.loadingText}>{texto}</span>
    </div>
  );
}