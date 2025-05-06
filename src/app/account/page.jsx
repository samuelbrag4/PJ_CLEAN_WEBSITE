"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faComment,
  faSignOutAlt,
  faEdit,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./account.module.css";

export default function Conta() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null); // Dados do usuário
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const userId = "598c43a4-a082-41d2-9fb5-92375a46ed6b"; // Substitua pelo ID do usuário autenticado

  // Função para buscar dados do usuário
  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/user/${userId}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || "Erro ao buscar dados do usuário."
        );
      }
      const data = await response.json();
      setUserData(data.user); // A resposta contém o usuário dentro de "user"
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Função para atualizar dados do usuário
  const updateUserData = async (updatedData) => {
    try {
      const response = await fetch(`http://localhost:4000/user/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) throw new Error("Erro ao atualizar dados do usuário.");
      const data = await response.json();
      setUserData(data.user); // Atualiza os dados do usuário com a resposta
      setSuccessMessage("Dados atualizados com sucesso!");
      setIsEditing(false);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());
    updateUserData(updatedData);
  };

  // Buscar dados do usuário ao carregar o componente
  useEffect(() => {
    fetchUserData();
  }, []);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <Header corHeader="#F05080" />
      <div className={styles.container}>
        {/* Sidebar */}
        <aside
          className={styles.sidebar}
          style={{ backgroundColor: "#F05080" }}
        >
          <img
            src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Foto do usuário"
            className={styles.userImage}
          />
          <h2 className={styles.userName}>
            {userData?.nome || "Carregando..."}
          </h2>
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
          <div className={styles.header}>
            <h1 className={styles.title}>Minha Conta</h1>
            <button className={styles.editButton} onClick={handleEdit}>
              <FontAwesomeIcon icon={faEdit} />{" "}
              {isEditing ? "Salvar" : "Editar"}
            </button>
          </div>
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
          {successMessage && (
            <p className={styles.successMessage}>{successMessage}</p>
          )}
          <form className={styles.userForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                defaultValue={userData?.nome || ""}
                disabled={!isEditing}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                defaultValue={userData?.email || ""}
                disabled={!isEditing}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Senha</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="senha"
                  placeholder="Digite sua senha"
                  disabled={!isEditing}
                  className={styles.passwordInput}
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
              <label>Idioma</label>
              <select
                name="idioma"
                defaultValue={userData?.idioma || "pt-BR"}
                disabled={!isEditing}
                className={styles.languageSelect}
              >
                <option value="pt-BR">Português</option>
                <option value="en-US">Inglês</option>
              </select>
            </div>
            {isEditing && (
              <button type="submit" className={styles.saveButton}>
                Salvar Alterações
              </button>
            )}
          </form>
        </main>
      </div>
      <Footer corFooter="#F05080" />
    </div>
  );
}