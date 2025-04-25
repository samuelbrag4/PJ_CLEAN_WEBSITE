import styles from "./testimonials.module.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Clara",
      text: "Minha pele nunca esteve tão bonita! As dicas e produtos recomendados aqui são incríveis.",
    },
    {
      name: "João Pedro",
      text: "Descobri meu tipo de pele e agora sei exatamente como cuidar dela. Obrigado!",
    },
    {
      name: "Mariana Silva",
      text: "Adorei as promoções e os artigos. Tudo muito bem explicado e fácil de entender.",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>O que nossos clientes dizem</h2>
      <div className={styles.cards}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.text}>"{testimonial.text}"</p>
            <p className={styles.name}>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}