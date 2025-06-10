import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "../cards";
import styles from "./articles-carousel.module.css";

const ArticlesCarousel = ({ articles, arrowColor }) => {
  const [start, setStart] = useState(0);
  const visible = 3; // Quantos aparecem por vez

  const handlePrev = () => setStart((prev) => Math.max(prev - visible, 0));
  const handleNext = () =>
    setStart((prev) => Math.min(prev + visible, articles.length - visible));

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.cardsWrapper}>
        {articles.slice(start, start + visible).map((art, idx) => (
          <Card key={idx} {...art} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesCarousel;
