"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faComment, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import LikeCard from "../components/likeCard";
import styles from "./likes.module.css";

export default function Likes({ likesData = [] }) {
  const [userPreference, setUserPreference] = useState("skincare");

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
        <aside className={styles.sidebar} style={{ backgroundColor: themeColor }}>
          <img src="https://via.placeholder.com/100" alt="Foto do usuário" className={styles.userImage} />
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

        <main className={styles.mainContent}>
          <h1 className={styles.title}>Minhas Curtidas</h1>
          <div className={styles.likesList}>
            {likesData.length > 0 ? (
              likesData.map((like, index) => (
                <LikeCard
                  key={index}
                  type={like.type}
                  image={like.image}
                  description={like.description}
                  review={like.review}
                  link={like.link}
                />
              ))
            ) : (
              <p className={styles.noLikesMessage}>Você ainda não tem curtidas.</p>
            )}
          </div>
        </main>
      </div>
      <Footer corFooter={themeColor} />
    </div>
  );
}