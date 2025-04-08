import Image from 'next/image'
import styles from './contact.module.css';
import shapes from './img/shapes.png';
import Header from '../components/header';

export default function Contato() {
    return (
        <div>
            <Header corHeader={"#DBBD9C"} />
            <div className={styles.contactSection}>
                <Image src={shapes} alt="" className={styles.contactImage} />

                <div className={styles.contactContainer}>

                    <div className={styles.contactText}>
                        <h1 className={styles.contactTitle}>Entre Em Contato<br /> Conosco</h1>
                        <p className={styles.contactSubTitle}>Entre em contato conosco! Tire dúvidas e nos dê<br /> sugestões.</p>
                    </div>

                    <div className={styles.contactFormContainer}>
                        <form className={styles.contactForm}>
                            <input type="text" placeholder="First name" />
                            <input type="text" placeholder="Last name" />
                            <input type="email" placeholder="Email address" />
                            <textarea placeholder="Message"></textarea>
                            <div>
                                <input type="checkbox" id="terms" />
                                <label htmlFor="terms">
                                    By clicking here you agree to our <a href="#">terms and policy</a>.
                                </label>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};