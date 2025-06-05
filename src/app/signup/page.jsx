"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import styles from "./signup.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function SignupPage() {
  const router = useRouter();
  const { register, loading } = useAuth();
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const [confirmSenha, setConfirmSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
    if (success) setSuccess("");
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    if (!form.nome || !form.email || !form.senha || !confirmSenha) {
      setError("Preencha todos os campos.");
      return;
    }
    if (form.senha !== confirmSenha) {
      setError("As senhas não coincidem.");
      return;
    }
    const result = await register(form);
    if (result.success) {
      setSuccess("Conta criada com sucesso! Você já pode fazer login.");
      setTimeout(() => router.push("/login"), 2000);
    } else {
      setError(result.message || "Erro ao criar conta.");
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <div className={styles.signupLeft}>
          <h2 className={styles.signupTitle}>Crie sua conta</h2>
          <p className={styles.signupSubtitle}>
            Preencha os campos para se cadastrar.
          </p>
          <form className={styles.signupForm} onSubmit={handleSignup}>
            <input
              type="text"
              name="nome"
              placeholder="Nome Completo"
              className={styles.signupInput}
              value={form.nome}
              onChange={handleChange}
              disabled={loading}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className={styles.signupInput}
              value={form.email}
              onChange={handleChange}
              disabled={loading}
            />
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                name="senha"
                placeholder="Senha"
                className={styles.signupInput}
                value={form.senha}
                onChange={handleChange}
                disabled={loading}
              />
              <button
                type="button"
                className={styles.togglePasswordButton}
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
            <div className={styles.passwordWrapper}>
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmSenha"
                placeholder="Confirme a senha"
                className={styles.signupInput}
                value={confirmSenha}
                onChange={(e) => {
                  setConfirmSenha(e.target.value);
                  if (error) setError("");
                  if (success) setSuccess("");
                }}
                disabled={loading}
              />
              <button
                type="button"
                className={styles.togglePasswordButton}
                onClick={() => setShowConfirm((v) => !v)}
                tabIndex={-1}
                aria-label={showConfirm ? "Ocultar senha" : "Mostrar senha"}
              >
                <FontAwesomeIcon icon={showConfirm ? faEyeSlash : faEye} />
              </button>
            </div>
            <button type="submit" className={styles.signupButton} disabled={loading}>
              {loading ? "Criando..." : "Criar Conta"}
            </button>
            {error && (
              <div className={styles.signupError}>
                <span className={styles.iconError}>⚠️</span> {error}
              </div>
            )}
            {success && (
              <div className={styles.signupSuccess}>
                <span className={styles.spinner}></span>
                {success}
              </div>
            )}
          </form>
          <div className={styles.signupLinks}>
            <Link href="/login" className={styles.signupLink}>
              Já tem uma conta? Entre
            </Link>
          </div>
        </div>
        <div className={styles.signupRight}>
          <img
            src="https://i.pinimg.com/736x/6a/c5/62/6ac56232b8f71e2d18e46dbc65470b1e.jpg"
            alt="Borboleta"
            className={styles.signupImage}
          />
        </div>
      </div>
    </div>
  );
}