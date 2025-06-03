import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Banner from "../components/banner";
import SkinTypeGrid from "../components/skinTypeGrid";
import styles from "./makeup.module.css";
import OurMission from "../components/ourMissionSection";
import AcessoriesSection from "../components/acessoriesSection";

import { FaSoap, FaPumpSoap } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { RiBubbleChartFill } from "react-icons/ri";

export default function Maquiagem() {
  const icones = [
    {
      icone: <FaSoap size={24} />,
      tituloIcone: "Preparação da Pele",
      descricaoIcone:
        "Limpe e hidrate a pele antes de maquiar para melhorar a aderência dos produtos",
    },
    {
      icone: <RiBubbleChartFill size={24} />,
      tituloIcone: "Primer",
      descricaoIcone:
        "Minimiza poros, controla oleosidade e aumenta a durabilidade da maquiagem",
    },
    {
      icone: <FaDroplet size={24} />,
      tituloIcone: "Base e Corretivo",
      descricaoIcone:
        "Uniformizam o tom da pele e disfarçam imperfeições para um acabamento impecável",
    },
    {
      icone: <FaPumpSoap size={24} />,
      tituloIcone: "Fixação",
      descricaoIcone:
        "Finalize com pó ou spray fixador para selar a maquiagem e prolongar o efeito",
    },
  ];

  const cards = [
    {
      titulo: "Esponja de Maquiagem",
      descricao:
        "Ideal para aplicar base e corretivo com acabamento natural e sem marcas. Pode ser usada seca ou úmida.",
      imagem:
        "https://cdn-cosmos.bluesoft.com.br/products/731509637076/2018-07-27-15-24-37-0300",
    },
    {
      titulo: "Pincel Kabuki",
      descricao:
        "Perfeito para aplicar base líquida ou em pó de maneira uniforme e com alta cobertura.",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/615021/pincel_kabuki_maquiagem_rosa_popular_cerda_macia_kit_10un_8295_1_d15c5d9a7a907391b476c2be3c2acbb4.jpg",
    },
    {
      titulo: "Curvador de Cílios",
      descricao:
        "Realça o olhar curvando os cílios antes da aplicação da máscara, para um efeito mais expressivo.",
      imagem:
        "https://acdn-us.mitiendanube.com/stores/001/999/459/products/curvex-0b3aa53aa970ea36cd17066257581618-1024-1024.png",
    },
    {
      titulo: "Organizador de Maquiagem",
      descricao:
        "Facilita o armazenamento e acesso rápido aos seus produtos favoritos, mantendo tudo em ordem.",
      imagem:
        "https://acrilicostore.fbitsstatic.net/img/p/organizador-de-maquiagem-4-gavetas-com-bandeja-para-batom-70136/256618-5.jpg?w=1000&h=1000&v=no-change&qs=ignore",
    },
    {
      titulo: "Delineador em Gel",
      descricao:
        "Proporciona um acabamento mais intenso e preciso, ideal para criar linhas finas ou grossas com facilidade.",
      imagem:
        "https://cdn.awsli.com.br/2258/2258692/produto/315171742/delineador-em-gel-ruby-rose-1ggujqncay.png",
    },
    {
      titulo: "Paleta de Sombras Nude",
      descricao:
        "Com uma variedade de tons neutros, é perfeita para criar looks suaves e elegantes, do dia a noite.",
      imagem:
        "https://images.tcdn.com.br/img/img_prod/826475/paleta_de_sombras_nude_dalla_689_1_91cbd8f37d24d542b8d30b046491c2fa.png",
    },
    {
      titulo: "Lábios Matte",
      descricao:
        "Batom de acabamento matte com longa duração, que garante lábios perfeitos e sem retoques durante o dia.",
      imagem:
        "https://i8.amplience.net/i/Cosnova/5305520",
    },
    {
      titulo: "Fixador de Maquiagem",
      descricao:
        "Prolonga a durabilidade da maquiagem, mantendo o rosto fresco e com aspecto impecável durante o dia todo.",
      imagem:
        "https://cdn.sistemawbuy.com.br/arquivos/cad5cc7133685cdd8d0d7880d11cba96/produtos/668dab35e7691/b554be9b70-668dab6f1be5d.jpg",
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header corHeader="#F05080" />

      <div className={styles.contentWrapper}>
        <main className={styles.mainContent}>
          <Hero
            linkImage="https://i.pinimg.com/736x/fa/68/a5/fa68a517817e95ea9e05e0b939e1e7e8.jpg"
            heroTitulo="A arte de se maquiar!"
            heroTexto="Descubra a arte de se maquiar e transforme sua beleza em confiança! Aprenda técnicas, desde o básico até looks incríveis, para realçar sua beleza natural. Com a maquiagem, você pode expressar sua personalidade, aumentar sua autoestima e celebrar o que tem de mais único. Comece hoje e brilhe!"
            textoPrimeiroBotao="Ler Mais"
            corBotao="#F05080"
            textoSegundoBotao="Sobre"
          />

          <Banner
            title="Descubra o poder transformador da maquiagem em sua rotina diária."
            image={
              "https://www.dior.com/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw20778d98/images/beauty/0-HOME/MAKEUP/2025/04_APRIL/DEVA_MAIN_LOOK_2400x3000.png"
            }
            description="A maquiagem é uma forma de arte e expressão. Aqui, você encontra dicas, produtos e conselhos para criar looks incríveis, desde o básico até os mais elaborados. Aprenda como realçar sua beleza natural, experimentar novas tendências e transformar sua rotina de maquiagem em um momento de criatividade e autoconfiança. Porque maquiar-se é celebrar quem você é."
            corButton="#F05080"
          />

          <SkinTypeGrid
            category="Makeup"
            corCategory="#F05080"
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
            degrade="linear-gradient(180deg,rgb(248, 159, 186) 0%, #FFF 100%)"
            subtitulo="Skincare Diário"
            corPrincipal="#F05080"
            titulo="Rotina Completa para Cuidados com a Pele"
            descricao="Uma rotina de skincare é essencial para manter a saúde da sua pele. Conheça os passos fundamentais para uma pele radiante e saudável em qualquer idade."
            textoBotao="Ver Produtos"
            corHover="#f88aab"
            icones={icones}
          />

          <div className={styles.contentContainer}>
            <AcessoriesSection
              degrade="linear-gradient(0deg, #f88aab 0%, #fff 100%)"
              corPrincipal="#F05080"
              subtitulo="Ferramentas de Beleza"
              titulo="Acessórios Essenciais para Maquiagem"
              cards={cards}
            />


<SkinTypeGrid
  category="Maquiagem"
  corCategory="#F05080"
  title="O que impacta na qualidade da sua maquiagem?"
  oilyImage="https://s2-marieclaire.glbimg.com/-qoEIaVQO8kosFL9WRjgh1O_IMo=/0x0:1080x608/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_51f0194726ca4cae994c33379977582d/internal_photos/bs/2024/C/A/XBpBUcRp2b4h1gInNU3Q/clipdown.app-448018408-784096320174849-9039574458607882360-n-1-.jpg"
  oilyTitle="Acabamento Matte"
  oilyDescription="Para peles oleosas, um acabamento matte é ideal, pois controla a oleosidade e garante que a maquiagem permaneça intacta durante o dia."
  dryImage="https://www.maybelline.com.br/-/media/project/loreal/brand-sites/mny/americas/br/artigos/2024/rosto/categoria-pai/make-glow/extensao-cilios-2.jpg?rev=e762fa8b824145639fd37e9f3922b68c&cx=0.45&cy=0.58&cw=650&ch=650&hash=A139FA9FD5F211C4F3076C588B61D622"
  dryTitle="Hidratação e Luminosidade"
  dryDescription="Peles secas se beneficiam de produtos que oferecem hidratação e um toque luminoso, para evitar que a maquiagem fique craquelada."
  combinationImage="https://www.maybelline.com.br/-/media/project/loreal/brand-sites/mny/americas/br/artigos/2024/rosto/categoria-pai/tendencia-maquiagem-natural/maquiagem-natural.jpg?rev=01961784b0a34aecb0fc5527ebe32fff&cx=0.45&cy=0.43&cw=650&ch=650&hash=431438EEF2A81887006ECDABE1F66D10"
  combinationTitle="Acabamento Natural"
  combinationDescription="Para peles mistas, produtos com acabamento natural são ideais. Eles proporcionam uma cobertura equilibrada, sem deixar a pele oleosa ou ressecada."
  normalImage="https://www.adoromaquiagem.com.br/wp-content/uploads/2024/04/horizontal-shot-pleased-woman-closes-eyes-smiles-broadly-holds-cosmetic-brushes-applying-makeup-wears-headband-casual-t-shirt-isolated-beige-background-facial-skin-care-concept-scaled.webp"
  normalTitle="Versatilidade"
  normalDescription="Peles normais podem usar uma variedade maior de produtos, permitindo que a maquiagem tenha diferentes acabamentos e texturas, do matte ao glow."
/>

          </div>
        </main>
      </div>

      <div className={styles.contentFooter}>
        <Footer corFooter="#F05080" />
      </div>
    </div>
  );
}
