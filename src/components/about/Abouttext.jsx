import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Aboutimage1 from '../../assets/png/abotimage2.jpg';
import Aboutimage2 from '../../assets/png/heroimagemobile2.png';
import Aboutimage3 from '../../assets/png/heroimagemobile3.png';
import Aboutimage4 from '../../assets/png/heroimawmobile.jpg';
import BackgroundImage from '../../assets/svg/low-poly-grid-haikei.svg';
import './buttonanimation.css';

const Abouttext = () => {
    const { t } = useTranslation();
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.8,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    };

    const images = [
        { src: Aboutimage2, className: 'shape-1 item ' },
        { src: Aboutimage3, className: 'shape-2 item ' },
        { src: Aboutimage1, className: 'shape-3 item ' },
        { src: Aboutimage4, className: 'shape-4 item ' },
    ];

    return (
        <motion.div
            ref={sectionRef}
            className="w-full h-auto mx-auto my-8 px-4 py-20 bg-cover bg-center relative"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
        >
            <div className="relative max-w-full mx-auto flex flex-col md:flex-row items-center text-prime space-y-8 md:space-y-0 md:space-x-8">
                <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold text-prime mb-4">{t('about_title')}</h1>
                    <div
                        style={{
                            backgroundImage: `url(${BackgroundImage})`,
                            backgroundBlendMode: 'overlay',
                        }}
                        className='rounded-lg w-full bg-cover bg-center p-6 shadow-lg'
                    >
                        <div className="flex flex-col items-center md:items-start bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg space-y-4">
                            <p className="text-lg md:text-2xl text-white">{t('about_description_part1')}</p>
                            <p className="text-lg md:text-2xl text-white">{t('about_description_part2')}</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4 h-auto">
                    {images.map((image, index) => (
                        <div key={index} className= {`image-container ${image.className}`}>
                            <img src={image.src} alt={`About us ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Abouttext;
