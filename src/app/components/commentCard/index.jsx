"use client";

import styles from "./commentCard.module.css";

export default function CommentCard({ author, date, text }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{author}</h2>
      <p className={styles.cardDate}>{date}</p>
      <p className={styles.cardComment}>{text}</p>
    </div>
  );
}