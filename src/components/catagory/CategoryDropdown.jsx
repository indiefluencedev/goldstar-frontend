import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSeries } from '../../services/api.js'; // Adjust the path as necessary
import dropdown from '../../assets/svg/drop-down.svg'; // Adjust the path as necessary

const CategoryDropdown = ({ selectedSeriesName, compareList = [], handleCompareClick }) => {
    const [series, setSeries] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentSeriesName, setCurrentSeriesName] = useState(selectedSeriesName);
    const navigate = useNavigate();
    const { seriesId } = useParams();
    const dropdownRef = useRef(null);

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

    const handleCategoryClick = (serie) => {
        setCurrentSeriesName(serie.name);
        setDropdownOpen(false); // Close the dropdown after selection
        navigate(`/categories/${serie._id}`);
    };

    useEffect(() => {
        if (selectedSeriesName) {
            setCurrentSeriesName(selectedSeriesName);
        }
    }, [selectedSeriesName]);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <div className="flex flex-col md:flex-row md:justify-between xs:items-start md:items-center w-full px-4">
            <div ref={dropdownRef} className="relative inline-block mb-4 md:mb-0">
                <div
                    className="flex items-center justify-between font-assistant py-2 px-2 sm:text-[16px] xl:text-[20px] border border-gray-600 rounded-md hover:text-prime cursor-pointer"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <span>Category: {currentSeriesName}</span>
                    <img
                        src={dropdown}
                        alt="Dropdown"
                        className={`w-4 h-4 transform transition-transform duration-500 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                </div>
                {dropdownOpen && (
                    <ul
                        className="absolute left-0 border border-gray-600 rounded-md bg-white z-20 text-black mt-2 w-auto min-w-[150px] transition-all duration-500 ease-in-out opacity-100 max-h-96 shadow-lg"
                    >
                        {series.map((serie) => (
                            <li
                                key={serie._id}
                                className="px-4 py-2 hover:bg-gray-100 font-assistant font-bold text-[20px] hover:text-prime cursor-pointer"
                                onClick={() => handleCategoryClick(serie)}
                            >
                                {serie.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button
                className="flex items-center bg-prime text-white p-3 border border-black hover:bg-prime hover:bg-opacity-65 hover:text-black rounded-lg focus:outline-none transition duration-300 ease-in-out"
                onClick={handleCompareClick}
            >
                <p>
                    COMPARE LIST <span style={{
                        display: 'inline-block',
                        width: '24px', // Adjust size as needed
                        height: '24px', // Adjust size as needed
                        borderRadius: '50%',
                        backgroundColor: 'white', // Circle background color
                        color: 'black', // Text color
                        textAlign: 'center',
                        lineHeight: '24px', // Same as height to center the text vertically
                        fontSize: '16px', // Adjust font size as needed
                        marginLeft: '8px' // Optional: spacing between text and circle
                    }}>{compareList.length}</span>
                </p>
            </button>
        </div>
    );
};

export default CategoryDropdown;
