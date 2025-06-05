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
  faCheckCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import AsideAccount from "../components/aside";
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

function handleDeleteAccount() {
  // Aqui você pode colocar a lógica real de deletar conta se quiser
  alert("Excluir conta!");
}

function handleLogout() {

  alert("Logout!");
}

export default function Conta() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
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
    setShowModal(true);
  };

  const confirmDelete = async () => {
    setShowModal(false);
    setSaving(true);
    const result = await deleteAccount();
    setSaving(false);
    if (result.success) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/signup");
    } else {
      setErrorMessage(result.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setSaving(true);
    setSaved(false);
    const formData = new FormData(e.target);
    const updatedData = {
      nome: formData.get("nome"),
      senha: formData.get("senha") || undefined,
      idioma: formData.get("idioma"),
    };
    if (!updatedData.senha) delete updatedData.senha;

    const result = await updateProfile(updatedData);
    setSaving(false);
    if (result.success) {
      setUserData(result.data);
      setSuccessMessage("Dados atualizados com sucesso!");
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
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
        <AsideAccount
          userData={userData}
          getInitials={getInitials}
          formatDate={formatDate}
          handleLogout={handleLogout}
          handleDeleteAccount={handleDeleteAccount}
        />

        {/* Main Content */}
        <main className={styles.mainContent}>
          <div className={styles.header}>
            <h1 className={styles.title}>Minha Conta</h1>
            <button
              className={styles.editButton}
              onClick={handleEdit}
              title={isEditing ? "Salvar alterações" : "Editar perfil"}
            >
              <FontAwesomeIcon icon={faEdit} size="lg" />
              {isEditing ? "Salvar" : "Editar"}
            </button>
            {saving && (
              <span className={styles.savingSpinner}>
                <FontAwesomeIcon icon={faSpinner} spin />
              </span>
            )}
            {saved && (
              <span className={styles.savedCheck}>
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            )}
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
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Informações Pessoais</h3>
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
                    title={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>
            </section>
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Preferências</h3>
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
            </section>
          </form>
        </main>
      </div>

      {/* Modal de confirmação de exclusão */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>
              <FontAwesomeIcon icon={faTrash} /> Excluir Conta
            </h2>
            <p>
              Tem certeza que deseja excluir sua conta? <br />
              <b>Esta ação não pode ser desfeita.</b>
            </p>
            <div className={styles.modalActions}>
              <button
                className={styles.modalCancel}
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className={styles.modalDelete}
                onClick={confirmDelete}
                disabled={saving}
              >
                {saving ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  <FontAwesomeIcon icon={faTrash} />
                )}{" "}
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer corFooter="#F05080" />
    </div>
  );
}