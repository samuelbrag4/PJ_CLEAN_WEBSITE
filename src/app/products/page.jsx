import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import SectionCardsProducts from '../components/sectionCardsProducts';
import SectionCards from '../components/sectionCards';
import Card from '../components/card';

export default function Produtos() {
    return (
        <div>
            <Header corHeader={"#DBBD9C"} />

            <Hero
                linkImage={"https://i.pinimg.com/736x/9e/13/13/9e131361b677fcf08ceb74d7156d5636.jpg"}
                heroTitulo={"A Beleza Nunca Esteve Tão Próxima"}
                heroTexto={"Já sabe do que precisa, mas não tem ideia de onde comprar? Venha, vamos te ajudar! Aqui você encontrará produtos perfeitos para o que tem em mente. "}
                textoPrimeiroBotao={"Ler Mais"}
                corBotao={"#DBBD9C"}
                textoSegundoBotao={"Sobre"}
            />

            <SectionCardsProducts titulo={"Skincare"} corGradiente={"#5FCED4"}>

                <SectionCards corBotao={"#FFF"}  corTextoBotao={"#5FCED4"}>

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
                    titulo={"Esfoliação"}
                    descricao={"A esfoliação facial tem vários benefícios, como a renovação celular, a redução de cravos e espinhas, e a preparação da pele para tratamentos."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Massagens"}
                    descricao={"Tras vários benefícios, a melhora da circulação, reduz inchaços, tonifica a pele, suaviza linhas de expressão, alivia o stress, melhora o sono, melhora a imunidade, rejuvenesce a pele."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Tônificação"}
                    descricao={"A tonificação facial tem vários benefícios, como a limpeza profunda, o equilíbrio do pH, a redução da oleosidade e a desobstrução dos poros."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Alimentação"}
                    descricao={"Uma alimentação equilibrada, rica em vitaminas, minerais e antioxidantes, pode ajudar a manter a pele saudável e bonita."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Skincare"}
                    titulo={"Proteção"}
                    descricao={" A proteção do rosto com protetor solar facial traz diversos benefícios, como prevenir manchas, queimaduras e câncer de pele e evitar o envelhecimento precoce."}
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

            </SectionCardsProducts>

            <SectionCardsProducts titulo={"Maquiagem"} corGradiente={"#F05080"}>

                <SectionCards corGradiente={"#5FCED4"} corBotao={"#FFF"}  corTextoBotao={"#F05080"}>

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Maquiagem"}
                    titulo={"Preparação da Pele"}
                    descricao={"Uma maquiagem impecável começa muito antes da base e do corretivo. A preparação da pele é essencial para garantir um resultado perfeito."}
                    caminhoArtigo={"/article_skincare"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Maquiagem"}
                    titulo={"Cobertura"}
                    descricao={"A cobertura de uma maquiagem depende do tipo de base que é usada e das necessidades da pele. As bases podem ter cobertura leve, média ou alta."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Maquiagem"}
                    titulo={"Pó Solto "}
                    descricao={"O pó solto é fino e leve, assim, ele proporciona um acabamento mais natural à make. Com um efeito aveludado e acetinado, ele também tira o brilho do rosto quando necessário."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Maquiagem"}
                    titulo={"Blush"}
                    descricao={"O blush serve para dar cor às maçãs do rosto, realçando-as e deixando a pele com um aspecto saudável. É um elemento fundamental para equilibrar a maquiagem."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Maquiagem"}
                    titulo={"Contorno "}
                    descricao={"O contorno na maquiagem serve para definir e esculpir o rosto, realçando as melhores características e criando uma ilusão de ótica."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Maquiagem"}
                    titulo={"Iluminador"}
                    descricao={"O iluminador é um produto de maquiagem que dá brilho e luminosidade à pele, realçando pontos estratégicos do rosto. Pode ser usado em festas, eventos especiais ou no dia a dia."}
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

            </SectionCardsProducts>

            <SectionCardsProducts titulo={"Corpo"} corGradiente={"#DBBD9C"}>

                <SectionCards corGradiente={"#5FCED4"} corBotao={"#FFF"}  corTextoBotao={"#5FCED4"}>

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Corpo"}
                    titulo={"Pele seca?"}
                    descricao={"A pele seca pode causar desconforto, ressecamento e até descamação, principalmente em climas frios ou ambientes..."}
                    caminhoArtigo={"/article_skincare"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Corpo"}
                    titulo={"Depilação"}
                    descricao={"Uma depilação mal feita ou inadequada pode causar dermatites alérgicas, queimaduras, manchas, sem falar nos possíveis riscos de transmissão de doenças e podendo causar alergia."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Corpo"}
                    titulo={"Esfoliação"}
                    descricao={"A esfoliação corporal tem vários benefícios, como deixar a pele mais macia, uniformizar o tom, e estimular a produção de colágeno. É importante não exagerar, pois pode causar irritação."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Corpo"}
                    titulo={"Massagem"}
                    descricao={"A massagem corporal tem benefícios como por exemplo: aliviar dores, tensões musculares, melhora a circulação sanguínea, reduz inchaço e a recuperação muscular."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Corpo"}
                    titulo={"Sais de Banho"}
                    descricao={"Os sais de banho podem ser bons para o corpo, pois ajudam a relaxar, desintoxicar a pele, melhorar a circulação e a hidratação da pele."}
                    caminhoArtigo={"https://www.belezanaweb.com.br/loucas-por-beleza/como-usar-argila-no-cabelo/"}
                    corBorda={"#00DAC7"}
                    corCategoria={"#00DAC7"}
                />

                <Card
                    capa={"https://artex.com.br/emcasa/wp-content/uploads/2021/03/skincare4.png"}
                    textoAlt={"Mulher deitada com uma toalha na cabeça e um argila no rosto"}
                    categoria={"Corpo"}
                    titulo={"Sol"}
                    descricao={"Tomar sol pode fazer bem à saúde, mas é importante não exagerar. A exposição ao sol é fundamental para a produção de vitamina D, que é essencial para a saúde dos ossos e músculos."}
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

            </SectionCardsProducts>

            <Footer corFooter={"#DBBD9C"} />
        </div>
    );
};