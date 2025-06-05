"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./article.module.css";

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function ArticlePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const articleId = searchParams.get("id"); // ou use [id] na rota dinâmica

  const [artigo, setArtigo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!articleId) return;
    fetch(`https://clean-2tds.coolify.fps92.dev/artigos/${articleId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setArtigo(data.artigo || data); // ajuste conforme resposta da sua API
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setLoading(false);
      });
  }, [articleId]);

  if (loading) {
    return (
      <div className={styles.loading}>
        Carregando artigo...
      </div>
    );
  }

  if (!artigo) {
    return (
      <div className={styles.notFound}>
        Artigo não encontrado.
        <button className={styles.backBtn} onClick={() => router.back()}>
          Voltar
        </button>
      </div>
    );
  }

  // Fontes pode ser string separada por vírgula ou JSON
  let fontes = [];
  try {
    fontes = Array.isArray(JSON.parse(artigo.fontes))
      ? JSON.parse(artigo.fontes)
      : artigo.fontes.split(",");
  } catch {
    fontes = artigo.fontes ? artigo.fontes.split(",") : [];
  }

  return (
    <div>
      <Header corHeader="#00DAC7" />
      <main className={styles.articleMain}>
        <button className={styles.backBtn} onClick={() => router.back()}>
          ← Voltar
        </button>
        <div className={styles.articleCard}>
          {artigo.imagem && (
            <img
              src={artigo.imagem}
              alt={artigo.titulo}
              className={styles.articleImage}
            />
          )}
          <h1 className={styles.articleTitle}>{artigo.titulo}</h1>
          <p className={styles.articleDescription}>{artigo.descricao}</p>
          <div className={styles.metaInfo}>
            <span>
              Criado em: <b>{formatDate(artigo.createdAt)}</b>
            </span>
            <span>
              Atualizado em: <b>{formatDate(artigo.updatedAt)}</b>
            </span>
          </div>
          {fontes.length > 0 && (
            <div className={styles.fontes}>
              <span>Fontes:</span>
              <ul>
                {fontes.map((fonte, i) => (
                  <li key={i}>
                    <a href={fonte.trim()} target="_blank" rel="noopener noreferrer">
                      {fonte.trim()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
      <Footer corFooter="#00DAC7" />
      <style>{`
        .${styles.articleCard} {
          animation: fadeInUp 0.7s;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
}