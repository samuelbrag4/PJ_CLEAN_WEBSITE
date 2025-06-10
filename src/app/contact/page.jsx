"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./contact.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Contato() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(""); // Limpa a mensagem de status

    try {
      const response = await fetch("https://clean-2tds.coolify.fps92.dev/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("E-mail enviado com sucesso!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" }); // Limpa o formulário
      } else {
        setStatusMessage("Erro ao enviar o e-mail. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
      setStatusMessage("Erro ao enviar o e-mail. Tente novamente.");
    }
  };

  return (
    <div>
      <Header corHeader={"#F05080"} /> {/* LightPink */}
      <div className={styles.contactSection}>
      

        <div className={styles.contactContainer}>
          <div className={styles.contactText}>
            <h1 className={styles.contactTitle}>
              Entre Em Contato<br /> Conosco
            </h1>
            <p className={styles.contactSubTitle}>
              Entre em contato conosco! Tire dúvidas e nos dê<br /> sugestões.
            </p>
          </div>

          <div className={styles.contactFormContainer}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  By clicking here you agree to our <a href="#">terms and policy</a>.
                </label>
              </div>
              <button type="submit">Send Message</button>
            </form>
            {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
          </div>
        </div>
      </div>
      <Footer corFooter={"#F05080"} /> {/* LightPink */}
    </div>
  );
}