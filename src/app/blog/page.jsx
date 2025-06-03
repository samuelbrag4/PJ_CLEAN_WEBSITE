"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import SectionCards from "../components/sectionCards";
import CategoryBlog from "../components/categoryBlog";
import Footer from "../components/footer";
import { FaSearch } from "react-icons/fa";
import ArticlesCarousel from "../components/articlesCarousel";

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
    Maquiagem: "#F05080"
  };
  const corAtual = coresCategoria[categoriaSelecionada] || "#00DAC7";

  // Dados das categorias para CategoryBlog
  const categoryBlogs = [
    {
      linkImagem: "https://oxioz.com.br/wp-content/uploads/2024/02/rotina-skincare-cuidados-com-a-pele.jpg",
      textoAlt: "Mulher com uma toca na cabeça passando creme no rosto",
      titulo: "Skincare",
      texto: "Cuidar da pele vai muito além da estética—é uma forma de mantê-la saudável e protegida. O skincare ajuda a prevenir o envelhecimento precoce, controla a oleosidade, combate o ressecamento e protege contra agressões externas, como poluição e raios solares. Com uma rotina simples, você pode manter a pele equilibrada e radiante todos os dias.",
      background: "linear-gradient(to bottom, #ffffff, #5FCED4, #ffffff)"
    },
    {
      linkImagem: "https://lucianagarbelini.com.br/wp-content/uploads/2022/10/cuidado-com-as-pernas-pele.jpg",
      textoAlt: "Pernas de uma mulher com a pele hidratada",
      titulo: "Corpo",
      texto: "Hidratar, esfoliar e proteger a pele do corpo são hábitos fundamentais para mantê-la macia, firme e saudável. Produtos como hidratantes, óleos corporais e protetores solares ajudam a evitar o ressecamento, a flacidez e os danos causados pelo sol. Além da estética, cuidar da pele do corpo proporciona uma sensação de bem-estar e relaxamento no dia a dia.",
      background: "linear-gradient(to bottom, #ffffff, #DBBD9C, #ffffff)"
    },
    {
      linkImagem: "https://media.istockphoto.com/id/1149187294/pt/foto/going-for-that-natural-no-makeup-look.jpg?s=612x612&w=0&k=20&c=QqCG6aS2LzTHpFMY8jeRzqNhV7NBU4gyOdzq6-A9RvM=",
      textoAlt: "Mulher maquiada com aparência natural",
      titulo: "Maquiagem",
      texto: "A maquiagem realça a beleza e aumenta a autoestima, mas a escolha dos produtos certos faz toda a diferença. Usar maquiagens de qualidade evita irritações, alergias e até problemas mais sérios na pele. Além disso, produtos bem formulados garantem um acabamento mais bonito e duradouro, deixando sua make impecável sem prejudicar a saúde da pele.",
      background: "linear-gradient(to bottom, #ffffff,#F05080, #ffffff)"
    }
  ];

  useEffect(() => {
    fetch("http://localhost:4000/blogcards")
      .then((res) => res.json())
      .then((data) => {
        setCardData(data.cards);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "2rem", fontSize: "1.3rem", color: corAtual }}>
        Buscando dicas e artigos para você...
      </div>
    );

  // Filtro de busca e categoria para os cards
  const filteredCards = cardData.filter(card => {
    const buscaLower = busca.toLowerCase();
    const matchBusca =
      card.titulo.toLowerCase().includes(buscaLower) ||
      card.descricao.toLowerCase().includes(buscaLower);
    const matchCategoria =
      categoriaSelecionada === "Todos" || card.categoria.toLowerCase() === categoriaSelecionada.toLowerCase();
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
      <div
        style={{
          width: "80%",
          margin: "2.5rem auto 0 auto",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          background: corAtual,
          borderRadius: "2rem",
          padding: "0.8rem 2rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        }}
      >
        <FaSearch style={{ color: "#fff", fontSize: "1.5rem" }} />
        <input
          type="text"
          placeholder="Buscar artigos..."
          value={busca}
          onChange={e => setBusca(e.target.value)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            color: "#fff",
            fontSize: "1.1rem",
          }}
        />
      </div>

      {/* Filtros de categoria */}
      <div style={{
        width: "80%",
        margin: "2rem auto 0 auto",
        display: "flex",
        gap: "1rem",
        justifyContent: "center"
      }}>
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            style={{
              fontFamily: 'Inter, sans-serif',
              background: categoriaSelecionada === cat ? corAtual : "#fff",
              color: categoriaSelecionada === cat ? "#fff" : corAtual,
              border: `2px solid ${corAtual}`,
              borderRadius: "2rem",
              padding: "0.5rem 1.5rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carrossel de artigos */}
      <ArticlesCarousel articles={cardData} />

      {/* Sessão de categorias (CategoryBlog) */}
      <div style={{
        width: "80%",
        margin: "2rem auto 0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
      }}>
        {categoryBlogs
          .filter(cat =>
            categoriaSelecionada === "Todos" ||
            cat.titulo.toLowerCase() === categoriaSelecionada.toLowerCase()
          )
          .map(cat => (
            <CategoryBlog key={cat.titulo} {...cat} />
          ))}
      </div>

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