import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './abouttext.css'; // Import your custom CSS file for additional styling if needed
import LazyLoad from 'react-lazyload';
import about1 from '../../assets/png/about1.jpg';
import about2 from '../../assets/png/about2.png';
import about3 from '../../assets/png/about3.png';
import about4 from '../../assets/png/about4.png';

const AboutText = () => {
    const { t } = useTranslation();

    // Debugging mount and unmount
    useEffect(() => {
        console.log('AboutText component mounted');
        
        return () => {
            console.log('AboutText component unmounted');
        };
    }, []);

    return (
        <div className="about-container">
            <div className="content-container">
                <div className="images-section">
                    <div className="image-container image1">
                        <LazyLoad height={200} offset={100} once>
                            <img src={about2} alt="Image 1" className="image" />
                        </LazyLoad>
                        <div className="overlay">{t('image1_text')}</div>
                    </div>
                    <div className="image-container image2">
                        <LazyLoad height={200} offset={100} once>
                            <img src={about3} alt="Image 2" className="image" />
                        </LazyLoad>
                        <div className="overlay">{t('image2_text')}</div>
                    </div>
                    <div className="image-container image3">
                        <LazyLoad height={200} offset={100} once>
                            <img src={about4} alt="Image 3" className="image" />
                        </LazyLoad>
                        <div className="overlay">{t('image3_text')}</div>
                    </div>
                    <div className="image-container image4">
                        <LazyLoad height={200} offset={100} once>
                            <img src={about1} alt="Image 4" className="image" />
                        </LazyLoad>
                        <div className="overlay">{t('image4_text')}</div>
                    </div>
                </div>

                <div className="text-section">
                    <h1 className="about-title font-assistant font-bold">{t('about_title')}</h1>
                    <p className="welcome-message">
                        {t('welcome_message')}
                    </p>
                    <div className="about-sections">
                        <div className="about-section">
                            <h2 className="section-title">{t('mission_h')}</h2>
                            <p className="section-text">
                                {t('mission')}
                            </p>
                        </div>
                        <div className="about-section">
                            <h2 className="section-title">{t('vision_h')}</h2>
                            <p className="section-text">
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
