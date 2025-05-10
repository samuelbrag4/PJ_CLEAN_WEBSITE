"use client";

import { useEffect, useState } from "react";
import styles from "./testimonials.module.css";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Buscar avaliações do site no backend
    fetch("http://localhost:4000/avaliacoes/site")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data); // Atualiza o estado com as avaliações
      })
      .catch((error) => {
        console.error("Erro ao buscar avaliações:", error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Troca de card a cada 4 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [testimonials.length]);

  if (testimonials.length === 0) {
    return (
      <section className={styles.testimonials}>
        <h2 className={styles.title}>O que nossos clientes dizem</h2>
        <p className={styles.subtitle}>
          Veja como nossos serviços e produtos transformaram a vida de nossos
          clientes.
        </p>
        <p className={styles.noReviews}>Nenhuma avaliação disponível no momento.</p>
      </section>
    );
  }

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>O que nossos clientes dizem</h2>
      <p className={styles.subtitle}>
        Veja como nossos serviços e produtos transformaram a vida de nossos
        clientes.
      </p>
      <div className={styles.carousel}>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`${styles.card} ${
              index === currentIndex
                ? styles.active
                : index === (currentIndex + 1) % testimonials.length ||
                  index === (currentIndex - 1 + testimonials.length) %
                    testimonials.length
                ? styles.visible
                : styles.inactive
            }`}
          >
            <img
              src={testimonial.fotoUsuario || "https://via.placeholder.com/80"}
              alt={`Foto de ${testimonial.nomeUsuario}`}
              className={styles.image}
            />
            <p className={styles.text}>"{testimonial.comentario}"</p>
            <p className={styles.name}>- {testimonial.nomeUsuario}</p>
            <p className={styles.stars}>
              {"★".repeat(testimonial.nota)}
              {"☆".repeat(5 - testimonial.nota)}
            </p>
            <p className={styles.date}>
              {new Date(testimonial.createdAt).toLocaleDateString("pt-BR")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}