"use client";

import { useState } from "react";
import styles from "./section_skin.module.css";

const SectionSkin = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [popupContent, setPopupContent] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setErrorMessage("");

    const formData = new FormData(e.target);
    const answers = Array.from(formData.values());

    if (answers.length === 0) {
      setLoading(false);
      setErrorMessage(
        "Por favor, selecione pelo menos uma opção antes de enviar."
      );
      return;
    }

    setTimeout(() => {
      let skinType = "Mista";

      if (
        answers.includes("seca") &&
        answers.includes("ressecada e esticada")
      ) {
        skinType = "Seca";
      } else if (
        answers.includes("oleosa") &&
        answers.includes("oleosa e brilhante")
      ) {
        skinType = "Oleosa";
      } else if (
        answers.includes("equilibrada") &&
        answers.includes("normal em algumas áreas, oleosa em outras")
      ) {
        skinType = "Normal";
      }

      setResult(skinType);
      setLoading(false);
    }, Math.random() * (3000 - 2000) + 2000); // Entre 2 e 3 segundos
  };

  const handleCardClick = (type) => {
    const info = {
      Oleosa: {
        title: "Pele Oleosa",
        details: [
          "Sensação: Pegajosa, oleosa logo após a limpeza.",
          "Aparência: Brilho excessivo (zona T: testa, nariz, queixo).",
          "Toque: Lisa demais, quase escorregando.",
          "Problemas comuns: Cravos, espinhas, poros dilatados.",
          "Dica: Pega um papel toalha umas 2h depois de lavar o rosto. Se sair encharcado, bingo: pele oleosa.",
        ],
      },
      Seca: {
        title: "Pele Seca",
        details: [
          "Sensação: Repuxada, áspera, às vezes até com descamação.",
          "Aparência: Opaca, sem brilho, poros pouco visíveis.",
          "Toque: Pouco macia, pode craquelar no frio.",
          "Problemas comuns: Rachaduras, vermelhidão, envelhecimento precoce.",
          "Dica: Após lavar o rosto, sente a pele esticada ou desconfortável? Provavelmente é seca.",
        ],
      },
      Mista: {
        title: "Pele Mista",
        details: [
          "Sensação: Normal em algumas áreas, oleosa em outras.",
          "Aparência: Zona T oleosa e bochechas mais secas.",
          "Toque: Varia bastante entre as áreas do rosto.",
          "Problemas comuns: Difícil acertar produtos que atendam o rosto todo.",
          "Dica: Se sente sua testa brilhando mas bochecha repuxando, é mista mesmo.",
        ],
      },
      Normal: {
        title: "Pele Normal",
        details: [
          "Sensação: Equilibrada e saudável.",
          "Aparência: Sem brilho excessivo, poros normais.",
          "Toque: Macia e uniforme.",
          "Problemas comuns: Poucos problemas, mas precisa de cuidados básicos.",
          "Dica: Mantenha uma rotina básica de limpeza, hidratação e proteção solar.",
        ],
      },
    };
    setPopupContent(info[type]);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <section className={styles.sectionSkin}>
      <div className={styles.container}>
        <h1 className={styles.title}>Qual seu tipo de pele</h1>
        <p className={styles.subtitle}>
          Oleosa? Seca ou Mista. Descubra agora.
        </p>

        <div className={styles.cards}>
          {["Oleosa", "Seca", "Mista", "Normal"].map((type) => (
            <div
              key={type}
              className={styles.card}
              onClick={() => handleCardClick(type)}
            >
              Pele {type}
            </div>
          ))}
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <p className={styles.formInfo}>
            Marque as características que mais se assemelham à sua pele:
          </p>

          {/* Continuação do Formulário */}

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              Como sua pele reage a produtos cosméticos?
            </legend>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="characteristic"
                value="absorve rápido, sem problemas"
                className={styles.checkbox}
              />
              Absorve rápido, sem problemas
            </label>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="characteristic"
                value="fica oleosa em minutos"
                className={styles.checkbox}
              />
              Fica oleosa em minutos
            </label>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="characteristic"
                value="reage diferente em áreas diferentes"
                className={styles.checkbox}
              />
              Reage diferente em áreas diferentes
            </label>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="characteristic"
                value="arde, coça ou fica vermelha"
                className={styles.checkbox}
              />
              Arde, coça ou fica vermelha
            </label>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              Você nota brilho excessivo durante o dia?
            </legend>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="characteristic"
                value="não"
                className={styles.checkbox}
              />
              Não
            </label>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="characteristic"
                value="sim, bastante"
                className={styles.checkbox}
              />
              Sim, bastante
            </label>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="characteristic"
                value="só em certas partes"
                className={styles.checkbox}
              />
              Só em certas partes
            </label>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="characteristic"
                value="não, mas fica vermelha fácil"
                className={styles.checkbox}
              />
              Não, mas fica vermelha fácil
            </label>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              Como descreveria a textura da sua pele?
            </legend>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="characteristic"
                value="áspera, descamando às vezes"
                className={styles.checkbox}
              />
              Áspera, descamando às vezes
            </label>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="characteristic"
                value="lisa e oleosa"
                className={styles.checkbox}
              />
              Lisa e oleosa
            </label>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="characteristic"
                value="mista: partes oleosas e partes secas"
                className={styles.checkbox}
              />
              Mista: partes oleosas e partes secas
            </label>
            <label className={styles.label}>
              <input
                type="checkbox"
                name="characteristic"
                value="fina e sensível ao toque"
                className={styles.checkbox}
              />
              Fina e sensível ao toque
            </label>
          </fieldset>

          <button type="submit" className={styles.submitButton}>
            Descobrir meu tipo de pele
          </button>
        </form>

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        {loading && (
          <div className={styles.loadingOverlay}>
            <div className={styles.spinner}></div>
          </div>
        )}

        {result && (
          <div className={styles.resultCard}>
            <h2 className={styles.resultTitle}>Seu tipo de pele é: {result}</h2>
            <ul className={styles.resultDetails}>
              {result === "Seca" && (
                <>
                  <li>
                    Sensação: Repuxada, áspera, às vezes até com descamação.
                  </li>
                  <li>Aparência: Opaca, sem brilho, poros pouco visíveis.</li>
                  <li>Toque: Pouco macia, pode craquelar no frio.</li>
                  <li>
                    Problemas comuns: Rachaduras, vermelhidão, envelhecimento
                    precoce.
                  </li>
                  <li>
                    Dica: Após lavar o rosto, sente a pele esticada ou
                    desconfortável? Provavelmente é seca.
                  </li>
                </>
              )}
              {result === "Oleosa" && (
                <>
                  <li>Sensação: Pegajosa, oleosa logo após a limpeza.</li>
                  <li>
                    Aparência: Brilho excessivo (zona T: testa, nariz, queixo).
                  </li>
                  <li>Toque: Lisa demais, quase escorregando.</li>
                  <li>Problemas comuns: Cravos, espinhas, poros dilatados.</li>
                  <li>
                    Dica: Pega um papel toalha umas 2h depois de lavar o rosto.
                    Se sair encharcado, bingo: pele oleosa.
                  </li>
                </>
              )}
              {result === "Mista" && (
                <>
                  <li>Sensação: Normal em algumas áreas, oleosa em outras.</li>
                  <li>Aparência: Zona T oleosa e bochechas mais secas.</li>
                  <li>Toque: Varia bastante entre as áreas do rosto.</li>
                  <li>
                    Problemas comuns: Difícil acertar produtos que atendam o
                    rosto todo.
                  </li>
                  <li>
                    Dica: Se sente sua testa brilhando mas bochecha repuxando, é
                    mista mesmo.
                  </li>
                </>
              )}
              {result === "Normal" && (
                <>
                  <li>Sensação: Equilibrada e saudável.</li>
                  <li>Aparência: Sem brilho excessivo, poros normais.</li>
                  <li>Toque: Macia e uniforme.</li>
                  <li>
                    Problemas comuns: Poucos problemas, mas precisa de cuidados
                    básicos.
                  </li>
                  <li>
                    Dica: Mantenha uma rotina básica de limpeza, hidratação e
                    proteção solar.
                  </li>
                </>
              )}
            </ul>
            <div className={styles.confetti}></div>
          </div>
        )}

        {popupContent && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <h2 className={styles.popupTitle}>{popupContent.title}</h2>
              <ul className={styles.popupDetails}>
                {popupContent.details.map((detail, index) => (
                  <li key={index} className={styles.popupDetailItem}>
                    {detail}
                  </li>
                ))}
              </ul>
              <button onClick={closePopup} className={styles.closeButton}>
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionSkin;
