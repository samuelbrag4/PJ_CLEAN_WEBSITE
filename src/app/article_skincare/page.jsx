import Header from '../components/header';
import BannerArticle from '../components/bannerArticle';
import Footer from '../components/footer';

export default function ArtigoSkincare() {
    return (
        <div>
            <Header corHeader={"#00DAC7"}/>

            <BannerArticle linkImagem="https://capricho.abril.com.br/wp-content/uploads/2022/06/skincare-rotina-com-mascara-de-argila-verde.jpg?quality=85&strip=info" textoAlt="Mulher aplicando argila no rosto"/>

            <Footer />
        </div>
    );
};