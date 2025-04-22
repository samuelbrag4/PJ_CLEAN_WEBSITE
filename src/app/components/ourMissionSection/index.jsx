import styles from "./ourMissionSection.module.css";
import { FaSoap, FaPumpSoap } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { RiBubbleChartFill } from "react-icons/ri";

const OurMission = ({
  subtitulo = "Nossa Missão",
  titulo = "Cuide de sua Pele da Forma que ela Merece",
  descricao = "Sua pele merece atenção especial. Com uma rotina de skincare simples e eficaz, você pode manter sua pele saudável e radiante.",
  textoBotao = "Saiba Mais",
  icones = [
    {
      icone: <FaSoap size={24} />,
      tituloIcone: "Limpeza",
      descricaoIcone: "Remova impurezas e prepare sua pele"
    },
    {
      icone: <FaDroplet size={24} />,
      tituloIcone: "Hidratação",
      descricaoIcone: "Mantenha sua pele nutrida e protegida"
    },
    {
      icone: <RiBubbleChartFill size={24} />,
      tituloIcone: "Esfoliação",
      descricaoIcone: "Elimine células mortas e renove sua pele"
    },
    {
      icone: <FaPumpSoap size={24} />,
      tituloIcone: "Produtos",
      descricaoIcone: "Use produtos adequados ao seu tipo de pele"
    }
  ]
}) => {
  return (
    <section className={styles.nossaMissao}>
      <div className={styles.nossaMissaoContainer}>
        <div className={styles.nossaMissaoTexto}>
          <h4 className={styles.nossaMissaoSubtitulo}>{subtitulo}</h4>
          <h2 className={styles.nossaMissaoTitulo}>{titulo}</h2>
          <p className={styles.nossaMissaoDescricao}>{descricao}</p>
          <button className={styles.nossaMissaoBotao}>{textoBotao}</button>
        </div>

        <div className={styles.nossaMissaoIcones}>
          {icones.map((item, index) => (
            <div key={index} className={styles.nossaMissaoIcone}>
              <div className={styles.nossaMissaoCirculo}>{item.icone}</div>
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