import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "../card";
import styles from "./articles-carousel.module.css";

const ArticlesCarousel = ({ articles, arrowColor }) => {
  const [start, setStart] = useState(0);
  const visible = 3; // Quantos aparecem por vez

  const handlePrev = () => setStart((prev) => Math.max(prev - visible, 0));
  const handleNext = () =>
    setStart((prev) => Math.min(prev + visible, articles.length - visible));

  return (
    <div className={styles.carouselContainer}>
      <button
        className={styles.arrow}
        onClick={handlePrev}
        disabled={start === 0}
        style={{ backgroundColor: arrowColor }} // Aplica a cor dinâmica
      >
        <FaChevronLeft />
      </button>
      <div className={styles.cardsWrapper}>
        {articles.slice(start, start + visible).map((art, idx) => (
          <Card key={idx} {...art} />
        ))}
      </div>
      <button
        className={styles.arrow}
        onClick={handleNext}
        disabled={start + visible >= articles.length}
        style={{ backgroundColor: arrowColor }} // Aplica a cor dinâmica
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ArticlesCarousel;
