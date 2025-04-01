
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import styles from './login.module.css';

export default function SignupPage() {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>

        <div className={styles.signupLeft}>
          <h2 className={styles.signupTitle}>Crie uma conta</h2>
          <form className={styles.signupForm}>
            <input type="text" name="name" placeholder="Nome Completo" className={styles.signupInput} />
            <input type="email" name="email" placeholder="E-mail" className={styles.signupInput} />
            <input type="password" name="password" placeholder="Senha" className={styles.signupInput} />
            <button type="submit" className={styles.signupButton}>Criar Conta</button>
          </form>
          <div className={styles.signupDivider}>ou</div>
          <button className={styles.signupSocialButton}>
            <FaGoogle className={styles.iconGoogle} /> Criar com o Google
          </button>
          <button className={styles.signupSocialButton}>
            <FaFacebook className={styles.iconFacebook} /> Criar com o Facebook
          </button>
          <p className={styles.signupFooter}>
            Já tem uma conta? <a href="#" className={styles.signupLink}>Entre</a>
          </p>
        </div>
        <div className={styles.signupRight}>
          <img src="https://s3-alpha-sig.figma.com/img/a93f/0296/ff02eadcfd9782ef4742ec1f69e85aac?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gbmt-yeZOhtZRorTc0eB86s-tbx9umkIaJ9YodBB7Iyhl9tlEEC2tPQvqdbRuvOZgYN1ANSRePIzgvqxo3jxNkivusQCe7jP72xW97GaMopvpv7qmbSynQdKEw5VE4mvE44HqkPmf2vYHU36hOXkh-vXtgd-M1mmGo~4yBFGR0LdxZ5WT10K12sQH5OOkWrPI6GY6UyFcn9CysSzwWc8I~naJGsX087S85EeJmQ6o2FkBzdzFlQYDmTvI-G5yJZTBkerPgxuAEe2dQrbRJ6U7Pgpg-suxllqZDrZhNChZgNFqX1ZTue0mjGfyAYpM9ECrQ56EXnGXmA0~oBlZDg17w__" alt="Borboleta" className={styles.signupImage} />
        </div>
      </div>
    </div>
  );
}