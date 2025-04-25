"use client";

import { useEffect, useState } from "react";
import styles from "./testimonials.module.css";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Ana Clara",
      text: "Minha pele nunca esteve tão bonita! As dicas e produtos recomendados aqui são incríveis.",
      stars: 5,
      date: "10/04/2025",
    },
    {
      name: "João Pedro",
      text: "Descobri meu tipo de pele e agora sei exatamente como cuidar dela. Obrigado!",
      stars: 4,
      date: "08/04/2025",
    },
    {
      name: "Mariana Silva",
      text: "Adorei as promoções e os artigos. Tudo muito bem explicado e fácil de entender.",
      stars: 5,
      date: "05/04/2025",
    },
    {
      name: "Lucas Almeida",
      text: "Os produtos recomendados realmente funcionam. Estou muito satisfeito!",
      stars: 4,
      date: "02/04/2025",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Troca de card a cada 4 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [testimonials.length]);

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>O que nossos clientes dizem</h2>
      <div className={styles.carousel}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
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
            <p className={styles.text}>"{testimonial.text}"</p>
            <p className={styles.name}>- {testimonial.name}</p>
            <p className={styles.stars}>
              {"★".repeat(testimonial.stars)}
              {"☆".repeat(5 - testimonial.stars)}
            </p>
            <p className={styles.date}>{testimonial.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}