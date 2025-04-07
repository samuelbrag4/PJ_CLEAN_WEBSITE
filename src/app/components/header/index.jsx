'use client'; 

import Link from 'next/link';
import { useState } from 'react';
import styles from './header.module.css';

const Header = ({ corHeader }) => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <header className={styles.header} style={{ backgroundColor: corHeader }}>
            <section className={styles.logoTitulo}>
                <h1 className={styles.titulo}>Clean.</h1>
            </section>
            <nav className={`${styles.nav} ${isMenuActive ? styles.active : ''}`}>
                <Link href="/" className={styles.navText}>
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
            </nav>
            <div className={styles.hamburger} onClick={toggleMenu}>
                &#9776; 
            </div>
        </header>
    );
};

export default Header;
