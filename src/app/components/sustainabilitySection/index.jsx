"use client";

import { useState } from "react";
import styles from "./sustainabilitySection.module.css";

export default function SustainabilitySection() {
  const [expandedDisposalItem, setExpandedDisposalItem] = useState(null);
  const [expandedImpactItem, setExpandedImpactItem] = useState(null);

  const toggleDisposalItem = (index) => {
    setExpandedDisposalItem(expandedDisposalItem === index ? null : index);
  };

  const toggleImpactItem = (index) => {
    setExpandedImpactItem(expandedImpactItem === index ? null : index);
  };

  const disposalItems = [
    {
      iconUrl: "https://cepel.vteximg.com.br/arquivos/ids/169421-1000-1000/38643-Adesivo.png?v=637922803733630000",
      iconAlt: "Lixeira Azul",
      title: "Azul",
      description: "Papel e papelão.",
    },
    {
      iconUrl: "https://bravidistribuidora.agilecdn.com.br/2734_1.jpg",
      iconAlt: "Lixeira Verde",
      title: "Verde",
      description: "Vidro.",
    },
    {
      iconUrl: "https://images.tcdn.com.br/img/img_prod/793949/lixeira_coleta_seletiva_60l_basculante_amarela_611_1_20200902133943.png",
      iconAlt: "Lixeira Amarela",
      title: "Amarelo",
      description: "Metais.",
    },
    {
      iconUrl: "https://images.tcdn.com.br/img/img_prod/793949/lixeira_coleta_seletiva_60l_basculante_vermelha_617_1_20200902134651.png",
      iconAlt: "Lixeira Vermelha",
      title: "Vermelho",
      description: "Plásticos.",
    },
    {
      iconUrl: "https://cepel.vteximg.com.br/arquivos/ids/169477-1000-1000/3.png?v=637932296562400000",
      iconAlt: "Lixeira Marrom",
      title: "Marrom",
      description: "Resíduos orgânicos.",
    },
  ];

  const impactItems = [
    {
      iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTclGVC9iiZtqZjJPjv-m-mrMC3xFbfFp1vlA&s",
      iconAlt: "Descarte Inadequado",
      title: "Descarte Inadequado de Cosméticos",
      description:
        "No Brasil, o mercado de beleza produz cerca de 78 milhões de toneladas de lixo anualmente, composto principalmente por embalagens plásticas. Esmaltes contêm compostos tóxicos como tolueno e formaldeídos, que podem contaminar o solo e a água.",
    },
    {
      iconUrl: "https://cdn.dooca.store/1857/posts/capa-lixo.jpg?v=1702491689",
      iconAlt: "Impactos Ambientais",
      title: "Impactos Ambientais",
      description:
        "Substâncias químicas como parabenos e microplásticos afetam organismos aquáticos e entram na cadeia alimentar humana.",
    },
    {
      iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9w9esuiNKFyR18nOe8A-1DzT9ewLn8C5k0A&s",
      iconAlt: "ONGs",
      title: "Desconsideração das ONGs",
      description:
        "Apesar dos esforços de ONGs, muitas iniciativas sustentáveis são ignoradas por consumidores e empresas.",
    },
    {
      iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMO6LlaZ_2MzBXRZnKZYylTZErrw3ly9MCg&s",
      iconAlt: "Empresas",
      title: "Empresas de Alto Impacto",
      description:
        "Grandes empresas cosméticas contribuem significativamente para a poluição com a produção de embalagens plásticas em larga escala.",
    },
  ];

  return (
    <section className={styles.sustainability}>
      <h2 className={styles.title}>Nosso Compromisso com a Sustentabilidade</h2>
      <p className={styles.text}>
        Trabalhamos para oferecer produtos que respeitam o meio ambiente,
        utilizando embalagens recicláveis e ingredientes naturais.
      </p>

      <h3 className={styles.subtitle}>Descarte Sustentável de Cosméticos</h3>
      <div className={styles.cardsRow}>
        {disposalItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${expandedDisposalItem === index ? styles.expanded : ""}`}
            onClick={() => toggleDisposalItem(index)}
            tabIndex={0}
            title="Clique para ver mais"
          >
            <img src={item.iconUrl} alt={item.iconAlt} className={styles.cardIcon} />
            <span className={styles.cardTitle}>{item.title}</span>
            {expandedDisposalItem === index && (
              <span className={styles.cardDescription}>{item.description}</span>
            )}
          </div>
        ))}
      </div>

      <h3 className={styles.subtitle}>Impactos do Descarte Inadequado</h3>
      <div className={styles.cardsRow}>
        {impactItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${expandedImpactItem === index ? styles.expanded : ""}`}
            onClick={() => toggleImpactItem(index)}
            tabIndex={0}
            title="Clique para ver mais"
          >
            <img src={item.iconUrl} alt={item.iconAlt} className={styles.cardIcon} />
            <span className={styles.cardTitle}>{item.title}</span>
            {expandedImpactItem === index && (
              <span className={styles.cardDescription}>{item.description}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}