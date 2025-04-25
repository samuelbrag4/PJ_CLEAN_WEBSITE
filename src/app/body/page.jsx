import AcessoriesSection from "../components/acessoriesSection";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import OurMission from "../components/ourMissionSection";
import { FaSoap, FaPumpSoap } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { RiBubbleChartFill } from "react-icons/ri";

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

      <OurMission
        subtitulo="Skincare Diário"
        titulo="Rotina Completa para Cuidados com a Pele"
        descricao="Uma rotina de skincare adequada é essencial para manter a saúde da sua pele. Conheça os passos fundamentais para uma pele radiante e saudável em qualquer idade."
        textoBotao="Ver Produtos"
        icones={[
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
        ]}
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
