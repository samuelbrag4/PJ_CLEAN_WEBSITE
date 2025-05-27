import styles from "./popularProducts.module.css";
import Link from "next/link";

export default function PopularProducts() {
  const produtos = [
    { id: 1, nome: "CREAMY SOLUCAO ACIDO REANEXAMICO", imagem: "https://images.tcdn.com.br/img/img_prod/1208831/90_creamy_solucao_acido_reanexamico_90ml_318_1_ed630ba83f0efe6ebd5cb346efb69b71.png" },
    { id: 2, nome: "DUO PEPTIDE RETINOL ", imagem: "https://creamy.vtexassets.com/arquivos/ids/157580-300-300/01-cadastro-Duo-Peptide---Retinol.png?v=638711750869930000" },
    { id: 3, nome: "CREAMY TONICO ANTIACNE", imagem: "https://images.tcdn.com.br/img/img_prod/1208831/90_creamy_tonico_antiacne_90ml_330_1_d5b64554e93feabd8959155bd7c85ae6.png" },
    { id: 4, nome: "CREAMY PROTETOR SOLAR", imagem: "https://images.tcdn.com.br/img/img_prod/1208831/90_creamy_protetor_solar_50ml_320_1_5df6509cd276afded2b75d684b2e5660.png" },
    { id: 5, nome: "CREAMY GEL LIMPEZA", imagem: "https://images.tcdn.com.br/img/img_prod/1208831/90_creamy_emulsao_limpeza_180ml_1648_1_9005d700cee8ed6a9a250b99ab61c7c0.png" },
    { id: 6, nome: "CREAMY EMULSAO LIMPEZA", imagem: "https://images.tcdn.com.br/img/img_prod/1208831/90_creamy_gel_limpeza_180ml_310_1_8f258d1a497357a34bc2a4e06fd542d0.png" },
  ];

  return (
    <section className={styles["produtos-populares"]}>
      <h2 className={styles["produtos-populares-h2"]}>Produtos populares</h2>
      <p className={styles["produtos-populares-p"]}>
        Os produtos mais procurados da internet! Onde você encontra eles? Aqui mesmo.
      </p>

      <div className={styles["cards-container"]}>
        {produtos.map((produto) => (
          <div key={produto.id} className={styles.card}>
            <img
              src={produto.imagem}
              alt={produto.nome}
              className={styles["card-image"]}
            />
            <div className={styles["card-legenda"]}>
              <p className={styles["card-title"]}>{produto.nome}</p>
            </div>
          </div>
        ))}
      </div>

      <Link href="/products">
        <button className={styles["ver-mais"]}>Ver mais</button>
      </Link>
    </section>
  );
}
