"use client";

import styles from "./about.module.css";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import { FaGithub, FaLinkedin, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

// Dados dos membros
const membros = [
  {
    nome: "Samuel Braga",
    funcao: "Product Owner",
    github: "https://github.com/samuelbrag4",
    linkedin: "https://www.linkedin.com/in/samuel-braga-2b6b7b1b2/",
    foto: "https://avatars.githubusercontent.com/u/158165702?v=4",
    avaliacao:
      "Participar desse projeto foi um grande desafio e uma experiência incrível de aprendizado em equipe, gestão ágil e tecnologia moderna.",
  },
  {
    nome: "Jéssica Prestelo",
    funcao: "Scrum Master",
    github: "https://github.com/jessicaprestelo1201",
    linkedin: "https://www.linkedin.com/in/jessica-prestelo-2b4b7b1b2/",
    foto: "https://avatars.githubusercontent.com/u/177644148?v=4",
    avaliacao:
      "Acompanhar o desenvolvimento do projeto e garantir a organização dos sprints foi enriquecedor. O trabalho em equipe fez toda diferença!",
  },
  {
    nome: "Nathalia Santos",
    funcao: "Desenvolvedora",
    github: "https://github.com/Nathsanfer",
    linkedin: "https://www.linkedin.com/in/nathalia-santos-2b4b7b1b2/",
    foto: "https://avatars.githubusercontent.com/u/158168917?v=4",
    avaliacao:
      "Aprendi muito sobre Next.js, React Native e colaboração. O projeto me motivou a buscar sempre o melhor resultado.",
  },
  {
    nome: "Gabriela Moleta",
    funcao: "Desenvolvedora",
    github: "https://github.com/gabriela-moleta",
    linkedin: "https://www.linkedin.com/in/gabriela-moleta-2b4b7b1b2/",
    foto: "https://avatars.githubusercontent.com/u/177643072?v=4",
    avaliacao:
      "Foi gratificante ver o crescimento do projeto e da equipe. A experiência prática com tecnologias modernas foi essencial.",
  },
  {
    nome: "Fernanda Alves",
    funcao: "Desenvolvedora",
    github: "https://github.com/F3rNnd4",
    linkedin: "https://www.linkedin.com/in/fernanda-alves-2b4b7b1b2/",
    foto: "https://avatars.githubusercontent.com/u/158165855?v=4",
    avaliacao:
      "Contribuir para um projeto real, com desafios técnicos e de equipe, foi fundamental para meu desenvolvimento profissional.",
  },
  {
    nome: "Nicole Cau",
    funcao: "Desenvolvedora",
    github: "https://github.com/Nickcau1203",
    linkedin: "https://www.linkedin.com/in/nicole-cau-2b4b7b1b2/",
    foto: "https://avatars.githubusercontent.com/u/158166129?s=64&v=4",
    avaliacao:
      "O Clean Blog me proporcionou crescimento técnico e pessoal. Trabalhar em equipe foi inspirador!",
  },
  {
    nome: "Alexandra Aversani",
    funcao: "Desenvolvedora",
    github: "https://github.com/Alexandraaversani",
    linkedin: "https://www.linkedin.com/in/alexandra-aversani-2b4b7b1b2/",
    foto: "https://avatars.githubusercontent.com/u/158167102?s=64&v=4",
    avaliacao:
      "A experiência de desenvolver um produto completo, do Figma ao deploy, foi única e muito valiosa.",
  },
];

// Dados dos tutores
const tutores = [
  {
    nome: "Eduardo Correia",
    formacao: "Mestre em Ciência da Computação",
    github: "https://github.com/Eduardo1985S",
    nota: "Avaliando...",
    foto: "https://avatars.githubusercontent.com/u/97844175?s=130&v=4",
  },
  {
    nome: "Felipe Santos",
    formacao: "Especialista em Desenvolvimento Mobile",
    github: "https://github.com/FelipeSantos92Dev",
    nota: "Avaliando...",
    foto: "https://avatars.githubusercontent.com/u/98625123?s=130&v=4",
  },
];

// Carrossel 3D giratório
function CarouselMembros({ membros }) {
  const [index, setIndex] = useState(0);
  const total = membros.length;
  const angle = 360 / total;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearTimeout(timer);
  }, [index, total]);

  const rotate = (dir) => {
    setIndex((prev) => (prev + dir + total) % total);
  };

  return (
    <div className={styles.carousel3dWrapper}>
      <button className={styles.carousel3dBtn} onClick={() => rotate(-1)} aria-label="Anterior">
        <FaChevronLeft />
      </button>
      <div className={styles.carousel3dScene}>
        <div
          className={styles.carousel3d}
          style={{
            transform: `translateZ(-420px) rotateY(-${index * angle}deg)`,
          }}
        >
          {membros.map((m, i) => (
            <div
              className={styles.carousel3dCard}
              key={m.github}
              style={{
                transform: `rotateY(${i * angle}deg) translateZ(420px)`,
              }}
            >
              <div className={styles.cardFotoWrapper}>
                <img src={m.foto} alt={m.nome} className={styles.cardFoto} />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardNome}>{m.nome}</h3>
                <span className={styles.cardFuncao}>{m.funcao}</span>
                <p className={styles.cardAvaliacao}>{m.avaliacao}</p>
                <div className={styles.cardLinks}>
                  <a href={m.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FaGithub />
                  </a>
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.carousel3dBtn} onClick={() => rotate(1)} aria-label="Próximo">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default function About() {
  return (
    <div className={styles.aboutBg}>
      <Header corHeader={"#F05080"} />

      <Hero
        linkImage={
          "https://i.pinimg.com/736x/fa/68/a5/fa68a517817e95ea9e05e0b939e1e7e8.jpg"
        }
        heroTitulo={"Conheça o projeto e a equipe"}
        heroTexto={
          "Quer saber mais sobre a equipe e o desenvolvimento do projeto? Dê uma olhada nesta página."
        }
      />

      <main className={styles.aboutMain}>
        <div className={styles.imgGrupoWrapper}>
          <Image
            src="/grupoClean.jpg"
            alt="Equipe Clean"
            width={400}
            height={300}
            className={styles.imgGrupo}
            quality={90}
            priority
          />
        </div>
        <section className={styles.projetoSection}>
          <div className={styles.projetoGrid}>
            <div>
              <h1 className={styles.titulo}>Sobre o Projeto</h1>
              <p className={styles.desc}>
                O <b>Clean Blog</b> é um sistema de blog administrável,
                desenvolvido para web (Next.js) e mobile (React Native), com
                foco em performance, segurança, acessibilidade e experiência do
                usuário. O projeto foi construído em 15 sprints utilizando
                Scrum, com prototipação no Figma, deploy contínuo na Vercel e
                Expo, e colaboração ativa no GitHub.
              </p>
              <ul className={styles.lista}>
                <li>Blog administrável com dashboard e autenticação segura</li>
                <li>Aplicativo mobile com leitura, curtidas e comentários</li>
                <li>SEO, performance otimizada e design responsivo</li>
                <li>Metodologia Scrum, prototipação no Figma e deploy contínuo</li>
                <li>Tecnologias: Next.js, React Native e Prisma</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.cardsSection}>
          <h2 className={styles.subtitulo}>Desenvolvedores</h2>
          <CarouselMembros membros={membros} />
        </section>

        <section className={styles.cardsSection}>
          <h2 className={styles.subtitulo}>Tutores</h2>
          <div className={styles.cardsGridTutores}>
            {tutores.map((t) => (
              <div className={styles.cardTutor} key={t.github}>
                <div className={styles.cardFotoWrapper}>
                  <img
                    src={t.foto}
                    alt={t.nome}
                    className={styles.cardFotoTutor}
                  />
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.cardNome}>{t.nome}</h3>
                  <span className={styles.cardFuncao}>{t.formacao}</span>
                  <p className={styles.cardAvaliacao}>{t.nota}</p>
                  <div className={styles.cardLinks}>
                    <a
                      href={t.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <div className={styles.cardGlow}></div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer corFooter="#F05080" />
    </div>
  );
}