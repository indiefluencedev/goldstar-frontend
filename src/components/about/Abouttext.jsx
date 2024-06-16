import React, { useState, useRef, useEffect } from 'react';
import About from '../../assets/svg/about.svg';
import Decor1 from '../../assets/svg/sidedecor1.svg';
import Decor2 from '../../assets/svg/Ellipse.svg'

const Abouttext = () => {
    const [showMore, setShowMore] = useState(false);
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('12rem');

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    useEffect(() => {
        if (showMore) {
            const contentHeight = contentRef.current.scrollHeight;
            setMaxHeight(`${contentHeight}px`);
        } else {
            setMaxHeight('16.3rem');
        }
    }, [showMore]);

    return (

        <>

<img src={Decor1} alt="Trophy" className="xs:h-[250px]  md:h-[500px] xl:h-[600px] absolute xs:left-[75%] ml:left-[78%] md:left-[82%] xl:left-[80%]  2xl:left-[85%] 3xl:left-[88.5%] xs:top-[30%] md:top-[60%]  xl:top-[50%] " />

<img src={Decor2} alt="Trophy" className="xs:h-[250px]  md:h-[600px] xl:h-[700px] absolute xs:top-[65%] md:top-[95%] xl:top-[90%] xs:left-[-30%] md:left-[-30%] 2xl:left-[-30%]  3xl:left-[-20%] -z-10  rotate-90 " />


        <div className='md:max-w-[1240px] h-auto mx-auto my-4 px-4'>
            <div className="flex flex-col md:flex-row md:items-center">
            <div className="hidden md:flex md:w-1/2 pt-24 justify-center">
                    <img src={About} alt="About GoldStar" />
                </div>
                <div
                    ref={contentRef}
                    className={`text-left text-[16px] md:text-[18px] transition-max-height duration-700 mt-[10px] xl:mt-[-80px] ease-in-out overflow-hidden md:overflow-visible md:w-1/2 sm:px-4 px-0`}
                    style={{ maxHeight: maxHeight }}
                >
                    <h2 className='font-assistant font-bold text-[24px] text-prime text-center md:text-left md:text-[36px] mb-3'>About GoldStar</h2>

                    <p className='font-assistant text-justify'>
                        Welcome to Goldstar Sewing Machines the premier multinational brand in the world of sewing technology. Established in 1996, Goldstar has been a beacon of innovation, reliability, and affordability in the global market. Goldstar Sewing Machines embodies a unique blend of Japanese technology, Korean reliability, and Chinese engineering expertise. This multicultural fusion has enabled us to create sewing machines that stand at the forefront of quality and performance. At Goldstar, our mission is simple yet profound: to make quality sewing machines accessible and affordable to everyone. We believe that everyone deserves the opportunity to create, mend, and tailor with precision and ease. With this vision in mind, we continually strive to innovate, improve, and exceed the expectations of our customers worldwide.
                    </p>

                    <div className="flex justify-center mx-auto md:justify-start mt-4 md:mt-8">
                <button className="flex items-center bg-prime text-white py-2 px-4 rounded-md">
                    SEE CATEGORIES
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
                </div>
            </div>

           


            <div className='text-center md:hidden'>
                <button
                    className='mt-4 text-white bg-prime w-[150px] py-2 rounded-md'
                    onClick={toggleShowMore}
                >
                    {showMore ? 'Show Less' : 'Show More'}
                </button>
            </div>
        </div>

        </>
    );
};

export default Abouttext;
