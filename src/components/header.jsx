import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import logo from '../assets/svg/GoldStarLogo.svg';
import dropdown from '../assets/svg/drop-down.svg';
import { getSeries } from '../services/api';

import lockstitchImage from '../assets/svg/Lock.svg';
import overlockImage from '../assets/svg/Overlock.svg';
import interlockImage from '../assets/svg/Interlock.svg';
import heavyDutyImage from '../assets/svg/HeavyDuty.svg';
import specialImage from '../assets/svg/Special.svg';
import zigzagImage from '../assets/svg/Zigzag.svg';
import cuttingImage from '../assets/svg/Cutting.svg';
import Fusion from '../assets/png/fusion.png';
import Heattransfer from '../assets/png/heattransfer.png';
import Needledetector from '../assets/png/needledetector.png';
import './header.css';
import 'flag-icons/css/flag-icons.min.css';

const NavBar = ({ language, setLanguage }) => {
  const { t, i18n } = useTranslation();
  const [nav, setNav] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [series, setSeries] = useState([]);
  const [selectedFlag, setSelectedFlag] = useState(language === 'en' ? 'gb' : language === 'cn' ? 'cn' : 'kr');
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const data = await getSeries();
        setSeries(data);
      } catch (error) {
        console.error('Error fetching series:', error);
      }
    };

    fetchSeries();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on location change
  }, [location]);

  const handleNavClick = () => setNav(!nav);

  const seriesImages = {
    Lockstitch: lockstitchImage,
    Overlock: overlockImage,
    Interlock: interlockImage,
    HeavyDuty: heavyDutyImage,
    SpecialSeries: specialImage,
    Zigzag: zigzagImage,
    Fusingmachine: Fusion,
    Heattransfer: Heattransfer,
    Needledetector: Needledetector,
    CuttingSeries: cuttingImage
  };

  const handleCategoryClick = (seriesId, modelType) => {
    const imageUrl = seriesImages[modelType];
    setNav(false);
    setCategoriesOpen(false);
    setUseCasesOpen(false);
    navigate(`/categories/${seriesId}`, { state: { imageUrl } });
  };

  const handleFlagClick = (flag, lang) => {
    setSelectedFlag(flag);
    setLanguagesOpen(false);
    i18n.changeLanguage(lang);
    setLanguage(lang);
    sessionStorage.setItem('language', lang);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navcontainer">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="nav-items md:flex">
          <li>
            <Link to="/" className="nav-link">
              {t('home')}
            </Link>
          </li>
          <li className="dropdown">
            <button className="dropbtn">
              {t('categories')}
              <img src={dropdown} alt="Dropdown" className="ml-2 w-4 h-4" />
            </button>
            <div className="dropdown-content">
              {series.map((serie) => (
                <a
                  key={serie._id}
                  onClick={() => handleCategoryClick(serie._id, serie.modelType)}
                  className="cursor-pointer"
                >
                  {t(serie.modelType)}
                </a>
              ))}
            </div>
          </li>
          <li className="dropdown">
            <button className="dropbtn">
              {t('utilities')}
              <img src={dropdown} alt="Dropdown" className="ml-2 w-4 h-4" />
            </button>
            <div className="dropdown-content">
              <a onClick={() => navigate('/stitchtable')} className="cursor-pointer">
                {t('stitch_style')}
              </a>
              <a onClick={() => navigate('/comparisontable')} className="cursor-pointer">
                {t('comparison')}
              </a>
              <a onClick={() => navigate('/usecases')} className="cursor-pointer">
                {t('use_cases')}
              </a>
            </div>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              {t('contact')}
            </Link>
          </li>
        </ul>
        <div className="flags">
          <button onClick={() => handleFlagClick('gb', 'en')}>
            <span className="fi fi-gb h-6 w-7"></span>
          </button>
          <button onClick={() => handleFlagClick('cn', 'cn')}>
            <span className="fi fi-cn h-6 w-7"></span>
          </button>
          <button onClick={() => handleFlagClick('kr', 'ko')}>
            <span className="fi fi-kr h-6 w-7"></span>
          </button>
        </div>
        </div>
      </nav>

      {/* Mobile NavBar */}
      <div className="mobile-navbar md:hidden w-screen h-[80px] z-50 bg-white fixed px-9 shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 mr-4" />
          </div>
          <div className="md:hidden" onClick={handleNavClick}>
            {!nav ? <Bars3Icon className="w-6" /> : <XMarkIcon className="w-6" />}
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white transition-transform duration-500 ease-in-out ${
            nav ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
            <span className={`fi fi-${selectedFlag} h-6 w-7`}></span>
            <XMarkIcon className="w-6" onClick={handleNavClick} />
          </div>
          <ul className="flex flex-col items-start px-8 mt-0 space-y-4">
            <li className="w-full py-4 border-b border-gray-200 hover:text-prime">
              <Link to="/" onClick={handleNavClick}>
                {t('home')}
              </Link>
            </li>
            <li className="w-full py-4 border-b border-gray-200">
              <div
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="cursor-pointer"
              >
                {t('categories')}
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className="inline ml-2 w-4 h-4"
                  style={{ transform: categoriesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </div>
              {categoriesOpen && (
                <ul className="pl-4">
                  {series.map((serie) => (
                    <li
                      key={serie._id}
                      className="py-2 cursor-pointer"
                      onClick={() => handleCategoryClick(serie._id, serie.modelType)}
                    >
                      {t(serie.modelType)}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="w-full py-4 border-b  border-gray-200">
              <div
                onClick={() => setUseCasesOpen(!useCasesOpen)}
                className="cursor-pointer"
              >
                {t('utilities')}
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className="inline ml-2 w-4 h-4"
                  style={{ transform: useCasesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </div>
              {useCasesOpen && (
                <ul className="pl-4">
                  <li
                    className="py-2 cursor-pointer"
                    onClick={() => {
                      setNav(false);
                      setUseCasesOpen(false);
                      navigate('/stitchtable');
                    }}
                  >
                    {t('stitch_style')}
                  </li>
                  <li
                    className="py-2 cursor-pointer"
                    onClick={() => {
                      setNav(false);
                      setUseCasesOpen(false);
                      navigate('/comparisontable');
                    }}
                  >
                    {t('comparison')}
                  </li>
                  <li
                    className="py-2 cursor-pointer"
                    onClick={() => {
                      setNav(false);
                      setUseCasesOpen(false);
                      navigate('/usecases');
                    }}
                  >
                    {t('use_cases')}
                  </li>
                </ul>
              )}
            </li>
            <li className="w-full py-4 border-b border-gray-200">
              <Link to="/contact" onClick={handleNavClick}>
                {t('contact')}
              </Link>
            </li>
            <li className="w-full py-4 border-b border-gray-200">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => setLanguagesOpen(!languagesOpen)}
              >
                <span className={`fi fi-${selectedFlag} h-6 w-7 inline-block mr-2`}></span>
                <img
                  src={dropdown}
                  alt="Dropdown"
                  className={`inline ml-2 w-4 h-4 transform transition-transform duration-500 ${
                    languagesOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </div>
              {languagesOpen && (
                <ul className="pl-4">
                  <li
                    className="py-2 hover:text-prime cursor-pointer"
                    onClick={() => handleFlagClick('gb', 'en')}
                  >
                    <span className="fi fi-gb h-6 w-7 inline-block mr-2"></span> {t('english')}
                  </li>
                  <li
                    className="py-2 hover:text-prime cursor-pointer"
                    onClick={() => handleFlagClick('cn', 'cn')}
                  >
                    <span className="fi fi-cn h-6 w-7 inline-block mr-2"></span> {t('chinese')}
                  </li>
                  <li
                    className="py-2 hover:text-prime cursor-pointer"
                    onClick={() => handleFlagClick('kr', 'ko')}
                  >
                    <span className="fi fi-kr h-6 w-7 inline-block mr-2"></span> {t('korean')}
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
