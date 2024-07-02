import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Aboutimage from '../../assets/png/heroimawmobile.jpg';
import './buttonanimation.css';

const Abouttext = () => {
    const { t } = useTranslation();
    const [showMore, setShowMore] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const contentRef = useRef(null);
    const sectionRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('16.3rem');

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    useEffect(() => {
        if (showMore) {
            const contentHeight = contentRef.current.scrollHeight;
            setMaxHeight(`${contentHeight}px`);
        } else {
            setMaxHeight('16.3rem');
        }
    }, [showMore]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(entry.target); // Stop observing once it's in view
                }
            },
            {
                threshold: 0.8, // Trigger when 80% of the component is visible
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

    const buttonVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.6,
                yoyo: Infinity,
            },
        },
    };

    return (
        <motion.div
            ref={sectionRef}
            className="w-full h-auto mx-auto my-4 px-4 py-10 xs:rounded-none md:rounded-lg shadow-lg"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            style={{ backgroundImage: 'linear-gradient(40deg, hsl(240deg 69% 75%) 0%, hsl(244deg 71% 85%) 20%, hsl(247deg 73% 95%) 40%, hsl(259deg 31% 91%) 60%, hsl(257deg 30% 73%) 80%, hsl(255deg 29% 55%) 100%)',

                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
            }}
        >
            <div className='max-w-[1400px] xs:h-[500px] md:h-[650px] mx-auto'>
                <h2 className="font-assistant font-bold text-[24px] md:text-[36px] text-center mb-3 text-prime bg-gradient-to-b from-prime to-gray-700 bg-clip-text text-transparent">
                    {t('about_title')}
                </h2>
                <div className="flex flex-col md:flex-row md:items-center">
                <div className="hidden md:flex lg:w-[400px] lg:h-[500px] xl:w-[600px] justify-center">
    <img src={Aboutimage} alt={t('about_title')} className="rounded-lg shadow-lg object-cover" />
</div>

                    <div
                        ref={contentRef}
                        className="text-left text-[16px] md:text-[18px] items-center lg:text-[20px] xl:text-[22px] transition-max-height duration-700 xl:mt-0 ease-in-out w-full md:w-1/2 sm:px-4 px-0"
                        style={{ maxHeight: maxHeight }}
                    >
                        <div className="grid grid-cols-1 gap-4 xs:mt-0 ">
                            <p className="font-assistant lg:mt-[-120px] xl:mt-[-100px] text-justify bg-white p-4 rounded-lg shadow-md">
                                {t('welcome_message')}
                                <br />
                                <br />
                                <span className="font-bold">{t('mission_h')}:</span> {t('mission')}
                                <br />
                                <br />
                                <span className="font-bold">{t('vision_h')}:</span>{t('vision')}
                            </p>
                        </div>
                      
                        <div className="flex justify-center mx-auto md:justify-start mt-4 md:mt-8">
                            <motion.button
                                className="button-animated flex items-center bg-prime text-white py-3 px-4 shadow-lg"
                                onClick={() => document.getElementById('grid').scrollIntoView({ behavior: 'smooth' })}
                                whileHover="hover"
                                variants={buttonVariants}
                            >
                                {t('see_categories')}
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </motion.button>
                        </div>
                    </div>
                </div>

             
            </div>
        </motion.div>
    );
};

export default Abouttext;
