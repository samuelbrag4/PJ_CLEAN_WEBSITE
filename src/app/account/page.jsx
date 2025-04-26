"use client";

import { useState } from "react";
import Link from "next/link"; // Importando o componente Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faComment,
  faSignOutAlt,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./account.module.css";

export default function Conta() {
  const [isEditing, setIsEditing] = useState(false);

  // Simulação de preferência do usuário
  const [userPreference, setUserPreference] = useState("skincare"); // Pode ser "skincare", "corpo" ou "make"

  // Definir cores com base na preferência do usuário
  const categoryColors = {
    skincare: "#F05080",
    corpo: "#F05080",
    make: "#F05080",
  };

  const themeColor = categoryColors[userPreference];

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

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
          <div className={styles.header}>
            <h1 className={styles.title}>Minha Conta</h1>
            <button className={styles.editButton} onClick={handleEdit}>
              <FontAwesomeIcon icon={faEdit} />{" "}
              {isEditing ? "Salvar" : "Editar"}
            </button>
          </div>
          <form className={styles.userForm}>
            <div className={styles.formGroup}>
              <label>Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                disabled={!isEditing}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Digite seu email"
                disabled={!isEditing}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Telefone</label>
              <input
                type="text"
                placeholder="Digite seu telefone"
                disabled={!isEditing}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Localização</label>
              <div className={styles.locationInputs}>
                <input type="text" placeholder="País" disabled={!isEditing} />
                <input type="text" placeholder="Estado" disabled={!isEditing} />
                <input type="text" placeholder="Cidade" disabled={!isEditing} />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Idioma</label>
              <select disabled={!isEditing} className={styles.languageSelect}>
                <option value="pt">Português</option>
                <option value="en">Inglês</option>
              </select>
            </div>
          </form>
        </main>
      </div>
      <Footer corFooter={themeColor} />
    </div>
  );
}