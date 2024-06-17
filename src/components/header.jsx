import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/svg/logo.svg'; // Adjust the path as necessary
import ukFlag from '../assets/png/uk.png'; // Adjust the path as necessary
import ChineseFlag from '../assets/png/Chinese.png'; // Adjust the path as necessary
import KoreanFlag from '../assets/png/korean.png'; // Adjust the path as necessary
import dropdown from '../assets/svg/drop-down.svg'; // Adjust the path as necessary
import { getSeries } from '../services/api'; // Adjust the path as necessary

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    const [languagesOpen, setLanguagesOpen] = useState(false);
    const [series, setSeries] = useState([]);
    const [selectedFlag, setSelectedFlag] = useState(ukFlag);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const data = await getSeries();
                setSeries(data); // Adjust based on your API response structure
            } catch (error) {
                console.error('Error fetching series:', error);
            }
        };

        fetchSeries();
    }, []);

    const handleNavClick = () => setNav(!nav);

    const handleCategoryClick = (seriesId) => {
        setNav(false);
        setCategoriesOpen(false);
        navigate(`/categories/${seriesId}`);
    };

    const handleFlagClick = (flag) => {
        setSelectedFlag(flag);
        setLanguagesOpen(false); // Close the dropdown after selecting a flag
    };

    const toggleCategories = () => {
        setCategoriesOpen(!categoriesOpen);
        setLanguagesOpen(false);
    };

    const toggleLanguages = () => {
        setLanguagesOpen(!languagesOpen);
        setCategoriesOpen(false);
    };

    return (
        <div className="w-screen h-[80px] z-10 bg-white fixed px-9 shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-12 mr-4" />
                </div>
                <div className="hidden md:flex pr-4 flex-1 justify-end items-center">
                    <ul className="flex space-x-12">
                        <li>
                            <Link to="/" className="flex items-center font-assistant hover:text-prime">
                                Home
                            </Link>
                        </li>
                        <li className="relative">
                            <div
                                className="flex items-center font-assistant hover:text-prime cursor-pointer"
                                onClick={toggleCategories}
                            >
                                Categories
                                <img
                                    src={dropdown}
                                    alt="Dropdown"
                                    className={`inline ml-2 w-4 h-4 transform transition-transform duration-500 ${categoriesOpen ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </div>
                            {categoriesOpen && (
                                <ul className="absolute left-0 bg-white text-black mt-2 w-full shadow-lg">
                                    {series.map((serie) => (
                                        <li
                                            key={serie._id}
                                            className="px-4 py-2 hover:bg-gray-100 font-assistant hover:text-prime cursor-pointer"
                                            onClick={() => handleCategoryClick(serie._id)}
                                        >
                                            {serie.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li className="relative">
                            <div
                                className="flex items-center cursor-pointer"
                                onClick={toggleLanguages}
                            >
                                <img src={selectedFlag} alt="Selected Language" className="h-6 inline-block mr-2" />
                                <img src={dropdown} alt="Dropdown" className={`inline ml-2 w-4 h-4 transform transition-transform duration-500 ${languagesOpen ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                            {languagesOpen && (
                                <ul className="absolute left-0 bg-white text-black mt-2 min-w-[150px] w-max shadow-lg">
                                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-prime cursor-pointer" onClick={() => handleFlagClick(ukFlag)}>
                                        <img src={ukFlag} alt="English" className="h-6 inline-block mr-2" /> English
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-prime cursor-pointer" onClick={() => handleFlagClick(ChineseFlag)}>
                                        <img src={ChineseFlag} alt="Chinese" className="h-6 inline-block mr-2" /> Chinese
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-prime cursor-pointer" onClick={() => handleFlagClick(KoreanFlag)}>
                                        <img src={KoreanFlag} alt="Korean" className="h-6 inline-block mr-2" /> Korean
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link to="/contact" className="flex items-center font-assistant hover:text-prime">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="md:hidden" onClick={handleNavClick}>
                    {!nav ? <Bars3Icon className="w-6" /> : <XMarkIcon className="w-6" />}
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-full bg-white transition-transform duration-500 ease-in-out ${nav ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
            >
                <div className="flex justify-between items-center px-8 py-4 border-b border-gray-200">
                    <img src={selectedFlag} alt="Selected Flag" className="h-6" />
                    <XMarkIcon className="w-6" onClick={handleNavClick} />
                </div>
                <ul className="flex flex-col items-start px-8 mt-4 space-y-4">
                    <li className="w-full py-4 border-b border-gray-200 hover:text-prime">
                        <Link to="/" onClick={handleNavClick}>
                            Home
                        </Link>
                    </li>
                    <li className="w-full py-4 border-b border-gray-200">
                        <div onClick={toggleCategories} className="cursor-pointer">
                            Categories
                            <img
                                src={dropdown}
                                alt="Dropdown"
                                className="inline ml-2 w-4 h-4 transform transition-transform duration-500"
                                style={{ transform: categoriesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            />
                        </div>
                        {categoriesOpen && (
                            <ul className="pl-4">
                                {series.map((serie) => (
                                    <li
                                        key={serie._id}
                                        className="py-2 cursor-pointer"
                                        onClick={() => handleCategoryClick(serie._id)}
                                    >
                                        {serie.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    {/* <li className="w-full py-4 border-b border-gray-200">
                        <Link to="/contact" onClick={handleNavClick}>
                            Add to compare list
                        </Link>
                    </li> */}
                    <li className="w-full py-4 border-b border-gray-200">
                        <Link to="/contact" onClick={handleNavClick}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
