import React, { useState } from 'react';
import bartackImage from '../assets/png/BARTACK.jpg';
import buttonSewerImage from '../assets/png/BUTTON SEWER.jpg';
import chainstitchImage from '../assets/png/Chainstitch.jpg';
import interlockImage from '../assets/png/INTERLOCK.jpg';
import lockstitchImage from '../assets/png/LOCKSTITCH.jpg';
import overlockImage from '../assets/png/OVERLOCK.jpg';
import patternFieldMachinesImage from '../assets/png/Pattern Field Machines.jpg';
import placketSettingMachineImage from '../assets/png/Placket Setting Machine.jpg';
import tascheImage from '../assets/png/tasche.jpg';
import MetaTag from '../utils/meta';
import { metaData } from "../utils/metaData.js";

import './ImageGrid.css'; // Make sure to create and import this CSS file

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
    const [zoomedIndex, setZoomedIndex] = useState(null);

    const handleImageClick = (index) => {
        setZoomedIndex(index === zoomedIndex ? null : index);
    };

    return (
        <>
        <MetaTag title={metaData.stitchtable.title} />
            <div className="image-grid-container xs:pt-36 md:pt-40">
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
        </>
    );
};

export default ImageGrid;