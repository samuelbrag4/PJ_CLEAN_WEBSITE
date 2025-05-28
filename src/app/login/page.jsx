"use client";

import styles from "./login.module.css";
import Link from "next/link";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const { login, loading } = useAuth();
  const [form, setForm] = useState({ email: "", senha: "" }); // <-- senha!
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
    if (success) setSuccess("");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!form.email || !form.senha) { // <-- senha!
      setError("Preencha todos os campos.");
      return;
    }
    const result = await login(form.email, form.senha); // <-- senha!
    if (!result.success) {
      setError(result.message || "Credenciais inválidas.");
    } else {
      setSuccess("Login realizado com sucesso! Redirecionando...");
      setTimeout(() => {
        router.push("/account");
      }, 1500);
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <div className={styles.signupLeft}>
          <h2 className={styles.signupTitle}>Entre</h2>
          <form className={styles.signupForm} onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className={styles.signupInput}
              value={form.email}
              onChange={handleChange}
              disabled={loading}
              autoComplete="email"
            />
            <input
              type="password"
              name="senha" // <-- senha!
              placeholder="Senha"
              className={styles.signupInput}
              value={form.senha}
              onChange={handleChange}
              disabled={loading}
              autoComplete="current-password"
            />
            <button type="submit" className={styles.signupButton} disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </button>
            {error && <div className={styles.signupError}>{error}</div>}
            {success && <div className={styles.signupSuccess}>{success}</div>}
          </form>
          <div className={styles.signupDivider}>ou</div>
          <button className={styles.signupSocialButton} disabled>
            <FaGoogle className={styles.iconGoogle} size={30} /> Entre com o Google
          </button>
          <button className={styles.signupSocialButton} disabled>
            <FaFacebook className={styles.iconFacebook} size={30} /> Entre com o Facebook
          </button>
          <p className={styles.signupFooter}>
            Não tem uma conta?{" "}
            <Link href="/signup" className={styles.signupLink}>
              Cadastre-se
            </Link>
          </p>
        </div>
        <div className={styles.signupRight}>
          <img
            src="https://s3-alpha-sig.figma.com/img/a93f/0296/ff02eadcfd9782ef4742ec1f69e85aac?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gbmt-yeZOhtZRorTc0eB86s-tbx9umkIaJ9YodBB7Iyhl9tlEEC2tPQvqdbRuvOZgYN1ANSRePIzgvqxo3jxNkivusQCe7jP72xW97GaMopvpv7qmbSynQdKEw5VE4mvE44HqkPmf2vYHU36hOXkh-vXtgd-M1mmGo~4yBFGR0LdxZ5WT10K12sQH5OOkWrPI6GY6UyFcn9CysSzwWc8I~naJGsX087S85EeJmQ6o2FkBzdzFlQYDmTvI-G5yJZTBkerPgxuAEe2dQrbRJ6U7Pgpg-suxllqZDrZhNChZgNFqX1ZTue0mjGfyAYpM9ECrQ56EXnGXmA0~oBlZDg17w__"
            alt="Borboleta"
            className={styles.signupImage}
          />
        </div>
      </div>
    </div>
  );
}