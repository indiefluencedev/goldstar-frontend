import React from 'react';
import bannerImage from '../assets/png/banner.png';

const HomePage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Welcome to Home Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img src={bannerImage} alt="Banner" className="w-full h-32 object-cover rounded-t-lg" />
                    <h2 className="text-xl font-bold mt-4">Grid Item 1</h2>
                    <p className="mt-2">Description for grid item 1.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img src={bannerImage} alt="Banner" className="w-full h-32 object-cover rounded-t-lg" />
                    <h2 className="text-xl font-bold mt-4">Grid Item 2</h2>
                    <p className="mt-2">Description for grid item 2.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img src={bannerImage} alt="Banner" className="w-full h-32 object-cover rounded-t-lg" />
                    <h2 className="text-xl font-bold mt-4">Grid Item 3</h2>
                    <p className="mt-2">Description for grid item 3.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
