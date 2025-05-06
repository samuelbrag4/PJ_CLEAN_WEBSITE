"use client";

import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Hero from '../components/hero';
import SectionCardsProducts from '../components/sectionCardsProducts';
import Card from '../components/card';
import styles from './products.module.css';

export default function Produtos() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedCategories, setExpandedCategories] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Erro ao buscar produtos:', error);
                setLoading(false);
            });
    }, []);

    const toggleExpand = (category) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    if (loading) {
        return <div className={styles.loadingContainer}>Carregando...</div>;
    }

    const categoryDescriptions = {
        "Skincare": "Descubra produtos premium para cuidados com a pele que hidratam, renovam e protegem. Nossa linha de skincare é formulada com ingredientes naturais para uma pele radiante e saudável.",
        "Make": "Produtos de maquiagem de alta qualidade que realçam sua beleza natural. Cores vibrantes, fórmulas de longa duração e acabamentos perfeitos para todas as ocasiões.",
        "Body": "Cuide do seu corpo com nossa seleção premium de hidratantes, esfoliantes e óleos corporais que nutrem e deixam sua pele macia e perfumada."
    };
    
    const categoryStyles = {
        "Skincare": {
            section: styles.skincare,
            title: styles.skincareTitleColor
        },
        "Make": {
            section: styles.make,
            title: styles.makeTitleColor
        },
        "Body": {
            section: styles.body,
            title: styles.bodyTitleColor
        }
    };

    return (
        <>
            <Header corHeader={"#DBBD9C"} />

            <Hero
                linkImage={"https://i.pinimg.com/736x/9e/13/13/9e131361b677fcf08ceb74d7156d5636.jpg"}
                heroTitulo={"A Beleza Nunca Esteve Tão Próxima"}
                heroTexto={"Já sabe do que precisa, mas não tem ideia de onde comprar? Venha, vamos te ajudar! Aqui você encontrará produtos perfeitos para o que tem em mente."}
                textoPrimeiroBotao={"Ler Mais"}
                corBotao={"#DBBD9C"}
                textoSegundoBotao={"Sobre"}
            />

            <div className={styles.container}>
                <h1 style={{ textAlign: 'center', color: '#5FCED4', marginBottom: '2rem', fontSize: '2.5rem' }}>
                    Nossos Produtos
                </h1>
                
                <div className={styles.productsWrapper}>
                    {["Skincare", "Make", "Body"].map((category) => {
                        const filteredProducts = products.filter((product) => product.categoria === category);
                        const isExpanded = expandedCategories[category];
                        const categoryStyle = categoryStyles[category];

                        return (
                            <div 
                                key={category} 
                                className={`${styles.categorySection} ${categoryStyle.section}`}
                            >
                                <h2 className={`${styles.categoryTitle} ${categoryStyle.title}`}>
                                    {category}
                                </h2>
                                
                                <p className={styles.categoryDescription}>
                                    {categoryDescriptions[category]}
                                </p>
                                
                                {filteredProducts.length > 0 ? (
                                    <div className={styles.productsGrid}>
                                        {filteredProducts
                                            .slice(0, isExpanded ? filteredProducts.length : 3)
                                            .map((product) => (
                                                <Card
                                                    key={product.id}
                                                    capa={"https://via.placeholder.com/300x200"}
                                                    textoAlt={product.nome}
                                                    categoria={product.categoria}
                                                    titulo={product.nome}
                                                    descricao={product.descricao}
                                                    caminhoArtigo={`/products/${product.id}`}
                                                    corBorda={product.cor}
                                                    corCategoria={product.cor}
                                                />
                                        ))}
                                    </div>
                                ) : (
                                    <div className={styles.noProducts}>
                                        No momento não há produtos disponíveis nesta categoria.
                                    </div>
                                )}
                                
                                {filteredProducts.length > 3 && (
                                    <div className={styles.expandButtonWrapper}>
                                        <button
                                            onClick={() => toggleExpand(category)}
                                            className={styles.expandButton}
                                        >
                                            {isExpanded ? "Ver Menos" : "Ver Mais"}
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <Footer corFooter={"#DBBD9C"} />
        </>
    );
}