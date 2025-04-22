import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import Banner from '../components/banner';

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
                image={"https://teiacosmeticos.com/cdn/shop/articles/skincare-para-estos-dias-en-casa-395165.jpg?v=1695166167"}
                imageAlt={"Mulher aplicando creme na pele"}
                title={"Transforme sua rotina de skincare em um ritual de autocuidado e bem-estar."}
                description={"Sua pele é única e merece cuidados personalizados. Aqui, você encontra dicas, produtos e conselhos para criar um ritual de skincare personalizado que vai desde a limpeza diária até os tratamentos mais específicos. Saiba como produtos certos podem tratar suas preocupações específicas e transformar sua rotina em um momento para si em qualquer momento. Porque cuidar da pele é cuidar de você."}
                corButton={"#5FCED4"}
            />

            <Footer />
        </div>
    );
};