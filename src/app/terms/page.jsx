"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./terms.module.css";

export default function Terms() {
  return (
    <div>
      <Header corHeader="#F05080" />
      <main className={styles.container}>
        <h1 className={styles.title}>Termos de Uso</h1>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>1. Responsabilidade pelos Produtos</h2>
          <p className={styles.text}>
            Nós não nos responsabilizamos pelos produtos recomendados em nossa plataforma. A responsabilidade pelos produtos é exclusivamente dos vendedores.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>2. Uso do Email</h2>
          <p className={styles.text}>
            Ao se inscrever, o usuário aceita que podemos enviar emails para ele. O email será usado unicamente para esse propósito e não será compartilhado com terceiros.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>3. Informações de Login</h2>
          <p className={styles.text}>
            Não compartilharemos o email ou as informações de login do usuário com terceiros.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>4. Exclusão de Conta</h2>
          <p className={styles.text}>
            A conta do usuário não pode ser apagada diretamente pelo sistema. No entanto, o usuário pode entrar em contato conosco para solicitar a exclusão de sua conta em nosso banco de dados.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>5. Segurança dos Dados</h2>
          <p className={styles.text}>
            Todos os dados fornecidos pelo usuário são armazenados de forma segura e sigilosa.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>6. Comentários</h2>
          <p className={styles.text}>
            É proibido que usuários façam comentários preconceituosos. Os comentários devem ser exclusivamente sobre os produtos.
          </p>
        </section>
      </main>
      <Footer corFooter="#F05080" />
    </div>
  );
}