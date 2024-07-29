import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/svg/logofooter.svg'; // Adjust the path as necessary
import dropdown from '../assets/svg/drop-down-white.svg'; // Add the path for your dropdown icon
import { metaData } from '../utils/metaData';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [useCasesOpen, setUseCasesOpen] = useState(false);

    return (
        <footer className="footer">
            <div className="footer-container mx-auto">
                <div className="footer-section footer-address">
                    <h2 className="footer-heading">{t('address')}</h2>
                    <p>Airport South Road, Xiachen, Jiaojiang, Taizhou City,<br/> Zhejiang Province</p>
                </div>
                <div className="footer-section footer-pages">
                    <h2 className="footer-heading">{t('pages')}</h2>
                    <ul>
                        <li><a href="/">{t('home')}</a></li>
                        {/* <li><a href="#">{t('about')}</a></li> */}
                        <li><a href="/contact">{t('contact_us')}</a></li>
                        <li className="footer-dropdown">
                            <div
                                onClick={() => setUseCasesOpen(!useCasesOpen)}
                                className="footer-dropdown-toggle"
                            >
                                {t('utilities')}
                                <img
                                    src={dropdown}
                                    alt="Dropdown"
                                    className={`footer-dropdown-icon ${useCasesOpen ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </div>
                            {useCasesOpen && (
                                <ul className="footer-dropdown-menu">
                                    <li
                                        onClick={() => {
                                            setUseCasesOpen(false);
                                            navigate('/stitchtable');
                                        }}
                                    >
                                        {t('stitch_style')}
                                    </li>
                                    <li
                                        onClick={() => {
                                            setUseCasesOpen(false);
                                            navigate('/comparisontable');
                                        }}
                                    >
                                        {t('comparison')}
                                    </li>
                                    <li
                                        onClick={() => {
                                            setUseCasesOpen(false);
                                            navigate('/usecases');
                                        }}
                                    >
                                        {t('use_cases')}
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="footer-section footer-social">
                    <h2 className="footer-heading">{t('social_links')}</h2>
                    <ul>
                        <li><a href={metaData.social.instagram} target='_blank'>{t('instagram')}</a></li>
                        <li><a href={metaData.social.linkedin} target='_blank'>{t('linkedin')}</a></li>
                        <li><a href={metaData.social.facebook} target='_blank'>{t('facebook')}</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <img src={logo} alt="GoldStar Logo" className="footer-logo" />
                <p className="footer-description mt-5">Goldstar Sewing Machines: Leading since 1996 with innovative, reliable, and affordable technology. Combining Japanese, Korean, and Chinese expertise to bring quality sewing machines accessible to everyone, worldwide.</p>
                
            </div>
            <p className="footer-rights">
                    © 2024 GoldStar | All rights reserved.
                </p>
        </footer>
    );
};

export default Footer;
