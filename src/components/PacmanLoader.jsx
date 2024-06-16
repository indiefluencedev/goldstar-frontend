import React from 'react';
import './PacmanLoader.css';

const PacmanLoader = () => {
    return (
        <div className="pacman-loader h-[100vh]">
            <div className="pacman">
                <div className="pacman-body"></div>
                <div className="pacman-eye"></div>
            </div>
            <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default PacmanLoader;
