import Link from "next/link";
import styles from "./cards.module.css";


const Card = ({ capa, textoAlt, categoria, titulo, descricao, caminhoArtigo, corBorda, corCategoria }) => {
    return (
        <div className={styles.card}>
            <img className={styles.imageCard} src={capa} alt={textoAlt} />
            <div className={styles.textCard}>
                <p className={styles.categoria} style={{ color: corCategoria }}>{categoria}</p>
                <h3 className={styles.tituloCard}>{titulo}</h3>
                <p className={styles.descricao}>{descricao}</p>
                <button className={styles.botaoCard} style={{ borderColor: corBorda }}><a className={styles.linkBotao} href={caminhoArtigo}>Ver Mais</a></button>
            </div>
        </div>
    );
};


export default Card;