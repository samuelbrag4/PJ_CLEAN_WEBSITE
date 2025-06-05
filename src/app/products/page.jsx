"use client";

import { useEffect, useState, useMemo } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Card from "../components/card";
import styles from "./products.module.css";

const PRODUCTS_PER_PAGE = 10;

export default function Produtos() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Likes do usuário logado
  const [likes, setLikes] = useState([]); // <-- AGORA está dentro do componente

  // Busca, filtros e ordenação
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    categoria: "",
    marca: "",
    precoMin: "",
    precoMax: "",
    avaliacao: "",
  });
  const [sort, setSort] = useState("novidades");
  const [page, setPage] = useState(1);

  // Favoritos
  const [favorites, setFavorites] = useState(() =>
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("favorites") || "[]")
      : []
  );

  useEffect(() => {
    fetch("https://clean-2tds.coolify.fps92.dev/products")
      .then((r) => r.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Buscar likes do usuário logado ao carregar a página
  useEffect(() => {
    fetch("https://clean-2tds.coolify.fps92.dev/likes/user/me", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => setLikes(data.likes || []))
      .catch(() => setLikes([]));
  }, []);

  // Função para curtir/descurtir produto
  async function handleToggleLike(produtoId) {
    const like = likes.find((l) => l.produtoId === produtoId);
    const token = localStorage.getItem("token"); // <-- Pegue o token aqui, antes de usar!
    if (like) {
      // Descurtir
      await fetch(`https://clean-2tds.coolify.fps92.dev/likes/${like.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });
      setLikes((prev) => prev.filter((l) => l.id !== like.id));
    } else {
      // Curtir
      const res = await fetch("https://clean-2tds.coolify.fps92.dev/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({ produtoId }),
      });
      const data = await res.json();
      if (data.like) setLikes((prev) => [...prev, data.like]);
    }
  }

  // Salvar favoritos no localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Filtros e busca
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Busca por nome ou descrição
    if (search) {
      filtered = filtered.filter(
        (p) =>
          p.nome.toLowerCase().includes(search.toLowerCase()) ||
          p.descricao.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filtros avançados
    if (filter.categoria)
      filtered = filtered.filter((p) => p.categoria === filter.categoria);
    if (filter.marca)
      filtered = filtered.filter((p) => p.categoriaMarca === filter.marca);
    if (filter.precoMin)
      filtered = filtered.filter((p) => p.preco >= Number(filter.precoMin));
    if (filter.precoMax)
      filtered = filtered.filter((p) => p.preco <= Number(filter.precoMax));
    // Aqui, usando comentários como "avaliação"
    if (filter.avaliacao)
      filtered = filtered.filter(
        (p) => (p._count?.comentarios || 0) >= Number(filter.avaliacao)
      );

    // Ordenação
    if (sort === "preco-asc")
      filtered = filtered.slice().sort((a, b) => a.preco - b.preco);
    if (sort === "preco-desc")
      filtered = filtered.slice().sort((a, b) => b.preco - a.preco);
    // Aqui, usando curtidas como "mais vendidos"
    if (sort === "mais-vendidos")
      filtered = filtered
        .slice()
        .sort((a, b) => (b._count?.curtidas || 0) - (a._count?.curtidas || 0));
    // Aqui, usando comentários como "melhor avaliação"
    if (sort === "avaliacao")
      filtered = filtered
        .slice()
        .sort(
          (a, b) => (b._count?.comentarios || 0) - (a._count?.comentarios || 0)
        );
    // "novidades" = ordem original

    return filtered;
  }, [products, search, filter, sort]);

  // Paginação
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  // Marcas únicas para filtro
  const marcas = useMemo(
    () => [...new Set(products.map((p) => p.categoriaMarca))],
    [products]
  );

  // Favoritar produto
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  if (loading) {
    return <div className={styles.loadingContainer}>Carregando...</div>;
  }

  return (
    <>
      <Header corHeader={"#DBBD9C"} />
      <Hero
        linkImage={
          "https://i.pinimg.com/736x/9e/13/13/9e131361b677fcf08ceb74d7156d5636.jpg"
        }
        heroTitulo={"A Beleza Nunca Esteve Tão Próxima"}
        heroTexto={
          "Já sabe do que precisa, mas não tem ideia de onde comprar? Venha, vamos te ajudar! Aqui você encontrará produtos perfeitos para o que tem em mente."
        }
        textoPrimeiroBotao={"Ler Mais"}
        corBotao={"#DBBD9C"}
        textoSegundoBotao={"Sobre"}
      />

      <div className={styles.container}>
        <h1
          style={{
            fontFamily: "Caveat",
            fontSize: "64px",
            fontWeight: "700",
            lineHeight: "60px",
            textAlign: "center",
            color: "#DBBD9C",
            marginBottom: "2rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Nossos Produtos
        </h1>

        {/* Barra de busca e filtros */}
        <div className={styles.filtersBar}>
          {/* ...seus inputs e selects de filtro... */}
        </div>

        {/* Grid de produtos */}
        <div className={styles.productsGrid}>
          {paginatedProducts.length === 0 && (
            <div className={styles.noProducts}>
              Nenhum produto encontrado com os filtros atuais.
            </div>
          )}
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className={styles.cardWrapper}
              style={{
                animation: "fadeInUp 0.5s",
                position: "relative",
              }}
            >
              <Card
                capa={product.imagem || "https://via.placeholder.com/300x200"}
                textoAlt={product.nome}
                categoria={product.categoria}
                titulo={product.nome}
                descricao={product.descricao}
                caminhoArtigo={`/products/${product.id}`}
                corBorda={product.cor}
                corCategoria={product.cor}
                preco={product.preco}
                marca={product.categoriaMarca}
                avaliacao={product._count?.comentarios || 0}
                isLiked={!!likes.find((like) => like.produtoId === product.id)}
                onToggleLike={() => handleToggleLike(product.id)}
              />
              
              {/* Avaliação em estrelas (baseada em comentários só para visual) */}
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < Math.min(5, product._count?.comentarios || 0)
                      ? "★"
                      : "☆"}
                  </span>
                ))}
                <span className={styles.starsCount}>
                  ({product._count?.comentarios || 0})
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              {"<"}
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i + 1}
                className={page === i + 1 ? styles.activePage : ""}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              {">"}
            </button>
          </div>
        )}
      </div>
      <Footer corFooter={"#DBBD9C"} />
      {/* Animação CSS */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </>
  );
}
