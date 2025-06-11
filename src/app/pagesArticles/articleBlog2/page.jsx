"use client";

import styles from "./articleBlog2.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { FaChevronLeft } from "react-icons/fa";
import ConteudoArticle from "../../components/contentArticle";
import VideosArticle from "../../components/videosArticle";
import BibliografiaArticle from "../../components/bibliographiaArticle";
import { useRouter } from "next/navigation";

export default function Article() {

  const router = useRouter();

  const conteudoProps = {
    tags: [
      { text: "Beleza", color: "#5FCED4", background: "#9ef2f7" },
      { text: "Skincare", color: "#5FCED4", background: "#9ef2f7" },
    ],
    date: "10 de junho de 2025",
    title: "5 Dicas Essenciais de Skincare para uma Pele Saudável",
    subtitle:
      "Cuidar da pele é mais do que estética — é saúde. Descubra dicas práticas e acessíveis para manter sua pele bonita e protegida no dia a dia.",
    imageSrc:
      "https://www.clinicaleger.com.br/wp-content/uploads/2020/01/rotina-skincare-cuidados-com-a-pele-1200x675.jpg",
    imageAlt: "Rotina de cuidados com a pele",
    paragraphs: [
      "A rotina de skincare não precisa ser complexa ou cara. Com alguns passos simples e constância, é possível obter resultados visíveis e manter a pele saudável em qualquer fase da vida.",
      "Neste artigo, reunimos 5 dicas fundamentais para quem quer iniciar ou melhorar sua rotina de cuidados faciais, com foco em simplicidade, eficácia e bem-estar."
    ],
    sectionTitle: "Confira as dicas abaixo:",
    listItems: [
      "1. Limpeza adequada: lave o rosto duas vezes ao dia com um sabonete facial específico para seu tipo de pele.",
      "2. Hidratação: mesmo peles oleosas precisam de hidratação. Use hidratantes leves e oil-free, se necessário.",
      "3. Proteção solar: aplique protetor solar diariamente, mesmo em dias nublados ou dentro de casa.",
      "4. Evite tocar o rosto: as mãos acumulam sujeira e bactérias, o que pode causar espinhas e irritações.",
      "5. Tenha constância: skincare é um cuidado contínuo. Resultados duradouros vêm com o tempo e a disciplina."
    ],
    sectionTitleTwo: "Considerações finais",
    paragraphsList: [
      "Não existe uma fórmula única para todos, e sua pele pode mudar com o tempo, clima e outros fatores. Ouça o que ela precisa e ajuste sua rotina conforme necessário.",
      "Lembre-se: o mais importante é manter uma rotina realista que se encaixe no seu dia a dia. Comece com o básico e evolua com o tempo!"
    ]
  };

  const videos = [
    {
      url: "https://www.youtube.com/watch?v=BizbMuvcYNo",
      thumb: "https://ik.imagekit.io/goup/rufatto/wp-content/uploads/2022/10/Blog-02.png"
    },
    {
      url: "https://youtu.be/j4jrPoaxw1I?si=2ZXo066KMa2nRSQd",
      thumb: "https://img.youtube.com/vi/j4jrPoaxw1I/hqdefault.jpg"
    },
    {
      url: "https://www.youtube.com/watch?v=aLzyZKzmPgM",
      thumb: "https://draanecanevese.com.br/wp-content/uploads/2021/06/Sem-Titulo-3-optimized.jpg"
    }
  ];

  const links = [
    "https://www.dermatologia.net.br/artigos/skincare-basico",
    "https://www.sociedadebrasileiradermatologia.org.br/cuidados",
    "https://www.revistasuperinteressante.com.br/cuidados-com-a-pele"
  ];

  return (
    <div className={styles.pageContainer}>
      <Header corHeader={"#5FCED4"} />

      <main className={styles.mainContent}>
        <div className={styles.returnRow}>
          <a
            href="#"
            className={styles.returnLink}
            onClick={(e) => {
              e.preventDefault();
              router.back();
            }}
          >
            <FaChevronLeft style={{ color: "#5FCED4", marginRight: 6, fontSize: 18 }} />
            Retornar
          </a>
        </div>

        <ConteudoArticle {...conteudoProps} />

        <hr className={styles.divider} />

        <VideosArticle videos={videos} />

        <hr className={styles.divider} />

        <BibliografiaArticle links={links} corSeta={"#5FCED4"} />

        <hr className={styles.divider} />
      </main>

      <Footer corFooter="#5FCED4" />
    </div>
  );
}
