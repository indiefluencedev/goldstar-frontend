import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/svg/logowhite.svg'; // Adjust the path as necessary

const Footer = () => {
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
                        Goldstar Sewing Machines: Leading since 1996 with innovative, reliable, and affordable technology. Combining Japanese, Korean, and Chinese expertise to bring quality sewing machines accessible to everyone, worldwide.
                    </p>
                </div>
            </div>
            <div className="container mx-auto flex flex-wrap justify-between max-h-[450px]">
                <div className="w-full md:w-1/3 mb-6 md:mb-0 px-4">
                    <h2 className="text-lg font-bold mb-2">ADDRESS</h2>
                    <p>Airport South Road，Xiachen, Jiaojiang,Taizhou City, Zhejiang Province</p>
                </div>
                <div className="w-full md:w-2/3 flex flex-wrap md:justify-end">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0 px-4 ml-auto md:text-right">
                        <h2 className="text-lg font-bold mb-2">PAGES</h2>
                        <ul>
                            <li><a href="/" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 px-4 ml-auto md:text-right">
                        <h2 className="text-lg font-bold mb-2">SOCIAL LINKS</h2>
                        <ul>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">X</a></li>
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
                        Goldstar Sewing Machines: Leading since 1996 with innovative, reliable, and affordable technology. Combining Japanese, Korean, and Chinese expertise to bring quality sewing machines accessible to everyone, worldwide.
                    </p>
                </div>
            </div>
            <div className="container mx-auto flex justify-center items-center mt-4">
                <p className="cursor-pointer" onClick={handleAuthRedirect}>
                   <span> © </span> 2024 GoldStar | All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
