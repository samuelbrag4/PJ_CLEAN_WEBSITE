"use client";

import styles from "./articleBlog.module.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { FaChevronLeft } from "react-icons/fa";
import ConteudoArticle from "../../components/contentArticle";
import VideosArticle from "../../components/videosArticle";
import BibliografiaArticle from "../../components/bibliographiaArticle";

export default function Article() {
  const conteudoProps = {
    tags: [
      { text: "Beleza", color: "#DBBD9C", background: "#ffe6cc" },
      { text: "Maquiagem", color: "#DBBD9C", background: "#ffe6cc" }
    ],
    date: "10 de junho de 2025",
    title: "Maquiagem para o Dia a Dia: Praticidade e Leveza",
    subtitle:
      "Descubra como realçar sua beleza natural com uma maquiagem leve e prática, ideal para o trabalho, faculdade ou compromissos diários.",
    imageSrc:
      "https://www.atribuna.com.br/image/policy:1.460176:1746215469/image.jpg",
    imageAlt: "Mulher aplicando maquiagem natural",
    paragraphs: [
      "A maquiagem para o dia a dia deve ser prática, leve e realçar os traços naturais. O objetivo é valorizar a beleza sem exageros, garantindo um visual fresco e adequado para qualquer ambiente.",
      "Com poucos produtos e técnicas simples, você pode montar uma rotina de maquiagem rápida que se adapta à sua rotina matinal."
    ],
    sectionTitle: "Passos para uma maquiagem diária perfeita",
    listItems: [
      "1. Comece com a pele limpa e hidratada.",
      "2. Use um protetor solar com cor ou BB Cream para uniformizar o tom da pele.",
      "3. Aplique corretivo apenas nas áreas necessárias, como olheiras ou espinhas.",
      "4. Dê um toque saudável com blush em tons suaves.",
      "5. Use máscara de cílios para abrir o olhar.",
      "6. Finalize com um batom nude ou lip tint para um ar natural."
    ],
    sectionTitleTwo: "Dicas extras para um visual leve e duradouro",
    paragraphsList: [
      "Evite o excesso de produtos em dias quentes para manter a pele confortável.",
      "Invista em produtos multifuncionais para economizar tempo e espaço no nécessaire.",
      "Tenha sempre lenços de papel ou pó compacto à mão para controlar a oleosidade ao longo do dia.",
      "Lembre-se: menos é mais quando se trata de maquiagem para o cotidiano. A ideia é realçar, não transformar."
    ]
  };

  const videos = [
    {
      url: "https://www.youtube.com/watch?v=7GwuOIBKpKM",
      thumb: "https://blog.oceane.com.br/wp-content/uploads/2024/02/290_clean_girl_exemplo.jpg"
    },
    {
      url: "https://www.youtube.com/watch?v=I4s1WH-gbtg",
      thumb: "https://blog.oceane.com.br/wp-content/uploads/2024/02/95_make_clean_clios_naturais.jpg"
    },
    {
        url: "https://www.youtube.com/watch?v=oq8Olx34oCQ",
        thumb: "https://blog.oceane.com.br/wp-content/uploads/2024/02/288_make_clean_delineador.jpg"
      }
  ];

  const links = [
    "https://www.sephora.com.br/lab/maquiagem-leve-para-o-dia-a-dia",
    "https://revistamarieclaire.globo.com/Beleza/noticia/2023/03/dicas-de-maquiagem-natural.html",
    "https://www.dicasdemulher.com.br/maquiagem-dia-a-dia/"
  ];

  return (
    <div className={styles.pageContainer}>
      <Header corHeader={"#DBBD9C"} />

      <main className={styles.mainContent}>
        <div className={styles.returnRow}>
          <a href="#" className={styles.returnLink}>
            <FaChevronLeft
              style={{ color: "#DBBD9C", marginRight: 6, fontSize: 18 }}
            />
            Retornar
          </a>
        </div>

        <ConteudoArticle {...conteudoProps} />

        <hr className={styles.divider} />

        <VideosArticle videos={videos} />

        <hr className={styles.divider} />

        <BibliografiaArticle links={links} corSeta={"#DBBD9C"} />

        <hr className={styles.divider} />
      </main>

      <Footer corFooter="#DBBD9C" />
    </div>
  );
}
