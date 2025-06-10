import AcessoriesSection from "../components/acessoriesSection";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import OurMission from "../components/ourMissionSection";
import SkinTypeGrid from "../components/skinTypeGrid";
import Banner from "../components/banner";
import { FaSoap, FaPumpSoap } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { RiBubbleChartFill } from "react-icons/ri";

const icones = [
  {
    icone: <FaSoap size={24} />,
    tituloIcone: "Limpeza Corporal",
    descricaoIcone:
      "Remova impurezas com sabonetes específicos para seu tipo de pele",
  },
  {
    icone: <RiBubbleChartFill size={24} />,
    tituloIcone: "Esfoliação",
    descricaoIcone: "Ajuda a renovar a pele e melhorar a absorção dos produtos",
  },
  {
    icone: <FaDroplet size={24} />,
    tituloIcone: "Hidratação",
    descricaoIcone: "Previne o ressecamento e mantém a pele suave e protegida",
  },
  {
    icone: <FaPumpSoap size={24} />,
    tituloIcone: "Proteção Solar",
    descricaoIcone: "Protege contra os danos do sol e o envelhecimento precoce",
  },
];

const cards = [
  {
    titulo: "Escova Corporal a Seco",
    descricao:
      "Estimula a circulação sanguínea, promove esfoliação suave e melhora a textura da pele antes do banho.",
    imagem:
      "https://soulbm.com.br/wp-content/uploads/2024/11/soulbm-produto-escova-seca-0-e1735928901607.png",
  },
  {
    titulo: "Massageador Corporal de Madeira",
    descricao:
      "Auxilia na redução da tensão muscular, ativa a circulação e pode ajudar no combate à celulite.",
    imagem:
      "https://mlrvosfzmdah.i.optimole.com/w:338/h:338/q:mauto/rt:fill/g:ce/f:avif/id:0bc607dcc5fb2ef9143cb1aad3bc7ee2/https://hakunamatatabrindes.com.br/Carrinho-de-Madeira-para-Massagem.jpg",
  },
  {
    titulo: "Luvas Esfoliantes",
    descricao:
      "Removem células mortas, desobstruem os poros e deixam a pele mais macia e pronta para hidratação.",
    imagem:
      "https://img.joomcdn.net/e6321fb0fa4e66b13f44c7ca77b8397cec18088d_original.jpeg",
  },
  {
    titulo: "Massageador de Silicone",
    descricao:
      "Ideal para aplicar cremes com movimentos circulares, melhora a absorção dos ativos e promove relaxamento.",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_990510-MLA83238645725_032025-F.webp",
  },
  {
    titulo: "Bucha Vegetal Natural",
    descricao:
      "Feita de fibras naturais, promove esfoliação eficaz durante o banho, ajudando na renovação celular e deixando a pele mais macia.",
    imagem:
      "https://cdn.awsli.com.br/2500x2500/1994/1994328/produto/180911782/74487acd59.jpg",
  },
  {
    titulo: "Pedra-Pomes para Pés",
    descricao:
      "Ideal para remover calosidades e asperezas dos pés, deixando a pele mais lisa e suave ao toque.",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/159791/lixa_de_madeira_para_pes_mista_com_pedra_pomes_01_ou_12_unidades_4859_1_20240718174555.jpg",
  },
  {
    titulo: "Óleo Corporal Hidratante",
    descricao:
      "Rico em nutrientes e antioxidantes, hidrata profundamente, deixando a pele nutrida, luminosa e com toque sedoso.",
    imagem:
      "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B49418/NSPA-OL-DES-HID-CPO-QUIN-AMEN_V3_B49418.jpg",
  },
  {
    titulo: "Ventosas de Silicone",
    descricao:
      "Utilizadas para massagens com efeito de vácuo, ajudam a ativar a circulação, aliviar tensões e potencialmente reduzir celulites.",
    imagem:
      "https://m.media-amazon.com/images/I/51hRSfKXSBL._AC_UF1000,1000_QL80_.jpg",
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
      />

      <Banner
        image={
          "https://ohwell.com.br/cdn/shop/files/AnyConv.com__fotos-site-3_2048x.webp?v=1747224483"
       }
        imageAlt={"Mulher aplicando creme no corpo"}
        title={
          "Transforme o cuidado com o corpo em um momento de bem-estar e autoestima."
        }
        description={
          "Cada parte do seu corpo merece atenção especial. Nesta página, você encontrará orientações, produtos e dicas para hidratação, esfoliação, massagens e muito mais. Crie uma rotina corporal que respeite as necessidades da sua pele, alivie o estresse do dia a dia e eleve sua autoestima. Porque cuidar do corpo é investir em saúde e amor-próprio."
        }
        corButton={"#DBBD9C"}
      />

      <SkinTypeGrid
        category="CORPO"
        corCategory="#DBBD9C"
        title="O que influencia na saúde e beleza da sua pele corporal?"
        oilyImage="https://www.gioesteticaavancada.com.br/wp-content/uploads/2020/08/post_thumbnail-d9966bb36fc0dfe546bb23cfb5a2c9f9.jpeg"
        oilyTitle="Hidratação"
        oilyDescription="Manter a pele hidratada é essencial para evitar o ressecamento e a descamação. Cremes com ativos como ureia e ácido hialurônico ajudam a reter a umidade e proteger a pele."
        dryImage="https://nutrimaiaralima.com.br/wp-content/uploads/2020/09/nutricao-no-combate-as-doencas.jpeg"
        dryTitle="Nutrição"
        dryDescription="A nutrição da pele ajuda a manter sua elasticidade e maciez. Produtos com vitaminas, óleos vegetais e manteigas naturais nutrem profundamente e restauram a barreira cutânea."
        combinationImage="https://s2-marieclaire.glbimg.com/zBfNLrL4IMOYPkriNZnYiF85bHU=/0x0:1920x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_51f0194726ca4cae994c33379977582d/internal_photos/bs/2023/l/m/wOdWrASUOrkBLxQcBOPA/ativos-bodycare.jpg"
        combinationTitle="Rotina"
        combinationDescription="A consistência nos cuidados é chave para resultados duradouros. Estabelecer uma rotina com limpeza, esfoliação e hidratação melhora a saúde da pele ao longo do tempo."
        normalImage="https://www.maria.pt/wp-content/uploads/2019/06/1-59.jpg"
        normalTitle="Proteção"
        normalDescription="A exposição ao sol sem proteção pode causar manchas e envelhecimento precoce. Use protetor solar diariamente, mesmo em dias nublados, para manter sua pele protegida."
      />

      <OurMission
        degrade="linear-gradient(180deg,rgb(248, 223, 194) 0%, #FFF 100%)"
        subtitulo="Autocuidado Corporal"
        corPrincipal="#DBBD9C"
        titulo="Rotina Completa para Cuidados com o Corpo"
        descricao="Adotar uma rotina de cuidados corporais é essencial para manter a pele saudável, macia e protegida. Conheça os passos fundamentais para cuidar do seu corpo."
        textoBotao="Ver Produtos"
        icones={icones}
      />

      <AcessoriesSection
        degrade="linear-gradient(0deg, #d2ad84 0%, #fff 100%)"
        corPrincipal="#DBBD9C"
        subtitulo="Cuidados Corporais"
        titulo="Acessórios para Massagem e Relaxamento Corporal"
        cards={cards}
      />

<SkinTypeGrid
  category="CORPO"
  corCategory="#DBBD9C"
  title="Fatores que impactam a pele do corpo no dia a dia"
  oilyImage="https://www.psicologoeterapia.com.br/wp-content/uploads/estresse-e-psicologia-2.jpg"
  oilyTitle="Estresse"
  oilyDescription="O estresse libera hormônios como o cortisol, que afetam diretamente a barreira da pele, tornando-a mais sensível e propensa a inflamações e alergias. Técnicas de relaxamento ajudam no equilíbrio corporal."
  dryImage="https://widoctor.com.br/wp-content/uploads/2020/05/hot-weather-temperatures.jpg"
  dryTitle="Clima"
  dryDescription="Mudanças bruscas de temperatura, vento frio ou calor excessivo ressecam e sensibilizam a pele do corpo. Ajustar os cuidados conforme a estação é essencial para evitar danos."
  combinationImage="https://static1.minhavida.com.br/articles/d3/81/c6/ba/apertada-orig-1.jpg"
  combinationTitle="Roupas"
  combinationDescription="Tecidos sintéticos e roupas muito apertadas dificultam a respiração da pele, podendo causar irritações, suor excessivo e até acne corporal. Prefira tecidos naturais como algodão."
  normalImage="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3523556:1718716527/WhatsApp%20Image%202024-06-18%20at%2010.15.40.jpeg?f=16x9&h=574&w=1020&$p$f$h$w=65f706d"
  normalTitle="Banhos Prolongados"
  normalDescription="Banhos muito quentes e demorados removem a oleosidade natural da pele, deixando-a ressecada e vulnerável. Opte por água morna e evite o uso excessivo de sabonetes agressivos."
/>

      <Footer corFooter={"#DBBD9C"} />
    </div>
  );
}