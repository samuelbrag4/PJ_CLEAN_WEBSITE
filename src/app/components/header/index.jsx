"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";

const Header = ({ corHeader }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className={styles.header} style={{ backgroundColor: corHeader }}>
      {/* Logo */}
      <section className={styles.logoTitulo}>
        <h1 className={styles.titulo}>Clean.</h1>
      </section>

      {/* Navegação */}
      <nav className={`${styles.nav} ${isMenuActive ? styles.active : ""}`}>
        <Link href="/home" className={styles.navText}>
          Home
        </Link>
        <Link href="/products" className={styles.navText}>
          Produtos
        </Link>
        <Link href="/blog" className={styles.navText}>
          Blog
        </Link>
        <Link href="/contact" className={styles.navText}>
          Contato
        </Link>
        <Link href="/account" className={styles.navText}>
          Minha Conta
        </Link>
        <Link href="/skincare" className={styles.navText}>
          Skincare
        </Link>
        <Link href="/body" className={styles.navText}>
          Corpo
        </Link>
        <Link href="/makeup" className={styles.navText}>
          Maquiagem
        </Link>
        <Link href="/terms" className={styles.navText}>
          Termos
        </Link>
      </nav>

      {/* Menu Hambúrguer */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </div>
    </header>
  );
};

export default Header;