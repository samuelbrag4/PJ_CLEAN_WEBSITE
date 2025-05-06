"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faComment, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import LikeCard from "../components/likeCard";
import styles from "./likes.module.css";

export default function Likes() {
  const [likes, setLikes] = useState([]); // Lista de curtidas
  const [userData, setUserData] = useState(null); // Dados do usuário
  const [errorMessage, setErrorMessage] = useState(""); // Mensagem de erro

  const userId = "509464ea-c444-43b2-a626-c14a40347efd"; // ID do usuário autenticado

  // Função para buscar curtidas do usuário
  const fetchUserLikes = async () => {
    try {
      const response = await fetch(`http://localhost:4000/likes/user/${userId}`);
      if (!response.ok) throw new Error("Erro ao buscar curtidas do usuário.");
      const data = await response.json();
      setLikes(data.likes || []); // Atualiza a lista de curtidas
      setUserData(data.user || null); // Atualiza os dados do usuário
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Buscar curtidas ao carregar o componente
  useEffect(() => {
    fetchUserLikes();
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
          <h1 className={styles.title}>Minhas Curtidas</h1>

          {/* Mensagem de erro */}
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

          {/* Lista de curtidas */}
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