import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './styles.css';
import GSD8 from './images/GS-D8.png';
import GSS6 from './images/GS-S6-UT-EUT.png';
import GSW6 from './images/GS-W6-FT-UT.png';
import GS1510D from './images/GS-1510D.png';
import GS1530H from './images/GS-1530H-D.png';
import GS3020GH from './images/GS-3020GH-01A.png';
import GS627 from './images/GS-627-629.png';
import GS450 from './images/GS-450-500-600MS.png';
import GSHT from './images/GS-HT.png';
import GS20 from './images/GS-20-650.png';

const cards = [
    {
        id: 1,
        image: GSD8,
        title: "GS D8",
        description: "LOCKSTICH SERIES"
    },
    {
        id: 2,
        image: GSS6,
        title: "GS S6",
        description: "OVERLOCK SERIES"
    },
    {
        id: 3,
        image: GSW6,
        title: "GS W6",
        description: "INTERLOCK SERIES"
    },
    {
        id: 4,
        image: GS1510D,
        title: "GS 1510D",
        description: "HAVEYDUTY SERIES"
    },
    {
        id: 5,
        image: GS1530H,
        title: "GS 1530H",
        description: "ZIGZAG SERIES"
    },
    {
        id: 6,
        image: GS3020GH,
        title: "GS 3020GH",
        description: "SPECIAL SERIES"
    },
    {
        id: 7,
        image: GS627,
        title: "GS 627",
        description: "CUTTING SERIES"
    },
    {
        id: 8,
        image: GS450,
        title: "GS 450",
        description: "FUSING SERIES"
    },
    {
        id: 9,
        image: GSHT,
        title: "GS HT",
        description: "HEAT TRANSFER SERIES"
    },
    {
        id: 10,
        image: GS20,
        title: "GS 20",
        description: "NEEDLE DETECTOR SERIES"
    },
];

const PrevArrow = ({ className, style, onClick }) => (
    <FaArrowLeft className={className} style={{ ...style, display: 'block', color: 'black' }} onClick={onClick} />
);

const NextArrow = ({ className, style, onClick }) => (
    <FaArrowRight className={className} style={{ ...style, display: 'block', color: 'black' }} onClick={onClick} />
);

const CustomCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: false,
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
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <>
        <div className='hidden md:block xl:w-[1240px] md:w-[900px] h-[500px] mx-auto xs:mt-[50px] md:mt-[300px] xl:mt-[150px]'>
            <h2 className='text-[24px] md:text-[36px] xs:mb-3 xs:mt-5  md:mb-8 text-prime font-assistant font-bold xs:text-center md:text-left '>Popular Products</h2>
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={card.id} className={`pt-10  ${index === currentSlide ? 'current-slide' : 'other-slide'}`} style={{ transition: 'transform 0.5s', transform: `${index === currentSlide ? 'scale(1.1)' : 'scale(1)'}` }}>
                        <div className="relative bg-white shadow-lg rounded-md overflow-hidden mt-8" style={{ maxWidth: '300px', margin: '0 auto' }}>
                            <img src={card.image} alt={card.title} className="w-full h-64 object-contain" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{card.title}</h3>
                                <p className="text-gray-500 mt-2">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div key="padding-left" style={{ width: '0px' }} />
                <div key="padding-right" style={{ width: '0px' }} />
            </Slider>
        </div>


<div className='block md:hidden xl:w-[1240px] md:w-[900px] h-[500px] mx-auto xs:mt-[50px] md:mt-[300px] xl:mt-[150px]'>
<h2 className='text-[24px] md:text-[36px] xs:mb-3 xs:mt-5  md:mb-8 text-prime font-assistant font-bold xs:text-center md:text-left '>Popular Products</h2>
<Slider {...settings}>
    {cards.map((card, index) => (
        <div key={card.id} className={`pt-10  ${index === currentSlide ? 'current-slide' : 'other-slide'}`} style={{ transition: 'transform 0.5s', transform: `${index === currentSlide ? 'scale(1.1)' : 'scale(1)'}` }}>
            <div className="relative bg-white shadow-lg rounded-md overflow-hidden mt-8" style={{ maxWidth: '300px', margin: '0 auto' }}>
                <img src={card.image} alt={card.title} className="w-full h-64 object-contain" />
                <div className="p-4">
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className="text-gray-500 mt-2">{card.description}</p>
                </div>
            </div>
        </div>
    ))}
</Slider>
</div>
</>
    );
};

export default CustomCarousel;
