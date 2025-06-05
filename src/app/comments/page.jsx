"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faComment, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import AsideAccount from "../components/aside";
import styles from "./comments.module.css";

function getInitials(nome) {
  if (!nome) return "";
  const parts = nome.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function handleLogout() {
  alert("Logout!");
}

function handleDeleteAccount() {
  alert("Excluir conta!");
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
        <AsideAccount
          userData={userData}
          getInitials={getInitials}
          formatDate={formatDate}
          handleLogout={handleLogout}
          handleDeleteAccount={handleDeleteAccount}
        />

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