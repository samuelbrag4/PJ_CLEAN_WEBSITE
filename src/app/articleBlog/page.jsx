"use client";
import styles from "./articleBlog.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaChevronLeft } from "react-icons/fa";
import ConteudoArticle from "../components/contentArticle";
import VideosArticle from "../components/videosArticle";
import BibliografiaArticle from "../components/bibliographiaArticle";

export default function Article() {

  const conteudoProps = {
    tags: ["Cuidado Diário", "Skincare"],
    date: "10 de junho de 2025",
    title: "Como cuidar da pele seca?",
    subtitle: "A pele seca pode causar desconforto, descamação e até irritações. Se você sente sua pele áspera ou sem vida, não se preocupe! Com alguns cuidados diários, é possível deixá-la hidratada e saudável.",
    imageSrc: "https://blog.farmadelivery.com.br/wp-content/uploads/2021/08/cuidados-com-pele-seca.jpg",
    imageAlt: "Cuidados com a pele seca",
    paragraphs: [
      "A pele seca pode causar desconforto, descamação e até irritações. Se você sente sua pele áspera ou sem vida, não se preocupe! Com alguns cuidados diários, é possível deixá-la hidratada e saudável.",
      "Os cuidados com a pele seca devem ser seguidos diariamente para garantir a boa hidratação, manter a barreira de proteção natural da pele e a renovação celular adequada."
    ],
    sectionTitle: "Principais características da pele seca",
    listItems: [
      "Pele mais áspera;",
      "Descamação leve ou grave da pele;",
      "Coceira excessiva;",
      "Pele esbranquiçada ou acinzentada;",
      "Líneas finas esbranquiçadas ou rachaduras;",
      "Manchas vermelhas na pele."
    ],
    sectionTitleTwo: "Cuidados com a pele seca",
    paragraphsList: [
      "Os principais cuidados com a pele seca são:",
      "1. Evitar o uso de buchas ou escovas de banho",
      "As buchas e as escovas de banho podem fornecer uma maior sensação de limpeza, no entanto, quando usadas diariamente ou com muita força, agem como um esfoliante que, se for feita diariamente, remove a camada protetora da pele, diminuindo sua umidade e deixando a pele seca.",
      "O ideal é não usar as buchas ou as escovas de banho todos os dias, usando-as apenas de 2 a 3 vezes por semana.",
      "2. Evitar banhos muito quentes",
      "Os banhos muito quentes ou muito demorados devem ser evitados pois temperaturas altas, geralmente acima de 38°C, retiram a oleosidade natural que faz parte da barreira protetora da pele, deixando-a seca e desidratada.",
      "Para evitar a remoção da oleosidade da pele, o recomendado é tomar banhos rápidos de no máximo de 5 minutos, com água morna ou mais fria, se possível, para evitar o ressecamento da pele."
    ]
  };

  const videos = [
    {
      url: "https://youtu.be/1chqi-nkUuw?si=ORo0Slu64MWx6ytE",
      thumb: "https://img.youtube.com/vi/1chqi-nkUuw/hqdefault.jpg"
    },
    {
      url: "https://youtu.be/eHpPc2V0N8E?si=jF5WZUXKnKt2si3y",
      thumb: "https://img.youtube.com/vi/eHpPc2V0N8E/hqdefault.jpg"
    },
    {
      url: "https://youtu.be/4XbevZb4Lwo?si=ht8jaL_hSU6xIOKR",
      thumb: "https://img.youtube.com/vi/4XbevZb4Lwo/hqdefault.jpg"
    }
  ];

  const links = [
    "https://www.fonte1vdhgvefwghvqgfvghwevgvdg.com.br",
    "https://www.fonte2ehwfbhqberhfwbegfebgqh3hvqr.com.br",
    "https://www.fonte3qrwefbvgqvergfugbuygbyu3wryfq3rdniqrfuqhiufiu.com.br"
  ];

  return (
    <div className={styles.pageContainer}>
      <Header corHeader={"#00B6C7"} />

      <main className={styles.mainContent}>
        <div className={styles.returnRow}>
          <a href="#" className={styles.returnLink}>
            <FaChevronLeft style={{ color: "#00B6C7", marginRight: 6, fontSize: 18 }} />
            Retornar
          </a>
        </div>

        <ConteudoArticle {...conteudoProps} />

        <hr className={styles.divider} />

        <VideosArticle videos={videos} />

        <hr className={styles.divider} />

        <BibliografiaArticle links={links} />

        <hr className={styles.divider} />

      </main>

      <Footer corFooter="#00B6C7" />
    </div>
  );
}