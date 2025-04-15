import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import Banner from '../components/banner';

export default function Skincare() {
    return (
        <div>
            <Header corHeader={"#5FCED4"} />

            <Hero
                linkImage={"https://i.pinimg.com/736x/de/bd/c6/debdc6010488eb75240d7becba969c92.jpg"}
                heroTitulo={"Beleza começa com uma pele bem cuidada."}
                heroTexto={"Quer saber como conquistar um rosto naturalmente bonito? Nesta página, você aprenderá tudo sobre cuidados com a pele. Descubra sua melhor versão e brilhe com confiança!"}
                textoPrimeiroBotao={"Dicas"}
                corBotao={"#5FCED4"}
                textoSegundoBotao={"Vídeos"}
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