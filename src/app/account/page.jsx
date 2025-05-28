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
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./account.module.css";
import {
  getProfile,
  updateProfile,
  deleteAccount,
} from "../services/authService";
import { useRouter } from "next/navigation";
import Loading from "../components/loading/Loading";
import { useAuth } from "../context/AuthContext";

export default function Conta() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { user, loading } = useAuth();

  // Redireciona para login se não estiver autenticado
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  useEffect(() => {
    async function fetchProfile() {
      const result = await getProfile();
      if (result.success) {
        setUserData(result.data);
      } else {
        setErrorMessage(result.message);
      }
    }
    fetchProfile();
  }, []);

  const togglePasswordVisibility = () => setShowPassword((v) => !v);

  const handleEdit = () => {
    if (isEditing) {
      document.getElementById("userForm").requestSubmit();
    } else {
      setIsEditing(true);
      setSuccessMessage("");
      setErrorMessage("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const handleDeleteAccount = async () => {
    if (
      confirm(
        "Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita."
      )
    ) {
      const result = await deleteAccount();
      if (result.success) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/signup");
      } else {
        setErrorMessage(result.message);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    const formData = new FormData(e.target);
    const updatedData = {
      nome: formData.get("nome"),
      senha: formData.get("senha") || undefined,
      idioma: formData.get("idioma"),
    };
    if (!updatedData.senha) delete updatedData.senha;

    const result = await updateProfile(updatedData);
    if (result.success) {
      setUserData(result.data);
      setSuccessMessage("Dados atualizados com sucesso!");
      setIsEditing(false);
    } else {
      setErrorMessage(result.message);
    }
  };

  if (!userData) {
    return <Loading texto="Carregando..." />;
  }

  return (
    <div>
      <Header corHeader="#F05080" />
      <div className={styles.container}>
        {/* Sidebar */}
        <aside
          className={styles.sidebar}
          style={{ backgroundColor: "#F05080" }}
        >
          <h2 className={styles.userName}>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: 8 }} />
            {userData?.nome || "Carregando..."}
          </h2>
          <button className={styles.logoutButton} onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Sair
          </button>
          <button
            className={styles.deleteButton}
            style={{
              background: "#ff4d4f",
              color: "#fff",
              border: "none",
              marginTop: "1rem",
              borderRadius: "6px",
              padding: "0.5rem 1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onClick={handleDeleteAccount}
          >
            <FontAwesomeIcon icon={faTrash} /> Excluir Conta
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
          <form
            className={styles.userForm}
            id="userForm"
            onSubmit={handleSubmit}
          >
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
                disabled
              />
            </div>
            <div className={styles.formGroup}>
              <label>Senha</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="senha"
                  placeholder="Digite sua nova senha"
                  disabled={!isEditing}
                  className={styles.passwordInput}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className={styles.togglePasswordButton}
                  onClick={togglePasswordVisibility}
                  tabIndex={-1}
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
          </form>
        </main>
      </div>
      <Footer corFooter="#F05080" />
    </div>
  );
}
