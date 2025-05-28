"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faComment, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import LikeCard from "../components/likeCard";
import styles from "./likes.module.css";

function getInitials(nome) {
  if (!nome) return "";
  const parts = nome.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Likes() {
  const [likes, setLikes] = useState([]);
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const userId = "509464ea-c444-43b2-a626-c14a40347efd";

  const fetchUserLikes = async () => {
    try {
      const response = await fetch(`http://localhost:4000/likes/user/${userId}`);
      if (!response.ok) throw new Error("Erro ao buscar curtidas do usuário.");
      const data = await response.json();
      setLikes(data.likes || []);
      setUserData(data.user || null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchUserLikes();
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
          <h1 className={styles.title}>Minhas Curtidas</h1>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          <div className={styles.likesList}>
            {likes.length > 0 ? (
              likes.map((like) => (
                <LikeCard
                  key={like.id}
                  type={like.produto.categoria}
                  image={like.produto.imagem || "https://via.placeholder.com/150"}
                  description={like.produto.descricao}
                  review={`Preço: R$ ${like.produto.preco.toFixed(2)}`}
                  link={`/produto/${like.produto.id}`}
                />
              ))
            ) : (
              <p className={styles.noLikesMessage}>Você ainda não tem curtidas.</p>
            )}
          </div>
        </main>
      </div>
      <Footer corFooter="#F05080" />
    </div>
  );
}