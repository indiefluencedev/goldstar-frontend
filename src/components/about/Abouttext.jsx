import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import About from '../../assets/svg/about.svg';
import Decor1 from '../../assets/svg/sidedecor1.svg';
import Decor2 from '../../assets/svg/Ellipse.svg';
import './buttonanimation.css';

const Abouttext = () => {
    const { t } = useTranslation();
    const [showMore, setShowMore] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const contentRef = useRef(null);
    const sectionRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('12rem');

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

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const xPos = ((clientX - left) / width - 0.5) * 2;
        const yPos = ((clientY - top) / height - 0.5) * 2;
        document.documentElement.style.setProperty('--xPos', xPos);
        document.documentElement.style.setProperty('--yPos', yPos);
    };

    return (
        <>
            <img
                src={Decor1}
                alt="Trophy"
                className="xs:h-[250px] md:h-[500px] xl:h-[600px] absolute xs:left-[76%] ml:left-[78%] md:left-[82%] xl:left-[80%] 2xl:left-[85%] 3xl:left-[87.5%] xs:top-[40%] md:top-[60%] xl:top-[50%] lg:top-[40%] "
            />
            <img
                src={Decor2}
                alt="Trophy"
                className="xs:h-[250px] md:h-[600px] xl:h-[700px] absolute xs:top-[65%] md:top-[95%] lg:top-[90%] xl:top-[90%] xs:left-[-30%] md:left-[-30%] 2xl:left-[-30%] 3xl:left-[-20%] -z-10 rotate-90"
            />

            <motion.div
                ref={sectionRef}
                className="md:max-w-[1240px] h-auto mx-auto my-4 px-4"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                <div className="flex flex-col md:flex-row md:items-center">
                    <motion.div
                        className="hidden md:flex md:w-1/2 pt-24 justify-center"
                        onMouseMove={handleMouseMove}
                        style={{
                            perspective: '1000px',
                        }}
                    >
                        <motion.img
                            src={About}
                            alt={t('about_title')}
                            style={{
                                transform: 'rotateY(calc(var(--xPos) * 10deg)) rotateX(calc(var(--yPos) * -10deg))',
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                            }}
                        />
                                        
                    </motion.div>
                    <div
                        ref={contentRef}
                        className={`text-left text-[16px] md:text-[18px] transition-max-height duration-700 mt-[10px] xl:mt-[-80px] ease-in-out overflow-hidden md:overflow-visible md:w-1/2 sm:px-4 px-0`}
                        style={{ maxHeight: maxHeight }}
                    >
                        <h2 className="font-assistant font-bold text-[24px] text-prime text-center md:text-left md:text-[36px] mb-3">
                            {t('about_title')}
                        </h2>

                        <p className="font-assistant text-justify">
                            {t('about_description')}
                        </p>

                        <div className="flex justify-center mx-auto md:justify-start mt-4 md:mt-8">
                            <motion.button
                                className="button-animated flex items-center bg-prime text-white py-3 px-4 one"
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

                <div className="text-center md:hidden">
                    <button className="mt-4 text-white bg-prime w-[150px] py-2" onClick={toggleShowMore}>
                        {showMore ? t('show_less') : t('show_more')}
                    </button>
                </div>
            </motion.div>
        </>
    );
};

export default Abouttext;

