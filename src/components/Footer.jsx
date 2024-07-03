import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/svg/logofooter.svg'; // Adjust the path as necessary
import { metaData } from '../utils/metaData';

const Footer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleAuthRedirect = () => {
        navigate('/auth');
    };

    return (
        <footer className="bg-prime text-white mt-10 py-10 px-7 ">
            <div className="container mx-auto md:hidden flex-col md:flex-row justify-center items-center mb-6 pb-6 border-b border-gray-400 ">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                    <img src={logo} alt="GoldStar Logo" className="h-20 " />
                </div>
                <div className="md:ml-6 text-left">
                    <p className="text-sm max-w-md mx-auto md:mx-0">
                        {t('footer_description')}
                    </p>
                </div>
            </div>
            <div className="container mx-auto flex flex-wrap justify-between max-h-[450px]">
                <div className="w-full md:w-1/3 mb-6 md:mb-0 px-4">
                    <h2 className="text-lg font-bold mb-2">{t('address')}</h2>
                    <p>{t('address_location')}</p>
                </div>
                <div className="w-full md:w-2/3 flex flex-wrap md:justify-end">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0 px-4 ml-auto md:text-right">
                        <h2 className="text-lg font-bold mb-2">{t('pages')}</h2>
                        <ul>
                            <li><a href="/" className="hover:underline">{t('home')}</a></li>
                            <li><a href="#" className="hover:underline">{t('about')}</a></li>
                            <li><a href="/contact" className="hover:underline">{t('contact_us')}</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 px-4 ml-auto md:text-right">
                        <h2 className="text-lg font-bold mb-2">{t('social_links')}</h2>
                        <ul>
                            <li><a href={metaData.social.instagram} className="hover:underline">{t('instagram')}</a></li>
                            <li><a href={metaData.social.facebook} className="hover:underline">{t('facebook')}</a></li>
                            <li><a href={metaData.social.linkedin} className="hover:underline">{t('linkedin')}</a></li>
                            <li><a href={metaData.social.twitter} className="hover:underline">{t('linkedin')}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto hidden md:flex flex-col md:flex-row justify-center items-center mt-6 pt-6 border-t border-gray-400 px-4">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                    <img src={logo} alt="GoldStar Logo" className="h-20 mx-auto md:mx-0" />
                </div>
                <div className="md:ml-6 text-center md:text-left">
                    <p className="text-sm max-w-md mx-auto md:mx-0">
                        {t('footer_description')}
                    </p>
                </div>
            </div>
            <div className="container mx-auto flex justify-center items-center mt-4">
                <p className="cursor-pointer" >
                    {t('footer_rights')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;



// onClick={handleAuthRedirect}