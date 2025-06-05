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
    fetch("http://localhost:4000/products")
      .then((r) => r.json())
      .then((data) => {
        console.log("Produtos recebidos:", data); // Debug
        setProducts(data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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
    if (filter.categoria) filtered = filtered.filter((p) => p.categoria === filter.categoria);
    if (filter.marca) filtered = filtered.filter((p) => p.categoriaMarca === filter.marca);
    if (filter.precoMin) filtered = filtered.filter((p) => p.preco >= Number(filter.precoMin));
    if (filter.precoMax) filtered = filtered.filter((p) => p.preco <= Number(filter.precoMax));
    // Aqui, usando comentários como "avaliação"
    if (filter.avaliacao) filtered = filtered.filter((p) => (p._count?.comentarios || 0) >= Number(filter.avaliacao));

    // Ordenação
    if (sort === "preco-asc") filtered = filtered.slice().sort((a, b) => a.preco - b.preco);
    if (sort === "preco-desc") filtered = filtered.slice().sort((a, b) => b.preco - a.preco);
    // Aqui, usando curtidas como "mais vendidos"
    if (sort === "mais-vendidos") filtered = filtered.slice().sort((a, b) => (b._count?.curtidas || 0) - (a._count?.curtidas || 0));
    // Aqui, usando comentários como "melhor avaliação"
    if (sort === "avaliacao") filtered = filtered.slice().sort((a, b) => (b._count?.comentarios || 0) - (a._count?.comentarios || 0));
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
      />

      <div className={styles.container}>
        <h1
          style={{
            fontFamily: "Caveat",
            fontSize: "54px",
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
          <input
            type="text"
            placeholder="Buscar por nome ou descrição..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className={styles.searchInput}
          />
          <select
            value={filter.categoria}
            onChange={(e) => {
              setFilter((f) => ({ ...f, categoria: e.target.value }));
              setPage(1);
            }}
            className={styles.select}
          >
            <option value="">Todas as categorias</option>
            <option value="Skincare">Skincare</option>
            <option value="Make">Make</option>
            <option value="Body">Body</option>
          </select>
          <select
            value={filter.marca}
            onChange={(e) => {
              setFilter((f) => ({ ...f, marca: e.target.value }));
              setPage(1);
            }}
            className={styles.select}
          >
            <option value="">Todas as marcas</option>
            {marcas.map((marca) => (
              <option key={marca} value={marca}>
                {marca}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Preço mín."
            value={filter.precoMin}
            onChange={(e) => {
              setFilter((f) => ({ ...f, precoMin: e.target.value }));
              setPage(1);
            }}
            className={styles.priceInput}
            min={0}
          />
          <input
            type="number"
            placeholder="Preço máx."
            value={filter.precoMax}
            onChange={(e) => {
              setFilter((f) => ({ ...f, precoMax: e.target.value }));
              setPage(1);
            }}
            className={styles.priceInput}
            min={0}
          />
          <select
            value={filter.avaliacao}
            onChange={(e) => {
              setFilter((f) => ({ ...f, avaliacao: e.target.value }));
              setPage(1);
            }}
            className={styles.select}
          >
            <option value="">Todas avaliações</option>
            <option value="1">1+ comentário</option>
            <option value="2">2+ comentários</option>
            <option value="3">3+ comentários</option>
            <option value="4">4+ comentários</option>
            <option value="5">5+ comentários</option>
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className={styles.select}
          >
            <option value="novidades">Novidades</option>
            <option value="preco-asc">Preço: menor para maior</option>
            <option value="preco-desc">Preço: maior para menor</option>
            <option value="mais-vendidos">Mais curtidos</option>
            <option value="avaliacao">Mais comentados</option>
          </select>
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
              />
              {/* Botão de favorito */}
              <button
                className={`${styles.favoriteBtn} ${
                  favorites.includes(product.id) ? styles.favorited : ""
                }`}
                onClick={() => toggleFavorite(product.id)}
                title={
                  favorites.includes(product.id)
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"
                }
              >
                {favorites.includes(product.id) ? "❤️" : "🤍"}
              </button>
              {/* Avaliação em estrelas (baseada em comentários só para visual) */}
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < Math.min(5, product._count?.comentarios || 0) ? "★" : "☆"}
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