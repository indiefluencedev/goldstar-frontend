import React from 'react';
import { useTranslation } from 'react-i18next';
import './abouttext.css'; // Import your custom CSS file for additional styling if needed
import about1 from '../../assets/png/about1.jpg';
import about2 from '../../assets/png/about2.png';
import about3 from '../../assets/png/about3.png';
import about4 from '../../assets/png/about4.png';

const AboutText = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full py-5 px-5" style={{ backgroundImage: 'linear-gradient(40deg, hsl(240deg 69% 75%) 0%, hsl(244deg 71% 85%) 20%, hsl(247deg 73% 95%) 40%, hsl(259deg 31% 91%) 60%, hsl(257deg 30% 73%) 80%, hsl(255deg 29% 55%) 100%)' }}>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
                <div className="hidden md:block images-section relative w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 h-auto lg:h-96">
                    <div className="image-container absolute w-1/2 lg:top-[110px] xl:top-[70px] lg:left-[-30px] xl:left-[-50px]">
                        <img src={about2} alt="Image 1" className="w-full rounded-lg shadow-md" />
                        <div className="overlay">{t('image1_text')}</div>
                    </div>
                    <div className="image-container absolute w-1/2 lg:top-[70px] xl:top-5 right-0">
                        <img src={about3} alt="Image 2" className="w-full rounded-lg shadow-md" />
                        <div className="overlay">{t('image2_text')}</div>
                    </div>
                    <div className="image-container absolute w-1/2 lg:bottom-[-180px] xl:bottom-[-200px] lg:left-[-30px] xl:left-[-50px]">
                        <img src={about4} alt="Image 3" className="w-full rounded-lg shadow-md" />
                        <div className="overlay">{t('image3_text')}</div>
                    </div>
                    <div className="image-container absolute w-1/2 lg:bottom-[-150px] xl:bottom-[-180px] right-0">
                        <img src={about1} alt="Image 4" className="w-full rounded-lg shadow-md" />
                        <div className="overlay">{t('image4_text')}</div>
                    </div>
                </div>

                <div className="text-section w-full lg:w-1/2">
                    <h1 className="text-3xl font-assistant md:text-4xl font-bold text-prime decor mb-4">{t('about_title')}</h1>
                    <div className="md:hidden grid grid-cols-2 gap-4 w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
                        <div className="image-container">
                            <img src={about2} alt="Image 1" className="w-full rounded-lg shadow-md" />
                            <div className="text-[12px] ">{t('image1_text')}</div>
                        </div>
                        <div className="image-container">
                            <img src={about3} alt="Image 2" className="w-full rounded-lg shadow-md" />
                            <div className="text-[12px] ">{t('image2_text')}</div>
                        </div>
                        <div className="image-container">
                            <img src={about4} alt="Image 3" className="w-full rounded-lg shadow-md" />
                            <div className="text-[12px] ">{t('image3_text')}</div>
                        </div>
                        <div className="image-container">
                            <img src={about1} alt="Image 4" className="w-full rounded-lg shadow-md" />
                            <div className="text-[12px] ">{t('image4_text')}</div>
                        </div>
                    </div>
                    <p className="text-base font-assistant md:text-lg text-gray-700 mb-8">
                        {t('welcome_message')}
                    </p>
                    <div className="about-sections space-y-4">
                        <div className="about-section p-6">
                            <h2 className="text-xl font-assistant md:text-2xl font-bold text-prime decor mb-2">{t('mission_h')}</h2>
                            <p className="text-base font-assistant md:text-lg text-gray-600">
                                {t('mission')}
                            </p>
                        </div>
                        <div className="about-section p-6">
                            <h2 className="text-xl font-assistant md:text-2xl font-bold text-prime decor mb-2">{t('vision_h')}</h2>
                            <p className="text-base font-assistant md:text-lg text-gray-600">
                                {t('vision')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutText;
