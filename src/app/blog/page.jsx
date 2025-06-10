"use client";

import React, { useState } from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import { FaSearch } from "react-icons/fa";
import styles from "./blog.module.css";
import ArticleCard from "../components/articleCard";


export default function Blog() {
  const categorias = ["Todos", "Skincare", "Corpo", "Maquiagem"];
  const [busca, setBusca] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  // Dados mockados dos cards
  const mockCardData = [
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
      capa: "https://i.pinimg.com/736x/7f/d7/e7/7fd7e767b928003f10ad3e0ff2174e00.jpg",
      titulo: "Dicas de Skincare",
      descricao: "Aprenda como cuidar da sua pele com essas dicas incríveis.",
      categoria: "Skincare",
      corCategoria: "#5FCED4",
      caminhoPage: "/pagesArticles/articleBlog2", 
    },
    {
      id: "3",
      capa: "https://i.pinimg.com/736x/78/34/31/783431b84e01cbd27c5f7a6b43e5a95b.jpg",
      titulo: "Maquiagem para o Dia a Dia",
      descricao: "Dicas de maquiagem simples e práticas para o dia a dia.",
      categoria: "Maquiagem",
      corCategoria: "#F05080",
      caminhoPage: "/articleBlog/3", // Link para a página específica
    },
    {
      id: "4",
      capa: "https://i.pinimg.com/736x/78/34/31/783431b84e01cbd27c5f7a6b43e5a95b.jpg",
      titulo: "Rotina de Beleza",
      descricao: "Saiba como criar uma rotina de beleza eficiente.",
      categoria: "Skincare",
      corCategoria: "#5FCED4",
      caminhoPage: "/articleBlog/4", // Link para a página específica
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
  const filteredCards = mockCardData.filter((card) => {
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
        linkImage={
          "https://i.pinimg.com/736x/cc/d7/f1/ccd7f15523a1891ec4b20fc2002221c4.jpg"
        }
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
      <div
        className={styles.categoryFilters}
        style={{ "--corAtual": corAtual }}
      >
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            className={`${styles.categoryButton} ${categoriaSelecionada === cat ? styles.selected : styles.unselected
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.cardsContainer}>
        {filteredCards.map((card) => (
          <ArticleCard
            key={card.id}
            caminhoPage={card.caminhoPage} // Passa o link específico
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