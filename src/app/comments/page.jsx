"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faComment, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./comments.module.css";

function getInitials(nome) {
  if (!nome) return "";
  const parts = nome.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const userId = "598c43a4-a082-41d2-9fb5-92375a46ed6b";

  const fetchUserComments = async () => {
    try {
      const response = await fetch(`https://clean-2tds.coolify.fps92.dev/comments/user/${userId}`);
      if (!response.ok) throw new Error("Erro ao buscar comentários do usuário.");
      const data = await response.json();
      setComments(data.comments || []);
      setUserData(data.user || null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchUserComments();
  }, []);

  return (
    <div>
      <Header corHeader="#F05080" />
      <div className={styles.container}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.avatarWrapper}>
            {userData?.fotoPerfil ? (
              <img
                src={userData.fotoPerfil}
                alt="Foto do usuário"
                className={styles.userImage}
              />
            ) : (
              <div className={styles.avatarCircle}>
                {getInitials(userData?.nome)}
              </div>
            )}
          </div>
          <h2 className={styles.userName}>{userData?.nome || "Carregando..."}</h2>
          <button className={styles.logoutButton} title="Sair da conta">
            <FontAwesomeIcon icon={faSignOutAlt} /> Sair
          </button>
          <nav className={styles.navLinks}>
            <Link href="/account">
              <button className={styles.navButton} title="Meu Cadastro">
                <FontAwesomeIcon icon={faUser} /> Meu Cadastro
              </button>
            </Link>
            <Link href="/likes">
              <button className={styles.navButton} title="Meus Favoritos">
                <FontAwesomeIcon icon={faHeart} /> Meus Favoritos
              </button>
            </Link>
            <Link href="/comments">
              <button className={styles.navButton} title="Meus Comentários">
                <FontAwesomeIcon icon={faComment} /> Meus Comentários
              </button>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={styles.mainContent}>
          <h1 className={styles.title}>Meus Comentários</h1>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          <div className={styles.commentsList}>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id} className={styles.card}>
                  <h2 className={styles.cardTitle}>{userData?.nome}</h2>
                  <p className={styles.cardDate}>
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </p>
                  <p className={styles.cardComment}>{comment.conteudo}</p>
                </div>
              ))
            ) : (
              <p className={styles.noCommentsMessage}>Você ainda não tem comentários.</p>
            )}
          </div>
        </main>
      </div>
      <Footer corFooter="#F05080" />
    </div>
  );
}