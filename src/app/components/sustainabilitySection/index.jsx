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
      iconUrl: "https://cdn-user-icons.flaticon.com/186924/186924339/1746538733767.svg?token=exp=1746539778~hmac=216a644eb7fe0d130469e6fbd41b9d9f",
      iconAlt: "Lixeira Azul",
      title: "Azul",
      description: "Papel e papelão.",
    },
    {
      iconUrl: "https://cdn-user-icons.flaticon.com/186924/186924339/1746539379084.svg?token=exp=1746540285~hmac=2480563b486bc87c307064f157209942",
      iconAlt: "Lixeira Verde",
      title: "Verde",
      description: "Vidro.",
    },
    {
      iconUrl: "https://cdn-user-icons.flaticon.com/186924/186924339/1746539438750.svg?token=exp=1746540339~hmac=758207724ada2d8d107d1bf0812306cd",
      iconAlt: "Lixeira Amarela",
      title: "Amarelo",
      description: "Metais.",
    },
    {
      iconUrl: "https://cdn-user-icons.flaticon.com/186924/186924339/1746539482399.svg?token=exp=1746540383~hmac=bfec6a7d9fa32e1830a84cf9e458f80a",
      iconAlt: "Lixeira Vermelha",
      title: "Vermelho",
      description: "Plásticos.",
    },
    {
      iconUrl: "https://cdn-user-icons.flaticon.com/186924/186924339/1746539532792.svg?token=exp=1746540433~hmac=70717094aa6dd96d11c041ca02c8c7db",
      iconAlt: "Lixeira Marrom",
      title: "Marrom",
      description: "Resíduos orgânicos.",
    },
  ];

  const impactItems = [
    {
      iconUrl: "https://cdn-user-icons.flaticon.com/186924/186924339/1746539736059.svg?token=exp=1746540636~hmac=19dca99b2c330991273f395f8f7ecb21",
      iconAlt: "Descarte Inadequado",
      title: "Descarte Inadequado de Cosméticos",
      description:
        "No Brasil, o mercado de beleza produz cerca de 78 milhões de toneladas de lixo anualmente, composto principalmente por embalagens plásticas. Esmaltes contêm compostos tóxicos como tolueno e formaldeídos, que podem contaminar o solo e a água.",
    },
    {
      iconUrl: "https://cdn-user-icons.flaticon.com/186924/186924339/1746539802750.svg?token=exp=1746540703~hmac=f17a4a6b040ee2bb67e86040d0dd0a7e",
      iconAlt: "Impactos Ambientais",
      title: "Impactos Ambientais",
      description:
        "Substâncias químicas como parabenos e microplásticos afetam organismos aquáticos e entram na cadeia alimentar humana.",
    },
    {
      iconUrl: "https://cdn-user-icons.flaticon.com/186924/186924339/1746539871481.svg?token=exp=1746540772~hmac=0d60a64bf91f5dacd2af081f48e0ff26",
      iconAlt: "ONGs",
      title: "Desconsideração das ONGs",
      description:
        "Apesar dos esforços de ONGs, muitas iniciativas sustentáveis são ignoradas por consumidores e empresas.",
    },
    {
      iconUrl: "https://cdn-user-icons.flaticon.com/186924/186924339/1746539967802.svg?token=exp=1746540868~hmac=6b3dfc3b2c286378248037c0f04ac583",
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
