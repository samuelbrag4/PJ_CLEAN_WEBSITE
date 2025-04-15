import Header from '../components/header';
import Card from '../components/card';
import Hero from '../components/hero';
import SectionCards from "../components/sectionCards";
import CategoryBlog from "../components/categoryBlog";
import Footer from "../components/footer";

export default function Blog() {
    return (
        <div>
            <Header corHeader={"#00DAC7"} />

            <Hero
                linkImage={"https://i.pinimg.com/736x/cc/d7/f1/ccd7f15523a1891ec4b20fc2002221c4.jpg"}
                heroTitulo={"Conheça e encotre dicas incríveis!!"}
                heroTexto={"Aqui, você encontrará dicas, tendências e informações sobre skincare, produtos de beleza e cuidados com o corpo. Nosso objetivo é ajudar você a escolher os melhores produtos para a sua rotina, entender os ingredientes e descobrir novas formas de cuidar da sua pele. Fique por dentro das novidades e aproveite nossas recomendações para realçar sua beleza da melhor forma!"}
                textoPrimeiroBotao={"Dicas"}
                corBotao={"#00DAC7"}
                textoSegundoBotao={"Vídeos"}
            />

            <CategoryBlog
            linkImagem={"https://oxioz.com.br/wp-content/uploads/2024/02/rotina-skincare-cuidados-com-a-pele.jpg"}
            textoAlt={"Mulher com uma toca na cabeça passando creme no rosto"}
            titulo={"Skincare"}
            texto={"Cuidar da pele vai muito além da estética—é uma forma de mantê-la saudável e protegida. O skincare ajuda a prevenir o envelhecimento precoce, controla a oleosidade, combate o ressecamento e protege contra agressões externas, como poluição e raios solares. Com uma rotina simples, você pode manter a pele equilibrada e radiante todos os dias. ✨🧴"}
            />

            <SectionCards corBotao={"#00DAC7"} corTextoBotao={"#fff"}>
                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"/article_skincare"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />
            </SectionCards>

            <CategoryBlog
            linkImagem={"https://lucianagarbelini.com.br/wp-content/uploads/2022/10/cuidado-com-as-pernas-pele.jpg"}
            textoAlt={"Pernas de uma mulher com a pele hidratada"}
            titulo={"Corpo"}
            texto={"Hidratar, esfoliar e proteger a pele do corpo são hábitos fundamentais para mantê-la macia, firme e saudável. Produtos como hidratantes, óleos corporais e protetores solares ajudam a evitar o ressecamento, a flacidez e os danos causados pelo sol. Além da estética, cuidar da pele do corpo proporciona uma sensação de bem-estar e relaxamento no dia a dia. 🌿🛀"}
            />

            <SectionCards corBotao={"#00DAC7"} corTextoBotao={"#fff"}>
                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />
            </SectionCards>

            <CategoryBlog
            linkImagem={"https://media.istockphoto.com/id/1149187294/pt/foto/going-for-that-natural-no-makeup-look.jpg?s=612x612&w=0&k=20&c=QqCG6aS2LzTHpFMY8jeRzqNhV7NBU4gyOdzq6-A9RvM="}
            textoAlt={"Pernas de uma mulher com a pele hidratada"}
            titulo={"Maquiagem"}
            texto={"A maquiagem realça a beleza e aumenta a autoestima, mas a escolha dos produtos certos faz toda a diferença. Usar maquiagens de qualidade evita irritações, alergias e até problemas mais sérios na pele. Além disso, produtos bem formulados garantem um acabamento mais bonito e duradouro, deixando sua make impecável sem prejudicar a saúde da pele. 💄💖"}
            />

            <SectionCards corBotao={"#00DAC7"} corTextoBotao={"#fff"}>
                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Hidratação com Argila"}
                    descricao={"A argila é um dos ingredientes naturais mais poderosos para a saúde da pele, oferecendo propriedades purificantes..."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />
            </SectionCards>
            <Footer />
        </div>
    );
};