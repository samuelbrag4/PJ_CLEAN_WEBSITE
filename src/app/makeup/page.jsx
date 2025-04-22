import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import Banner from '../components/banner';
import SkinTypeGrid from '../components/skinTypeGrid';

export default function Maquiagem() {
    return (
        <div style={styles.pageContainer}>
            <Header corHeader="#F05080" />

            <main style={styles.mainContent}>
                <Hero
                    linkImage="https://i.pinimg.com/736x/fa/68/a5/fa68a517817e95ea9e05e0b939e1e7e8.jpg"
                    heroTitulo="A arte de se maquiar!"
                    heroTexto="Descubra a arte de se maquiar e transforme sua beleza em confiança! Aprenda técnicas, desde o básico até looks incríveis, para realçar sua beleza natural. Com a maquiagem, você pode expressar sua personalidade, aumentar sua autoestima e celebrar o que tem de mais único. Comece hoje e brilhe!"
                    textoPrimeiroBotao="Ler Mais"
                    corBotao="#F05080"
                    textoSegundoBotao="Sobre"
                />

                <div style={styles.contentContainer}>
                    <Banner
                        image="https://negociosdebeleza.beautyfair.com.br/wp-content/uploads/2023/12/tendencias-de-maquiagem-tiktok.png"
                        imageAlt="Mulher aplicando maquiagem"
                        title="Descubra o poder transformador da maquiagem em sua rotina diária."
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

                    <Banner
                        image="https://teiacosmeticos.com/cdn/shop/articles/skincare-para-estos-dias-en-casa-395165.jpg?v=1695166167"
                        imageAlt="Mulher aplicando creme na pele"
                        title="Transforme sua rotina de skincare em um ritual de autocuidado e bem-estar."
                        description="Sua pele é única e merece cuidados personalizados. Aqui, você encontra dicas, produtos e conselhos para criar um ritual de skincare personalizado que vai desde a limpeza diária até os tratamentos mais específicos. Saiba como produtos certos podem tratar suas preocupações específicas e transformar sua rotina em um momento para si em qualquer momento. Porque cuidar da pele é cuidar de você."
                        corButton="#5FCED4"
                    />
                </div>
            </main>

            <Footer style={styles.footer} />
        </div>
    )
}

const styles = {
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#fff',
    },
    mainContent: {
        flex: 1,
        width: '100%',
    },
    contentContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
    },
    footer: {
        width: '100%',
        backgroundColor: '#f8f8f8',
        padding: '30px 0',
        marginTop: 'auto',
    },
    '@media (max-width: 768px)': {
        contentContainer: {
            padding: '15px',
        },
    },
    '@media (max-width: 480px)': {
        contentContainer: {
            padding: '10px',
        },
    }
};