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
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./account.module.css";

export default function Conta() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
            src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            <div className={styles.formGroup}><label>Senha</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"} // Alterna entre "text" e "password"
                  placeholder="Digite sua senha"
                  disabled={!isEditing}
                  className={styles.passwordInput} // Adicionei uma classe para estilização
                />
                <button
                  type="button"
                  className={styles.togglePasswordButton}
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label>Informações da Conta</label>
              <div className={styles.accountInfoContainer}>
                <div className={styles.accountInfo}>
                  <p>Conta criada em: <strong>01/01/2023</strong></p>
                </div>
                <div className={styles.accountInfo}>
                  <p>Última atualização: <strong>15/04/2025</strong></p>
                </div>
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