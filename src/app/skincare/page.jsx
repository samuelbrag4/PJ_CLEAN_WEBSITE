import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Banner from "../components/banner";
import SkinTypeGrid from "../components/skinTypeGrid";
import AcessoriesSection from "../components/acessoriesSection";
import OurMission from "../components/ourMissionSection";
import { FaSoap, FaPumpSoap } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { RiBubbleChartFill } from "react-icons/ri";

export default function Skincare() {
  const icones = [
    {
      icone: <FaSoap size={24} />,
      tituloIcone: "Limpeza Facial",
      descricaoIcone:
        "Elimine impurezas e prepare sua pele para os próximos passos",
    },
    {
      icone: <RiBubbleChartFill size={24} />,
      tituloIcone: "Esfoliação",
      descricaoIcone: "Use 2-3 vezes por semana para renovação celular",
    },
    {
      icone: <FaDroplet size={24} />,
      tituloIcone: "Hidratação",
      descricaoIcone: "Mantenha sua pele nutrida e protegida diariamente",
    },
    {
      icone: <FaPumpSoap size={24} />,
      tituloIcone: "Proteção Solar",
      descricaoIcone: "Essencial para prevenir o envelhecimento precoce",
    },
  ];

  const cards = [
    {
      titulo: "Gua Sha de Quartzo Rosa",
      descricao:
        "Ferramenta de massagem facial que estimula a circulação sanguínea, reduz inchaços e promove relaxamento do rosto.",
      imagem:
        "https://glov.eu/cdn/shop/products/QuartzGuaSha_ef4b3c01-9fe4-4761-b21d-1097fe2307c6.png?v=1649078742",
    },
    {
      titulo: "Rolo de Jade",
      descricao:
        "Massageador que ajuda na absorção de produtos, reduz olheiras e linhas finas, além de aliviar a tensão facial.",
      imagem:
        "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/products/89926/89926.png",
    },
    {
      titulo: "Derma Roller",
      descricao:
        "Estimula a produção de colágeno, melhora a textura da pele e potencializa a penetração de ativos do skincare.",
      imagem:
        "https://www.swisscollc.com/cdn/shop/products/48009.png?v=1594308069",
    },
    {
      titulo: "Esponja Konjac",
      descricao:
        "Esfoliante natural que limpa suavemente, remove células mortas e equilibra o pH da pele, ideal para uso diário.",
      imagem:
        "https://ikesaki.vtexassets.com/arquivos/ids/269140-800-auto?v=637655991804530000&width=800&height=auto&aspect=true",
    },
  ];

  return (
    <div>
      <Header corHeader={"#5FCED4"} />

      <Hero
        linkImage={
          "https://i.pinimg.com/736x/de/bd/c6/debdc6010488eb75240d7becba969c92.jpg"
        }
        heroTitulo={"Beleza começa com uma pele bem cuidada."}
        heroTexto={
          "Quer saber como conquistar um rosto naturalmente bonito? Nesta página, você aprenderá tudo sobre cuidados com a pele. Descubra sua melhor versão e brilhe com confiança!"
        }
        textoPrimeiroBotao={"Dicas"}
        corBotao={"#5FCED4"}
        textoSegundoBotao={"Vídeos"}
      />

      <Banner
        image={
          "https://teiacosmeticos.com/cdn/shop/articles/skincare-para-estos-dias-en-casa-395165.jpg?v=1695166167"
        }
        imageAlt={"Mulher aplicando creme na pele"}
        title={
          "Transforme sua rotina de skincare em um ritual de autocuidado e bem-estar."
        }
        description={
          "Sua pele é única e merece cuidados personalizados. Aqui, você encontra dicas, produtos e conselhos para criar um ritual de skincare personalizado que vai desde a limpeza diária até os tratamentos mais específicos. Saiba como produtos certos podem tratar suas preocupações específicas e transformar sua rotina em um momento para si em qualquer momento. Porque cuidar da pele é cuidar de você."
        }
        corButton={"#5FCED4"}
      />

      <div style={{ marginBottom: "5rem" }}>
        <SkinTypeGrid
          category="Skincare"
          corCategory="#5FCED4"
          title="Tipos de pele"
          oilyImage="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDgvlvTyk_JzmTiMvzmATKp1XNFPycj-LKsGsa07OlrUVxAhgq"
          oilyTitle="Oleosa"
          oilyDescription="Uma pele oleosa produz excesso de sebo, o que causa aparência brilhante e tendência a acne, especialmente no nariz T (testa, nariz e queixo)."
          dryImage="https://escolabelezapura.com.br/wp-content/uploads/2024/06/1.jpg"
          dryTitle="Seca"
          dryDescription="Contém áreas ásperas e tensas, com linhas evidentes ou poros minúsculos, possui pele escamativa, que requer hidratação específica para cada região."
          combinationImage="https://static.stealthelook.com.br/wp-content/uploads/2024/06/bevurecosmetics-skincare.jpg"
          combinationTitle="Mista"
          combinationDescription="Apresenta a espinhas, cravos e oleosidade em algumas áreas, combinada à ressecamento, vermelhidão e poros dilatados."
          normalImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDrXqq2I1Ii8r1EEFvBCSg7nl-6VQm3a9lZ_9Oh4kojkS0eEe"
          normalTitle="Normal"
          normalDescription="Possui os seus poros pequenos, com textura aveludada, sensação de relaxamento e tendência a estabilidade."
        />
      </div>

      <OurMission
        degrade="linear-gradient(180deg,#8fe8ec 0%, #FFF 100%)"
        subtitulo="Skincare Diário"
        corPrincipal="#5FCED4"
        titulo="Rotina Completa para Cuidados com a Pele"
        descricao="Uma rotina de skincare é essencial para manter a saúde da sua pele. Conheça os passos fundamentais para uma pele radiante e saudável em qualquer idade."
        textoBotao="Ver Produtos"
        icones={icones}
      />

      <AcessoriesSection
        degrade="linear-gradient(0deg, #5FCED4 0%, #fff 100%)"
        corPrincipal="#5FCED4"
        subtitulo="Ferramentas de Beleza"
        titulo="Acessórios de Massagem Facial"
        cards={cards}
      />

      <Footer corFooter={"#5FCED4"} />
    </div>
  );
}