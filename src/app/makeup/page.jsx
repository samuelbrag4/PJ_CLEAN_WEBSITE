import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import Banner from '../components/banner'

export default function Maquiagem() {
    return (
        <div>
            <Header corHeader={"#F05080"} />

            <Hero
                linkImage={"https://i.pinimg.com/736x/fa/68/a5/fa68a517817e95ea9e05e0b939e1e7e8.jpg"}
                heroTitulo={"A arte de se maquiar!"}
                heroTexto={"Descubra a arte de se maquiar e transforme sua beleza em confiança! Aprenda técnicas, desde o básico até looks incríveis, para realçar sua beleza natural. Com a maquiagem, você pode expressar sua personalidade, aumentar sua autoestima e celebrar o que tem de mais único. Comece hoje e brilhe!"}
                textoPrimeiroBotao={"Ler Mais"}
                corBotao={"#F05080"}
                textoSegundoBotao={"Sobre"}
            />

            <Banner
                image={"https://negociosdebeleza.beautyfair.com.br/wp-content/uploads/2023/12/tendencias-de-maquiagem-tiktok.png"}
                imageAlt={"Mulher aplicando maquiagem"}
                title={"Descubra o poder transformador da maquiagem em sua rotina diária."}
                description={"A maquiagem é uma forma de arte e expressão. Aqui, você encontra dicas, produtos e conselhos para criar looks incríveis, desde o básico até os mais elaborados. Aprenda como realçar sua beleza natural, experimentar novas tendências e transformar sua rotina de maquiagem em um momento de criatividade e autoconfiança. Porque maquiar-se é celebrar quem você é."}
                corButton={"#F05080"}
            />

            <Footer />
        </div>
    );
};