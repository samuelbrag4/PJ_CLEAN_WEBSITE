import styles from "./hero.module.css";
import { FaShieldAlt, FaUsers, FaCheckCircle, FaChevronDown } from "react-icons/fa";

const Hero = ({
  heroTitulo,
  heroTexto,
  heroSubtitulo = "Sua beleza, sua confiança. Produtos testados e aprovados por milhares de clientes!",
  linkImage,
  textoAlt,
  corCategoria,
  onScrollClick,
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.containerImagem}>
        <img className={styles.imagem} src={linkImage} alt={textoAlt} />
        {/* SVG animado/partículas */}
        <svg className={styles.svgParticles} width="100" height="100">
          <circle cx="20" cy="20" r="3" fill="#f05080">
            <animate attributeName="cy" values="20;80;20" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="40" r="2" fill="#dbbd9c">
            <animate attributeName="cx" values="60;90;60" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="80" cy="70" r="4" fill="#00dac7">
            <animate attributeName="r" values="4;8;4" dur="1.7s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      <div className={styles.containerInformacao}>
        <h1 className={styles.heroTitulo}>{heroTitulo}</h1>
        <p className={styles.heroSubtitulo}>{heroSubtitulo}</p>
        <p className={styles.heroTexto}>{heroTexto}</p>
        <div className={styles.selos} >
          <span className={styles.selo} style={{ "--cor-categoria": corCategoria || "#f05080" }}><FaShieldAlt /> Site seguro</span>
          <span className={styles.selo}
          style={{ "--cor-categoria": corCategoria || "#f05080" }}><FaUsers /> +10 mil clientes</span>
          <span className={styles.selo}
          style={{ "--cor-categoria": corCategoria || "#f05080" }}><FaCheckCircle /> Dermatologicamente testado</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;