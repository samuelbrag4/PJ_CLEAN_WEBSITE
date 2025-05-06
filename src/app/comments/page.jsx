"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faComment, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./comments.module.css";

export default function Comments() {
  const [comments, setComments] = useState([]); // Lista de comentários
  const [userData, setUserData] = useState(null); // Dados do usuário
  const [errorMessage, setErrorMessage] = useState(""); // Mensagem de erro

  const userId = "598c43a4-a082-41d2-9fb5-92375a46ed6b"; // ID do usuário autenticado

  // Função para buscar comentários do usuário
  const fetchUserComments = async () => {
    try {
      const response = await fetch(`http://localhost:4000/comments/user/${userId}`);
      if (!response.ok) throw new Error("Erro ao buscar comentários do usuário.");
      const data = await response.json();
      setComments(data.comments || []); // Atualiza a lista de comentários
      setUserData(data.user || null); // Atualiza os dados do usuário
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Buscar comentários ao carregar o componente
  useEffect(() => {
    fetchUserComments();
  }, []);

  return (
    <div>
      <Header corHeader="#F05080" />
      <div className={styles.container}>
        {/* Sidebar */}
        <aside className={styles.sidebar} style={{ backgroundColor: "#F05080" }}>
          <img
            src={userData?.fotoPerfil || "https://via.placeholder.com/100"}
            alt="Foto do usuário"
            className={styles.userImage}
          />
          <h2 className={styles.userName}>{userData?.nome || "Carregando..."}</h2>
          <button className={styles.logoutButton}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Sair
          </button>
          <nav className={styles.navLinks}>
            <Link href="/account">
              <button className={styles.navButton} style={{ color: "#F05080" }}>
                <FontAwesomeIcon icon={faUser} /> Meu Cadastro
              </button>
            </Link>
            <Link href="/likes">
              <button className={styles.navButton} style={{ color: "#F05080" }}>
                <FontAwesomeIcon icon={faHeart} /> Meus Favoritos
              </button>
            </Link>
            <Link href="/comments">
              <button className={styles.navButton} style={{ color: "#F05080" }}>
                <FontAwesomeIcon icon={faComment} /> Meus Comentários
              </button>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={styles.mainContent}>
          <h1 className={styles.title}>Meus Comentários</h1>

          {/* Mensagem de erro */}
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

          {/* Lista de comentários */}
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