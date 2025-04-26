"use client";

import styles from './page.module.css';
import Link from 'next/link';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    console.log("Redirecionando para a página inicial...");
    router.push('/home'); // Redireciona para a página "home"
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
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              className={styles.signupInput}
            />
            <button
              type="submit"
              className={styles.signupButton}
            >
              Entrar
            </button>
          </form>
          <div className={styles.signupDivider}>ou</div>
          <button className={styles.signupSocialButton}>
            <FaGoogle className={styles.iconGoogle} size={30} /> Entre com o Google
          </button>
          <button className={styles.signupSocialButton}>
            <FaFacebook className={styles.iconFacebook} size={30} /> Entre com o Facebook
          </button>
          <p className={styles.signupFooter}>
            Não tem uma conta?{' '}
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