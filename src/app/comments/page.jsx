"use client";

import { useState } from "react";
import Link from "next/link"; // Importando o componente Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faComment, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./comments.module.css";

export default function Comments({ commentsData = [] }) {
  const [userPreference, setUserPreference] = useState("skincare"); // Simulação de preferência do usuário

  // Definir cores com base na preferência do usuário
  const categoryColors = {
    skincare: "#F05080",
    corpo: "#F05080",
    make: "#F05080",
  };

  const themeColor = categoryColors[userPreference];

  return (
    <div>
      <Header corHeader={themeColor} />
      <div className={styles.container}>
        {/* Sidebar */}
        <aside
          className={styles.sidebar}
          style={{ backgroundColor: themeColor }}
        >
          <img
            src="https://via.placeholder.com/100"
            alt="Foto do usuário"
            className={styles.userImage}
          />
          <h2 className={styles.userName}>João Silva</h2>
          <button className={styles.logoutButton}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Sair
          </button>
          <nav className={styles.navLinks}>
            <Link href="/account">
              <button className={styles.navButton} style={{ color: themeColor }}>
                <FontAwesomeIcon icon={faUser} /> Meu Cadastro
              </button>
            </Link>
            <Link href="/likes">
              <button className={styles.navButton} style={{ color: themeColor }}>
                <FontAwesomeIcon icon={faHeart} /> Meus Favoritos
              </button>
            </Link>
            <Link href="/comments">
              <button className={styles.navButton} style={{ color: themeColor }}>
                <FontAwesomeIcon icon={faComment} /> Meus Comentários
              </button>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={styles.mainContent}>
          <h1 className={styles.title}>Meus Comentários</h1>
          <div className={styles.commentsList}>
            {commentsData.length > 0 ? (
              commentsData.map((comment, index) => (
                <div key={index} className={styles.card}>
                  <h2 className={styles.cardTitle}>{comment.author}</h2>
                  <p className={styles.cardDate}>{comment.date}</p>
                  <p className={styles.cardComment}>{comment.text}</p>
                </div>
              ))
            ) : (
              <p className={styles.noCommentsMessage}>Você ainda não tem comentários.</p>
            )}
          </div>
        </main>
      </div>
      <Footer corFooter={themeColor} />
    </div>
  );
}