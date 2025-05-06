import styles from "./ourMissionSection.module.css";

const OurMission = ({ corPrincipal, subtitulo, titulo, descricao, textoBotao, icones, degrade,  }) => {
  return (
    <section className={styles.nossaMissao} style={{ background: degrade }}>
      <div className={styles.nossaMissaoContainer}>
        <div className={styles.nossaMissaoTexto}>
          <h4 className={styles.nossaMissaoSubtitulo} style={{ color: corPrincipal}}>{subtitulo}</h4>
          <h2 className={styles.nossaMissaoTitulo}>{titulo}</h2>
          <p className={styles.nossaMissaoDescricao}>{descricao}</p>
          <button className={styles.nossaMissaoBotao} style={{ background: corPrincipal }}>{textoBotao}</button>
        </div>

        <div className={styles.nossaMissaoIcones}>
          {icones.map((item, index) => (
            <div key={index} className={styles.nossaMissaoIcone}>
              <div className={styles.nossaMissaoCirculo} style={{ background: corPrincipal }}>{item.icone}</div>
              <h3>{item.tituloIcone}</h3>
              <p>{item.descricaoIcone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;