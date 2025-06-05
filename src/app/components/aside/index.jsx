"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faComment,
  faSignOutAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../aside/aside.module.css";

export default function AsideAccount({
  userData,
  getInitials,
  formatDate,
  handleLogout,
  handleDeleteAccount,
}) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.avatarWrapper}>
        {userData?.fotoPerfil ? (
          <img
            src={userData.fotoPerfil}
            alt="Foto do usuário"
            className={styles.userImage}
          />
        ) : (
          <div className={styles.avatarCircle}>
            {getInitials(userData?.nome)}
          </div>
        )}
      </div>
      <h2 className={styles.userName}>
        {userData?.nome || "Carregando..."}
      </h2>
      <div className={styles.memberSince}>
        Membro desde: {formatDate(userData?.createdAt)}
      </div>
      <nav className={styles.navLinks}>
        <Link href="/account">
          <button className={styles.navButton} title="Meu Cadastro">
            <FontAwesomeIcon icon={faUser} /> Meu Cadastro
          </button>
        </Link>
        <Link href="/likes">
          <button className={styles.navButton} title="Meus Favoritos">
            <FontAwesomeIcon icon={faHeart} /> Meus Favoritos
          </button>
        </Link>
        <Link href="/comments">
          <button className={styles.navButton} title="Meus Comentários">
            <FontAwesomeIcon icon={faComment} /> Meus Comentários
          </button>
        </Link>
      </nav>
      <button
        className={styles.logoutButton}
        onClick={handleLogout}
        title="Sair da conta"
      >
        <FontAwesomeIcon icon={faSignOutAlt} /> Sair
      </button>
      <button
        className={styles.deleteButton}
        onClick={handleDeleteAccount}
        title="Excluir conta"
      >
        <FontAwesomeIcon icon={faTrash} /> Excluir Conta
      </button>
    </aside>
  );
}