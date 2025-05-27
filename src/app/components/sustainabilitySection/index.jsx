"use client";

import { useState } from "react";
import styles from "./sustainabilitySection.module.css";
import Image from "next/image";

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

      <div className={styles.disposal}>
        <h3 className={styles.subtitle}>Descarte Sustentável de Cosméticos</h3>
        <p className={styles.text}>
          Antes de descartar seus cosméticos, lave os frascos para remover
          resíduos e descarte-os no lixo correto:
        </p>
        <ul className={styles.disposalList}>
          {disposalItems.map((item, index) => (
            <li
              key={index}
              className={styles.disposalItem}
              onClick={() => toggleDisposalItem(index)}
            >
              <div className={styles.disposalHeader}>
                <span className={styles.icon}>
                  <img
                    src={item.iconUrl}
                    alt={item.iconAlt}
                    width={40}
                    height={40}
                  />
                </span>
                <strong className={styles.titleIcon}>{item.title}</strong>
              </div>
              {expandedDisposalItem === index && (
                <p className={styles.disposalDescription}>{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.impact}>
        <h3 className={styles.subtitle}>Impactos do Descarte Inadequado</h3>
        <ul className={styles.impactList}>
          {impactItems.map((item, index) => (
            <li
              key={index}
              className={styles.impactItem}
              onClick={() => toggleImpactItem(index)}
            >
              <div className={styles.impactHeader}>
                <span className={styles.icon}>
                  <img
                    src={item.iconUrl}
                    alt={item.iconAlt}
                    width={40}
                    height={40}
                  />
                </span>
                <p>{item.title}</p>
              </div>
              {expandedImpactItem === index && (
                <p className={styles.impactDescription}>{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
