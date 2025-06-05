"use client";

import { useState } from "react";
import styles from "./faqSection.module.css";
import Link from "next/link";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqs = [
    {
      question: "Vocês vendem ou produzem os produtos recomendados?",
      answer:
        "Não, nós apenas recomendamos produtos e damos dicas de beleza. Não somos vendedores nem produtores.",
    },
    {
      question: "Vocês possuem loja física?",
      answer:
        "Não, somos um grupo de estudantes que trabalha exclusivamente online para compartilhar dicas e recomendações.",
    },
    {
      question: "Vocês possuem certificações?",
      answer:
        "Não possuímos certificações. Nosso objetivo é compartilhar conhecimento e ajudar as pessoas a cuidarem melhor de si mesmas.",
    },
    {
      question: "Quem faz parte da equipe?",
      answer:
        "Somos um grupo de 7 estudantes do curso de Desenvolvimento de Sistemas do SENAI: Samuel Braga (P.O.), Jéssica Prestelo (Scrum Master), Fernanda Alves, Nathalia Santos, Gabriela Moleta, Alexandra Cristinha e Nicole Cau.",
    },
    {
      question: "Vocês têm um aplicativo?",
      answer:
        "Sim! Temos um aplicativo que complementa o site e oferece mais funcionalidades para nossos usuários.",
    },
    {
      question: "Como posso entrar em contato com vocês?",
      answer:
        "Você pode entrar em contato conosco através da seção 'Contato' no site ou pelo nosso aplicativo.",
    },
  ];

  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>Perguntas Frequentes</h2>
      <div className={styles.items}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              openIndex === index ? styles.itemActive : ""
            }`}
          >
            <div className={styles.question} onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span
                className={`${styles.icon} ${
                  openIndex === index ? styles.iconOpen : ""
                }`}
              >
                ▼
              </span>
            </div>
            {openIndex === index && (
              <div className={styles.answer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      
      <div className={styles.extra}>
        <p>Não encontrou o que procurava?</p>
        <Link href="/contact">
          <button className={styles.askButton}>
            Clique aqui para perguntar
          </button>
        </Link>
      </div>
    </section>
  );
}
