import styles from "./faqSection.module.css";

export default function FAQSection() {
  const faqs = [
    {
      question: "Como descobrir meu tipo de pele?",
      answer: "Você pode usar nosso formulário interativo para descobrir.",
    },
    {
      question: "Quais produtos são recomendados para pele oleosa?",
      answer: "Confira nossa seção de produtos para pele oleosa.",
    },
  ];

  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>Perguntas Frequentes</h2>
      <div className={styles.items}>
        {faqs.map((faq, index) => (
          <details key={index} className={styles.item}>
            <summary className={styles.question}>{faq.question}</summary>
            <p className={styles.answer}>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}