import styles from "./ourMission.module.css";

const OurMission = () => {
  return (
    <section className={styles.nossaMissao}>
      <div className={styles.nossaMissaoContainer}>
        <div className={styles.nossaMissaoTexto}>
          <h4 className={styles.nossaMissaoSubtitulo}>Nossa Missão</h4>
          <h2 className={styles.nossaMissaoTitulo}>
            Cuide de sua Pele da Forma que ela Merece
          </h2>
          <p className={styles.nossaMissaoDescricao}>
            Sua pele merece atenção especial. Com uma rotina de skincare simples
            e eficaz, você pode manter sua pele saudável e radiante.
          </p>
          <button className={styles.nossaMissaoBotao}>Ler Mais</button>
        </div>
        
        <div className={styles.nossaMissaoIcones}>
          <div className={styles.nossaMissaoIcone}>
            <div className={styles.nossaMissaoCirculo}><img src="https://cdn-user-icons.flaticon.com/186924/186924339/1744739691316.svg?token=exp=1744740513~hmac=0d2f77b187823f73974ccfb1c5df6f7a" alt="" /></div>
            <h3>Limpeza</h3>
            <p>
              Empower them by providing the knowledge, guidance, and support
              necessary to overcome challenges.
            </p>
          </div>
          <div className={styles.nossaMissaoIcone}>
            <div className={styles.nossaMissaoCirculo}><img src="https://cdn-user-icons.flaticon.com/186924/186924339/1744739621525.svg?token=exp=1744740443~hmac=7338718231dae674cac7e1206da0c15f" alt="" /></div>
            <h3>Esfoliação</h3>
            <p>
              Build a supportive community where childcare providers can
              connect, share best practices.
            </p>
          </div>
          <div className={styles.nossaMissaoIcone}>
            <div className={styles.nossaMissaoCirculo}><img src="https://cdn-user-icons.flaticon.com/186924/186924339/1744739000846.svg?token=exp=1744740107~hmac=7c3dff311d73d0851f8a77b44c7a404a" alt="" /></div>
            <h3>Tonificação</h3>
            <p>
              Every child's journey is unique. Our mission is to provide
              personalized childcare solutions and consulting.
            </p>
          </div>
          <div className={styles.nossaMissaoIcone}>
            <div className={styles.nossaMissaoCirculo}><img src="https://cdn-user-icons.flaticon.com/186924/186924339/1744739069980.svg?token=exp=1744740310~hmac=86bf86c4bbade172871d99481bc9718b" alt="" /></div>
            <h3>Hidratação</h3>
            <p>
              Our mission extends beyond caring for children to building
              stronger, healthier communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
