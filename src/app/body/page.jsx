import AcessoriesSection from "../components/acessoriesSection";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import OurMission from "../components/ourMissionSection";
import Banner from "../components/banner";
import SkinTypeGrid from "../components/skinTypeGrid";
import { FaSoap, FaPumpSoap } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { RiBubbleChartFill } from "react-icons/ri";

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

export default function Corpo() {
  return (
    <div>
      <Header corHeader={"#DBBD9C"} />

      <Hero
        linkImage={
          "https://i.pinimg.com/736x/9e/13/13/9e131361b677fcf08ceb74d7156d5636.jpg"
        }
        heroTitulo={
          "Seu corpo merece todo o cuidado e atenção para se sentir bem."
        }
        heroTexto={
          "Quer saber como conquistar um rosto naturalmente bonito? Nesta página, você aprenderá tudo sobre cuidados com a pele. Descubra sua melhor versão e brilhe com confiança!"
        }
        textoPrimeiroBotao={"Dicas"}
        corBotao={"#DBBD9C"}
        textoSegundoBotao={"Vídeos"}
      />

      <Banner
        image="https://negociosdebeleza.beautyfair.com.br/wp-content/uploads/2023/12/tendencias-de-maquiagem-tiktok.png"
        imageAlt="Mulher aplicando maquiagem"
        title="Descubra o poder transformador da maquiagem em sua rotina diária."
        description="A maquiagem é uma forma de arte e expressão. Aqui, você encontra dicas, produtos e conselhos para criar looks incríveis, desde o básico até os mais elaborados. Aprenda como realçar sua beleza natural, experimentar novas tendências e transformar sua rotina de maquiagem em um momento de criatividade e autoconfiança. Porque maquiar-se é celebrar quem você é."
        corButton="#DBBD9C"
      />

      <SkinTypeGrid
        category="Makeup"
        corCategory="#DBBD9C"
        title="O que influencia na qualidade da sua maquiagem?"
        oilyImage="https://topview.com.br/wp-content/uploads/2024/01/retrato-de-mulher-jovem-e-bonita-com-um-produto-de-maquiagem.jpg"
        oilyTitle="Durabilidade"
        oilyDescription="A durabilidade da maquiagem depende de fatores como a qualidade dos produtos e a preparação da pele. Produtos de longa duração ajudam a manter o visual intacto por mais tempo."
        dryImage="https://www.fashionbubbles.com/wp-content/uploads/2024/11/make-azul-bebe-tendencia-2.jpg"
        dryTitle="Pigmentação"
        dryDescription="A pigmentação é essencial para cores vibrantes e intensas. Produtos bem pigmentados garantem um acabamento mais profissional e marcante."
        combinationImage="https://24698e6a.delivery.rocketcdn.me/wp-content/uploads/2022/03/makes-de-euphoria-ideias-de-maquiagens-inspiradas-na-serie-de-sucesso-63.jpg"
        combinationTitle="Textura"
        combinationDescription="A textura dos produtos influencia diretamente na aplicação e no acabamento. Texturas leves e uniformes proporcionam um visual mais natural e confortável."
        normalImage="https://nomoremag.com/wp-content/uploads/2023/04/young-female-model-portrait-10x8-1.jpg"
        normalTitle="Segurança"
        normalDescription="A segurança dos produtos é fundamental. Escolha maquiagens dermatologicamente testadas e livres de substâncias nocivas para evitar irritações e alergias."
      />

      <OurMission
        degrade="linear-gradient(180deg,rgb(241, 213, 182) 0%, #FFF 100%)"
        subtitulo="Skincare Diário"
        corPrincipal="#DBBD9C"
        titulo="Rotina Completa para Cuidados com a Pele"
        descricao="Uma rotina de skincare adequada é essencial para manter a saúde da sua pele. Conheça os passos fundamentais para uma pele radiante e saudável em qualquer idade."
        textoBotao="Ver Produtos"
        icones={icones}
      />

      <AcessoriesSection
        subtitulo="Ferramentas de Beleza"
        titulo="Acessórios de Massagem Facial"
        cards={[
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
        ]}
      />

      <Footer corFooter={"#DBBD9C"} />
    </div>
  );
}
