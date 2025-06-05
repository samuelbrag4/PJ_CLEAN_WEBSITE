"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faComment,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import LikeCard from "../components/likeCard";
import AsideAccount from "../components/aside";
import styles from "./likes.module.css";

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

export default function Likes() {
  const [likes, setLikes] = useState([]);
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchUserLikes = async () => {
    try {
      const token = localStorage.getItem("token"); // ou onde você salva o token
      const response = await fetch("https://clean-2tds.coolify.fps92.dev/likes/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include", // se usar cookies também
      });
      if (!response.ok) throw new Error("Erro ao buscar curtidas do usuário.");
      const data = await response.json();
      setLikes(data.likes || []);
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
        <AsideAccount
          userData={userData}
          getInitials={getInitials}
          formatDate={formatDate}
          handleLogout={handleLogout}
          handleDeleteAccount={handleDeleteAccount}
        />

        {/* Main Content */}
        <main className={styles.mainContent}>
          <h1 className={styles.title}>Minhas Curtidas</h1>
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
          <div className={styles.likesList}>
            {likes.length > 0 ? (
              likes.map((like) => (
                <LikeCard
                  key={like.id}
                  type="produto"
                  title={like.produto.nome}
                  image={
                    like.produto.imagem || "https://via.placeholder.com/150"
                  }
                  description={like.produto.descricao}
                  review={`Preço: R$ ${like.produto.preco.toFixed(2)}`}
                  link={`/produto/${like.produto.id}`}
                />
              ))
            ) : (
              <p className={styles.noLikesMessage}>
                Você ainda não tem curtidas.
              </p>
            )}
          </div>
        </main>
      </div>
      <Footer corFooter="#F05080" />
    </div>
  );
}
