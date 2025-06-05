"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import styles from "./articleTeste.module.css";

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

const artigoFake = {
  titulo: "Como cuidar da pele no inverno",
  descricao:
    "No inverno, a pele tende a ficar mais ressecada devido ao clima frio e seco. Descubra dicas essenciais para manter sua pele hidratada e saudável durante a estação mais fria do ano.",
  imagem:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  fontes:
    "https://www.dermatologia.net,https://www.minhavida.com.br/beleza/tudo-sobre/19749-cuidados-com-a-pele-no-inverno",
  createdAt: "2024-06-01T10:00:00Z",
  updatedAt: "2024-06-05T15:30:00Z",
  autor: "Equipe Beleza+",
  categoria: "Cuidados com a Pele",
  tempoLeitura: "4 min",
  tags: ["inverno", "hidratação", "pele saudável"],
};

export default function ArticlePage() {
  let fontes = [];
  try {
    fontes = Array.isArray(JSON.parse(artigoFake.fontes))
      ? JSON.parse(artigoFake.fontes)
      : artigoFake.fontes.split(",");
  } catch {
    fontes = artigoFake.fontes ? artigoFake.fontes.split(",") : [];
  }

  return (
    <div>
      <Header corHeader="#00DAC7" />
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => window.history.back()}>
          <span className={styles.backIcon}>←</span> Voltar para artigos
        </button>
      </div>
      <main className={styles.articleMain}>
        <div className={styles.articleCard}>
          <div className={styles.articleMetaTop}>
            <span className={styles.categoria}>{artigoFake.categoria}</span>
            <span className={styles.tempoLeitura}>{artigoFake.tempoLeitura} de leitura</span>
          </div>
          {artigoFake.imagem && (
            <img
              src={artigoFake.imagem}
              alt={artigoFake.titulo}
              className={styles.articleImage}
            />
          )}
          <h1 className={styles.articleTitle}>{artigoFake.titulo}</h1>
          <div className={styles.autorData}>
            <span>Por <b>{artigoFake.autor}</b></span>
            <span>Publicado em <b>{formatDate(artigoFake.createdAt)}</b></span>
          </div>
          <p className={styles.articleDescription}>{artigoFake.descricao}</p>
          <div className={styles.metaInfo}>
            <span>
              Última atualização: <b>{formatDate(artigoFake.updatedAt)}</b>
            </span>
          </div>
          {artigoFake.tags && (
            <div className={styles.tags}>
              {artigoFake.tags.map((tag, i) => (
                <span key={i} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
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