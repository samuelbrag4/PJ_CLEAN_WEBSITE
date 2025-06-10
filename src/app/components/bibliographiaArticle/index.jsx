import styles from "./bibliographiaArticle.module.css";
import { FaChevronLeft } from "react-icons/fa";
import React, { useState } from "react";

const BibliografiaArticle = ({ links = [], corSeta }) => {
  const [openBibli, setOpenBibli] = useState(false);

  return (
    <div className={styles.accordionContainer}>
      <button
        className={styles.accordionButton}
        onClick={() => setOpenBibli((prev) => !prev)}
        aria-expanded={openBibli}
        aria-controls="bibli-list"
      >
        <span className={styles.sectionBibliTitle}>Bibliografia</span>
        <span
          className={styles.accordionIcon}
          style={{
            transition: "transform 0.2s",
            transform: openBibli ? "rotate(-90deg)" : "rotate(0deg)"
          }}
        >
          <FaChevronLeft style={{ color: corSeta, fontSize: 18 }} />
        </span>
      </button>
      <div
        id="bibli-list"
        className={styles.accordionContent}
        style={{ display: openBibli ? "block" : "none" }}
      >
        <ul className={styles.bibliList}>
          {links.map((link, idx) => (
            <li key={idx}>
              <a className={styles.link} href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BibliografiaArticle;