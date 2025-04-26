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
    { icon: "🟦", title: "Azul", description: "Papel e papelão." },
    { icon: "🟩", title: "Verde", description: "Vidro." },
    { icon: "🟨", title: "Amarelo", description: "Metais." },
    { icon: "🟥", title: "Vermelho", description: "Plásticos." },
    { icon: "🟫", title: "Marrom", description: "Resíduos orgânicos." },
  ];

  const impactItems = [
    {
      icon: "🧴",
      title: "Descarte Inadequado de Cosméticos",
      description:
        "No Brasil, o mercado de beleza produz cerca de 78 milhões de toneladas de lixo anualmente, composto principalmente por embalagens plásticas. Esmaltes contêm compostos tóxicos como tolueno e formaldeídos, que podem contaminar o solo e a água.",
    },
    {
      icon: "🌊",
      title: "Impactos Ambientais",
      description:
        "Substâncias químicas como parabenos e microplásticos afetam organismos aquáticos e entram na cadeia alimentar humana.",
    },
    {
      icon: "🐢",
      title: "Desconsideração das ONGs",
      description:
        "Apesar dos esforços de ONGs, muitas iniciativas sustentáveis são ignoradas por consumidores e empresas.",
    },
    {
      icon: "🏭",
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
                <span className={styles.icon}>{item.icon}</span>
                <strong className={styles.titleIcon}>{item.title}</strong>
              </div>
              {expandedDisposalItem === index && (
                <p className={styles.disposalDescription}>
                  {item.description}
                </p>
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
                <span className={styles.icon}>{item.icon}</span>
                <strong>{item.title}</strong>
              </div>
              {expandedImpactItem === index && (
                <p className={styles.impactDescription}>
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}