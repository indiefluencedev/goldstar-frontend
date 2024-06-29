import React from 'react';

const CategoryDropdown = ({ compareList = [], handleCompareClick }) => {
    return (
        <div className="flex">
            <button
                className="flex items-center bg-prime text-white p-3 border border-black hover:bg-prime hover:bg-opacity-65 hover:text-black rounded-lg focus:outline-none transition duration-300 ease-in-out"
                onClick={handleCompareClick}
            >
                <p className='text-xl'>
                    COMPARE LIST{' '}
                    <span style={{
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
