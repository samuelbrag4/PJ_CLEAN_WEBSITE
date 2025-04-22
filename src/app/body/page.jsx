import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import OurMission from '../components/ourMission';

export default function Corpo() {
    return (
        <div>
            <Header corHeader={"#DBBD9C"}/>

            <Hero
                linkImage={"https://i.pinimg.com/736x/9e/13/13/9e131361b677fcf08ceb74d7156d5636.jpg"}
                heroTitulo={"Seu corpo merece todo o cuidado e atenção para se sentir bem."}
                heroTexto={"Quer saber como conquistar um rosto naturalmente bonito? Nesta página, você aprenderá tudo sobre cuidados com a pele. Descubra sua melhor versão e brilhe com confiança!"}
                textoPrimeiroBotao={"Dicas"}
                corBotao={"#DBBD9C"}
                textoSegundoBotao={"Vídeos"}
            />

            <OurMission />

            <Footer />
        </div>
    );
};