"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";
import {
  FaHome,
  FaShoppingBag,
  FaMobileAlt,
  FaPhone,
  FaUser,
  FaSpa,
  FaMale,
  FaPaintBrush,
  FaFileAlt,
} from "react-icons/fa";

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

      {/* Menu Hambúrguer */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Popup Lateral */}
      <div
        className={`${styles.sidebar} ${isMenuActive ? styles.active : ""}`}
        style={{ backgroundColor: corHeader }}
      >
        <nav className={styles.nav}>
          <Link href="/home" className={styles.navText}>
            <FaHome className={styles.icon} /> Home
          </Link>
          <Link href="/products" className={styles.navText}>
            <FaShoppingBag className={styles.icon} /> Produtos
          </Link>
          <Link href="/blog" className={styles.navText}>
            <FaMobileAlt className={styles.icon} /> Blog
          </Link>
          <Link href="/contact" className={styles.navText}>
            <FaPhone className={styles.icon} /> Contato
          </Link>
          <Link href="/account" className={styles.navText}>
            <FaUser className={styles.icon} /> Minha Conta
          </Link>
          <Link href="/skincare" className={styles.navText}>
            <FaSpa className={styles.icon} /> Skincare
          </Link>
          <Link href="/body" className={styles.navText}>
            <FaMale className={styles.icon} /> Corpo
          </Link>
          <Link href="/makeup" className={styles.navText}>
            <FaPaintBrush className={styles.icon} /> Maquiagem
          </Link>
          <Link href="/terms" className={styles.navText}>
            <FaFileAlt className={styles.icon} /> Termos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
