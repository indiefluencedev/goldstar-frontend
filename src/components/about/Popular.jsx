import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LazyLoad from 'react-lazyload';
import './styles.css';
import GSD8 from '../../assets/images/GS-D8.png';
import GSS6 from '../../assets/images/GS-S6 -UT- EUT.png';
import GSW6 from '../../assets/images/GS-W6-FT-UT.png';
import GS1510D from '../../assets/images/GS-1510D.png';
import GS1530H from '../../assets/images/GS-1530H-D.png';
import GS3020GH from '../../assets/images/GS-3020GH-01A.png';
import GS627 from '../../assets/images/GS-627-62.png';
import GS450 from '../../assets/images/GS-450-500-600.png';
import GSHT from '../../assets/images/GS-HT.png';
import GS20 from '../../assets/images/GS-20-650.png';

const cards = [
    {
        id: 1,
        image: GSD8,
        title: "GS D8",
        description: "Lockstitch_Series",
        seriesID: "667076dc0fc806245a1a0f81",
        modelType: "Lockstitch"
    },
    {
        id: 2,
        image: GSS6,
        title: "GS S6",
        description: "Overlock_Series",
        seriesID: "667079080fc806245a1a1919",
        modelType: "Overlock"
    },
    {
        id: 3,
        image: GSW6,
        title: "GS W6",
        description: "Interlock_Series",
        seriesID: "667138126c5d31a52cd110ca",
        modelType: "Interlock"
    },
    {
        id: 4,
        image: GS1510D,
        title: "GS 1510D",
        description: "Heavyduty_Series",
        seriesID: "66714a8707f8d7b34b016360",
        modelType: "Heavyduty"
    },
    {
        id: 5,
        image: GS1530H,
        title: "GS 1530H",
        description: "ZigZag_Series",
        seriesID: "667651af9c29554db5d60c55",
        modelType: "ZigZag"
    },
    {
        id: 6,
        image: GS3020GH,
        title: "GS 3020GH-01A",
        description: "Special_Series",
        seriesID: "667655079c29554db5d62b95",
        modelType: "SpecialSeries"
    },
    {
        id: 7,
        image: GS627,
        title: "GS 627",
        description: "Cutting_Series",
        seriesID: "6684e398b9ffb032179d5bec",
        modelType: "CuttingSeries"
    },
    {
        id: 8,
        image: GS450,
        title: "GS 450",
        description: "Fusing_Machine_Series",
        seriesID: "667565ea1ffa0dbdd59e84e0",
        modelType: "FusingMachine"
    },
    {
        id: 9,
        image: GSHT,
        title: "GS HT",
        description: "Heat_Transfer_Series",
        seriesID: "66756d48d2d230a29f506f22",
        modelType: "HeatTransfer"
    },
    {
        id: 10,
        image: GS20,
        title: "GS 20",
        description: "Needle_Detector_Series",
        seriesID: "667568b31ffa0dbdd59e9377",
        modelType: "NeedleDetector"
    },
];

const PrevArrow = ({ className, style, onClick }) => (
    <FaArrowLeft className={className} style={{ ...style, display: 'block', color: 'black' }} onClick={onClick} />
);

const NextArrow = ({ className, style, onClick }) => (
    <FaArrowRight className={className} style={{ ...style, display: 'block', color: 'black' }} onClick={onClick} />
);

const CustomCarousel = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const carouselRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true, // Enable infinite looping
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        beforeChange: (current, next) => setCurrentSlide(next),
        afterChange: (current) => setCurrentSlide(current),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true, // Ensure infinite looping for responsive settings
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true, // Ensure infinite looping for responsive settings
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target); // Stop observing once it's in view
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the component is visible
            }
        );

        if (carouselRef.current) {
            observer.observe(carouselRef.current);
        }

        return () => {
            if (carouselRef.current) {
                observer.unobserve(carouselRef.current);
            }
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    };

    const handleCardClick = (modelType, seriesID) => {
        navigate(`/models/${modelType}/${seriesID}`);
    };

    return (
        <motion.div
            ref={carouselRef}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
        >
            <div className='hidden md:block xl:w-[1240px] md:w-[900px] xs:h-[500px] md:h-[600px] mx-auto xs:mt-[50px] md:mt-[100px] xl:mt-[100px]'>
                <h2 className='text-[24px] md:text-[36px] xs:mb-3 xs:mt-5 md:mb-8 text-prime font-assistant font-bold xs:text-center md:text-left '>{t('popular_products')}</h2>
                <Slider {...settings} className="slider-with-margin">
                    {cards.map((card, index) => (
                        <motion.div 
                            key={card.id} 
                            className={`py-10 ${index === currentSlide ? 'current-slide' : 'other-slide'}`} 
                            style={{ transition: 'transform 0.5s', transform: `${index === currentSlide ? 'scale(1.1)' : 'scale(1)'}` }}
                            onClick={() => handleCardClick(card.modelType, card.seriesID)}
                        >
                            <div className="relative bg-prime shadow-lg rounded-md overflow-hidden  mt-8" style={{ maxWidth: '300px', margin: '0 auto' }}>
                                <LazyLoad height={300} offset={100} once>
                                    <img 
                                        src={card.image} 
                                        alt={card.title} 
                                        className="w-[300px] h-[300px] object-contain"
                                    />
                                </LazyLoad>
                                <div className="p-4">
                                    <h3 className="text-xl text-white font-bold">{card.title}</h3>
                                    <p className="text-white mt-2">{t(card.description)}</p>
                                </div>
                            </div>
                       
                            </motion.div>
                        ))}
                </Slider>
            </div>

            <div className='block md:hidden xl:w-[1240px] md:w-[900px] xs:h-[500px] md:h-[600px] mx-auto xs:mt-[50px] md:mt-[300px] xl:mt-[150px]'>
                <h2 className='text-[24px] md:text-[36px] xs:mb-3 xs:mt-5 md:mb-8 text-prime font-assistant font-bold xs:text-center md:text-left '>{t('popular_products')}</h2>
                <Slider {...settings} className="slider-with-margin">
                    {cards.map((card, index) => (
                        <motion.div 
                            key={card.id} 
                            className={`py-10 ${index === currentSlide ? 'current-slide' : 'other-slide'}`} 
                            style={{ transition: 'transform 0.5s', transform: `${index === currentSlide ? 'scale(1.1)' : 'scale(1)'}` }}
                            onClick={() => handleCardClick(card.modelType, card.seriesID)}
                        >
                             <div className="relative bg-prime shadow-lg rounded-md overflow-hidden mt-8" style={{ maxWidth: '300px', margin: '0 auto' }}>
                                <LazyLoad height={300} offset={100} once>
                                    <img 
                                        src={card.image} 
                                        alt={card.title} 
                                        className="w-[300px] h-[300px] object-contain"
                                    />
                                </LazyLoad>
                                <div className="p-4">
                                    <h3 className="text-xl text-white font-bold">{card.title}</h3>
                                    <p className="text-white mt-2">{t(card.description)}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </motion.div>
    );
};

export default CustomCarousel;
