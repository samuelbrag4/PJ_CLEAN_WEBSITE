"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import SectionCards from "../components/sectionCards";
import Footer from "../components/footer";
import { FaSearch } from "react-icons/fa";
import ArticlesCarousel from "../components/articlesCarousel";
import styles from "./blog.module.css"; // Importando o CSS específico para o Blog

export default function Blog() {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");
  const categorias = ["Todos", "Skincare", "Corpo", "Maquiagem"];
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  // Mapeamento de cores por categoria
  const coresCategoria = {
    Todos: "#00DAC7",
    Skincare: "#5FCED4",
    Corpo: "#DBBD9C",
    Maquiagem: "#F05080",
  };
  const corAtual = coresCategoria[categoriaSelecionada] || "#00DAC7";

  useEffect(() => {
    fetch("https://clean-2tds.coolify.fps92.dev/blogcards")
      .then((res) => res.json())
      .then((data) => {
        setCardData(data.cards);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          fontSize: "1.3rem",
          color: corAtual,
        }}
      >
        Buscando dicas e artigos para você...
      </div>
    );

  // Filtro de busca e categoria para os cards
  const filteredCards = cardData.filter((card) => {
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
        textoPrimeiroBotao={"Dicas"}
        corBotao={corAtual}
        textoSegundoBotao={"Vídeos"}
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
            className={`${styles.categoryButton} ${
              categoriaSelecionada === cat ? styles.selected : styles.unselected
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carrossel de artigos */}
      <ArticlesCarousel articles={cardData} />

      {/* Cards filtrados */}
      <SectionCards
        corBotao={corAtual}
        corTextoBotao={"#fff"}
        cardData={filteredCards}
      />

      <Footer corFooter={corAtual} />
    </div>
  );
}
