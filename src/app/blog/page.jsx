"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import styles from "./blog.module.css";

// Importando componentes necessários
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import ArticleCard from "../components/articleCard";


export default function Blog() {

  const categorias = ["Todos", "Skincare", "Corpo", "Maquiagem"];
  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  // Dados dos cards de artigos 
  const cardsArticles = [
  {
    id: "1",
    capa: "https://framerusercontent.com/images/MNfy6QCYPIHXneNVGU628aift0.jpg",
    titulo: "Cuidados com o Corpo",
    descricao: "Descubra como manter seu corpo saudável e hidratado.",
    categoria: "Corpo",
    corCategoria: "#DBBD9C",
    caminhoPage: "/pagesArticles/articleBlog1"
  },
  {
    id: "2",
    capa: "https://www.clinicaleger.com.br/wp-content/uploads/2020/01/rotina-skincare-cuidados-com-a-pele.jpg",
    titulo: "Dicas para uma Pele Saudável",
    descricao: "Aprenda como cuidar da sua pele com essas dicas incríveis.",
    categoria: "Skincare",
    corCategoria: "#5FCED4",
    caminhoPage: "/pagesArticles/articleBlog2"
  },
  {
    id: "3",
    capa: "https://www.atribuna.com.br/image/policy:1.460176:1746215469/image.jpg",
    titulo: "Maquiagem para o Dia a Dia",
    descricao: "Dicas de maquiagem simples e práticas para o dia a dia.",
    categoria: "Maquiagem",
    corCategoria: "#F05080",
    caminhoPage: "/pagesArticles/articleBlog3"
  },
  {
    id: "4",
    capa: "https://areademulher.r7.com/wp-content/uploads/2020/03/skincare-o-que-fazer-dicas-e-truques-para-voce-aprender-a-cuidar-da-pele-6.jpg",
    titulo: "Rotina de Beleza",
    descricao: "Saiba como criar uma rotina de beleza eficiente.",
    categoria: "Skincare",
    corCategoria: "#5FCED4",
    caminhoPage: "/articleBlog/4"
  },
  {
    id: "5",
    capa: "https://amaro.com/cdn/shop/articles/AMARO-Inspira-destaque-wide-1-1.png?v=1699387363",
    titulo: "Hidratação no Inverno",
    descricao: "Dicas de produtos e hábitos para manter sua pele hidratada no frio.",
    categoria: "Skincare",
    corCategoria: "#5FCED4",
    caminhoPage: "/articleBlog/5"
  },
  {
    id: "6",
    capa: "https://s.zst.com.br/cms-assets/2022/05/autocuidado-feminino.webp",
    titulo: "Autocuidado e Bem-Estar",
    descricao: "Entenda como o autocuidado impacta sua saúde mental e física.",
    categoria: "Corpo",
    corCategoria: "#DBBD9C",
    caminhoPage: "/articleBlog/6"
  },
  {
    id: "9",
    capa: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXebSTB6yQ87o627O6Lhfq2Ew9va-CGLRFhRBQOUnkqOuEsw7rBUxwpQWpsQvFPLHWQNGlGtD9WwMNScHGC_gAZGouihsA7Fsbj5C2p3S757WlbeOB-_sgr4jhqGXzonogBOnkLTftdUwyx6M3lYMZvm6hho?key=bmxPeOa_dLzUHIBo3SYHOg",
    titulo: "Como Remover a Maquiagem Corretamente",
    descricao: "Passo a passo para limpar sua pele sem agredi-la.",
    categoria: "Skincare",
    corCategoria: "#5FCED4",
    caminhoPage: "/articleBlog/9"
  },
  {
    id: "7",
    capa: "https://blog.oceane.com.br/wp-content/uploads/2024/02/409_rosa_noiva.jpg",
    titulo: "Maquiagem para Festas",
    descricao: "Arrase nas festas com essas inspirações de make incríveis!",
    categoria: "Maquiagem",
    corCategoria: "#F05080",
    caminhoPage: "/articleBlog/7"
  },
  {
    id: "10",
    capa: "https://www.minasbanheiras.com.br/wp-content/uploads/2022/07/SPA-day-em-casa-como-fazer.jpg",
    titulo: "Relaxamento e Spa em Casa",
    descricao: "Transforme sua casa em um spa com essas dicas deliciosas.",
    categoria: "Corpo",
    corCategoria: "#DBBD9C",
    caminhoPage: "/articleBlog/10"
  },
  {
    id: "11",
    capa: "https://www.janpodologia.com.br/img/produtos/design-de-sobrancelha.webp",
    titulo: "Sobrancelhas Perfeitas",
    descricao: "Aprenda truques para deixar suas sobrancelhas alinhadas e naturais.",
    categoria: "Maquiagem",
    corCategoria: "#F05080",
    caminhoPage: "/articleBlog/11"
  },
  {
    id: "12",
    capa: "https://www.assai.com.br/sites/default/files/mulher_negra_sorrindo_segurando_laranjas_nas_maos_-_beleza_e_alimentacao_-_assai_atacadista.jpg",
    titulo: "Alimentação e Beleza",
    descricao: "Veja como a sua alimentação influencia diretamente na sua pele e cabelo.",
    categoria: "Corpo",
    corCategoria: "#DBBD9C",
    caminhoPage: "/articleBlog/12"
  },
  {
    id: "15",
    capa: "https://lunetas.com.br/wp-content/uploads/2025/01/protetor-solar-10-perguntas-sobre-como-usar-e-qual-escolher-portal-lunetas.jpg",
    titulo: "Protetor Solar: Uso Diário",
    descricao: "Entenda por que o protetor solar é essencial até nos dias nublados.",
    categoria: "Skincare",
    corCategoria: "#5FCED4",
    caminhoPage: "/articleBlog/15"
  },
];

  // Mapeamento de cores por categoria
  const coresCategoria = {
    Todos: "#00DAC7",
    Skincare: "#5FCED4",
    Corpo: "#DBBD9C",
    Maquiagem: "#F05080",
  };
  const corAtual = coresCategoria[categoriaSelecionada] || "#00DAC7";

  // Filtro de busca e categoria para os cards
  const filteredCards = cardsArticles.filter((card) => {
    const buscaLower = busca.toLowerCase();
    const matchBusca =
      card.titulo.toLowerCase().includes(buscaLower) ||
      card.descricao.toLowerCase().includes(buscaLower);
    const matchCategoria =
      categoriaSelecionada === "Todos" ||
      card.categoria.toLowerCase() === categoriaSelecionada.toLowerCase();
    return matchBusca && matchCategoria;
  });

  return (
    <div>
      <Header corHeader={corAtual} />

      <Hero
        linkImage={"https://i.pinimg.com/736x/cc/d7/f1/ccd7f15523a1891ec4b20fc2002221c4.jpg"}
        heroTitulo={"Conheça dicas incríveis!!"}
        heroTexto={
          "Aqui, você encontrará dicas, tendências e informações sobre skincare, produtos de beleza e cuidados com o corpo. Nosso objetivo é ajudar você a escolher os melhores produtos para a sua rotina, entender os ingredientes e descobrir novas formas de cuidar da sua pele. Fique por dentro das novidades e aproveite nossas recomendações para realçar sua beleza da melhor forma!"
        }
        corBotao={corAtual}
        corCategoria="#00DAC7"
      />

      {/* Barra de busca */}
      <div className={styles.searchBar} style={{ "--corAtual": corAtual }}>
        <FaSearch className={styles.searchBarIcon} />
        <input
          type="text"
          placeholder="Buscar artigos..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className={styles.searchBarInput}
        />
      </div>

      {/* Filtros de categoria */}
      <div className={styles.categoryFilters} style={{ "--corAtual": corAtual }}>
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            className={`${styles.categoryButton} ${categoriaSelecionada === cat ? styles.selected : styles.unselected}`}
          > {cat}
          </button>
        ))}
      </div>

      {/* Cards de artigos filtrados */}
      <div className={styles.cardsContainer}>
        {filteredCards.map((card) => (
          <ArticleCard
            key={card.id}
            caminhoPage={card.caminhoPage} 
            capa={card.capa}
            titulo={card.titulo}
            descricao={card.descricao}
            categoria={card.categoria}
            corCategoria={card.corCategoria}
          />
        ))}
      </div>

      <Footer corFooter={corAtual} />
    </div>
  );
}