import React, { useEffect, useState } from 'react';
import bartackImage from '../assets/stitch-style/BARTACK.jpg';
import buttonSewerImage from '../assets/stitch-style/BUTTON SEWER.jpg';
import chainstitchImage from '../assets/stitch-style/Chainstitch.jpg';
import interlockImage from '../assets/stitch-style/INTERLOCK.jpg';
import lockstitchImage from '../assets/stitch-style/LOCKSTITCH.jpg';
import overlockImage from '../assets/stitch-style/OVERLOCK.jpg';
import patternFieldMachinesImage from '../assets/stitch-style/Pattern Field Machines.jpg';
import placketSettingMachineImage from '../assets/stitch-style/Placket Setting Machine.jpg';
import tascheImage from '../assets/stitch-style/tasche.jpg';
import MetaTag from '../utils/meta';
import { metaData } from "../utils/metaData.js";

import './ImageGrid.css';
import trackPageView from '../utils/tracking.js';


const images = [
    { src: lockstitchImage, title: 'Lockstitch' },
    { src: interlockImage, title: 'Interlock' },
    { src: overlockImage, title: 'Overlock' },
    { src: patternFieldMachinesImage, title: 'Pattern Field Machines' },
    { src: bartackImage, title: 'Bartacking Stitch' },
    { src: buttonSewerImage, title: 'Button Sewer' },
    { src: chainstitchImage, title: 'Chainstitch' },
    { src: placketSettingMachineImage, title: 'Placket Setting Machine' },
    { src: tascheImage, title: 'Tasche' },
];

const ImageGrid = () => {

    useEffect(() => {
        trackPageView("/stitchtable", "Utilities | Stitchtable Page");
    }, []);

    
    const [zoomedIndex, setZoomedIndex] = useState(null);

    const handleImageClick = (index) => {
        setZoomedIndex(index === zoomedIndex ? null : index);
    };

    return (
        <>
        <MetaTag title={metaData.stitchtable.title} />
        <div className='py-40' >
            <div className="image-grid-container ">

                {images.map((image, index) => (
                    <div
                        className="image-card"
                        key={index}
                        onClick={() => handleImageClick(index)}
                    >
                        <p className="image-title xs:text-[32px] md:text-[56px]">{image.title}</p>
                        <img
                            src={image.src}
                            alt={image.title}
                            className={`image ${zoomedIndex === index ? 'zoomed' : ''}`}
                        />

                    </div>
                ))}
            </div>
            </div>
        </>
    );
};

export default ImageGrid;