import Image from 'next/image'
import styles from './contact.module.css';
import shapes from './img/shapes.png';
import Header from '../components/header';

export default function Contato() {
    return (
        <div className={styles.container}>
            <Header corHeader={"#DBBD9C"} />
            <div className={styles.contactSection}>
                <Image src={shapes} className={styles.contactImage} />
                <div className={styles.contactText}>
                    <h1 className={styles.contatctTitle}>Entre Em Contato Conosco</h1>
                    <p className={styles.contactSubTitle}>Entre em contato conosco! Tire dúvidas e nos dê sugestões.</p>
                </div>

            </div>
        </div>
    );
};