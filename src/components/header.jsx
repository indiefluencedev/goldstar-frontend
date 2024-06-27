import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/svg/logo.svg';
import dropdown from '../assets/svg/drop-down.svg';
import { getSeries } from '../services/api';

import lockstitchImage from '../assets/svg/Lock.svg';
import overlockImage from '../assets/svg/Overlock.svg';
import interlockImage from '../assets/svg/Interlock.svg';
import heavyDutyImage from '../assets/svg/HeavyDuty.svg';
import specialImage from '../assets/svg/Special.svg';
import zigzagImage from '../assets/svg/Zigzag.svg';
import cuttingImage from '../assets/svg/Cutting.svg';
import Cuttingmachine from '../assets/png/cuttingmachineseries.png';
import Fusion from '../assets/png/fusion.png';
import Heattransfer from '../assets/png/heattransfer.png';
import Needledetector from '../assets/png/needledetector.png';
import './header.css';
import 'flag-icons/css/flag-icons.min.css';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [series, setSeries] = useState([]);
  const [selectedFlag, setSelectedFlag] = useState('gb');
  const navigate = useNavigate();

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

  const handleNavClick = () => setNav(!nav);

  const seriesImages = {
    lockstitch: lockstitchImage,
    overlock: overlockImage,
    interlock: interlockImage,
    heavyduty: heavyDutyImage,
    specialseries: specialImage,
    zigzag: zigzagImage,
    cuttingseries: cuttingImage,
    cuttingmachine: Cuttingmachine,
    fusingmachine: Fusion,
    heattransfer: Heattransfer,
    needledetector: Needledetector,
  };

  const handleCategoryClick = (seriesId, modelType) => {
    const imageUrl = seriesImages[modelType.toLowerCase()];
    setNav(false);
    setCategoriesOpen(false);
    setUseCasesOpen(false);
    navigate(`/categories/${seriesId}`, { state: { imageUrl } });
  };

  const handleFlagClick = (flag) => {
    setSelectedFlag(flag);
    setLanguagesOpen(false);
  };

  return (
    <div>
      <nav className="hidden md:flex bg-white border-gray-200 fixed w-full z-50">
        <div className="flex flex-row justify-between items-center mx-auto max-w-screen-2xl p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} alt="Logo" className="h-8" />
          </a>
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mega-menu-full"
            aria-expanded="false"
            onClick={handleNavClick}
          >
            <span className="sr-only">Open main menu</span>
            {!nav ? <Bars3Icon className="w-6" /> : <XMarkIcon className="w-6" />}
          </button>
          <div
            id="mega-menu-full"
            className={`items-center md:ml-[200px] xl:ml-[500px] justify-between font-medium ${
              nav ? 'block' : 'hidden'
            } w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-assistant">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-prime md:p-0 text-black font-assistant"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="relative dropdown">
                <button className="dropbtn flex items-center font-assistant text-black">
                  Categories
                  <img src={dropdown} alt="Dropdown" className="inline ml-2 w-4 h-4" />
                </button>
                <div className="dropdown-content">
                  {series.map((serie) => (
                    <a
                      key={serie._id}
                      onClick={() => handleCategoryClick(serie._id, serie.modelType)}
                      className="cursor-pointer"
                    >
                      {serie.name}
                    </a>
                  ))}
                </div>
              </li>
              <li className="relative dropdown">
                <button className="dropbtn flex items-center font-assistant text-black">
                  Utilities
                  <img src={dropdown} alt="Dropdown" className="inline ml-2 w-4 h-4" />
                </button>
                <div className="dropdown-content">
                  <a onClick={() => navigate('/stitchtable')} className="cursor-pointer">
                    Stitch Style
                  </a>
                  <a onClick={() => navigate('/comparisontable')} className="cursor-pointer">
                    Comparison
                  </a>
                  <a onClick={() => navigate('/usecases')} className="cursor-pointer">
                    Use Cases
                  </a>
                </div>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-prime md:p-0 text-black font-assistant"
                >
                  Contact Us
                </Link>
              </li>
              <li
                className="py-2 hover:bg-gray-100 hover:text-prime cursor-pointer"
                onClick={() => handleFlagClick('gb')}
              >
                <span className="fi fi-gb h-6 w-7 inline-block"></span>
              </li>
              <li
                className="py-2 hover:bg-gray-100 hover:text-prime cursor-pointer"
                onClick={() => handleFlagClick('cn')}
              >
                <span className="fi fi-cn h-6 w-7 inline-block"></span>
              </li>
              <li
                className="py-2 hover:bg-gray-100 hover:text-prime cursor-pointer"
                onClick={() => handleFlagClick('kr')}
              >
                <span className="fi fi-kr h-6 w-7 inline-block"></span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile NavBar */}
      <div className="md:hidden w-screen h-[80px] z-50 bg-white fixed px-9 shadow-lg">
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
          <ul className="flex flex-col items-start px-8 mt-4 space-y-4">
            <li className="w-full py-4 border-b border-gray-200 hover:text-prime">
              <Link to="/" onClick={handleNavClick}>
                Home
              </Link>
            </li>
            <li className="w-full py-4 border-b border-gray-200">
              <div
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="cursor-pointer"
              >
                Categories
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
                      {serie.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="w-full py-4 border-b border-gray-200">
              <div
                onClick={() => setUseCasesOpen(!useCasesOpen)}
                className="cursor-pointer"
              >
                Use Cases
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
                    Stitch Style
                  </li>
                  <li
                    className="py-2 cursor-pointer"
                    onClick={() => {
                      setNav(false);
                      setUseCasesOpen(false);
                      navigate('/comparisontable');
                    }}
                  >
                    Comparison
                  </li>
                </ul>
              )}
            </li>
            <li className="w-full py-4 border-b border-gray-200">
              <Link to="/contact" onClick={handleNavClick}>
                Contact Us
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
                    onClick={() => handleFlagClick('gb')}
                  >
                    <span className="fi fi-gb h-6 w-7 inline-block mr-2"></span> English
                  </li>
                  <li
                    className="py-2 hover:text-prime cursor-pointer"
                    onClick={() => handleFlagClick('cn')}
                  >
                    <span className="fi fi-cn h-6 w-7 inline-block mr-2"></span> Chinese
                  </li>
                  <li
                    className="py-2 hover:text-prime cursor-pointer"
                    onClick={() => handleFlagClick('kr')}
                  >
                    <span className="fi fi-kr h-6 w-7 inline-block mr-2"></span> Korean
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
