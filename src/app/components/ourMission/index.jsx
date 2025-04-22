import styles from "./ourMission.module.css";
import { FaSoap, FaPumpSoap } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { RiBubbleChartFill } from "react-icons/ri";

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
            <div className={styles.nossaMissaoCirculo}><FaSoap /></div>
            <h3>Limpeza</h3>
            <p>
              Empower them by providing the knowledge, guidance, and support
              necessary to overcome challenges.
            </p>
          </div>
          <div className={styles.nossaMissaoIcone}>
            <div className={styles.nossaMissaoCirculo}><RiBubbleChartFill /></div>
            <h3>Esfoliação</h3>
            <p>
              Build a supportive community where childcare providers can
              connect, share best practices.
            </p>
          </div>
          <div className={styles.nossaMissaoIcone}>
            <div className={styles.nossaMissaoCirculo}><FaDroplet /></div>
            <h3>Tonificação</h3>
            <p>
              Every child's journey is unique. Our mission is to provide
              personalized childcare solutions and consulting.
            </p>
          </div>
          <div className={styles.nossaMissaoIcone}>
            <div className={styles.nossaMissaoCirculo}><FaPumpSoap /></div>
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
