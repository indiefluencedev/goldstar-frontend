import React from 'react';
import vector1 from '../../assets/svg/trophy.svg';
import vector2 from '../../assets/svg/Vector.svg';
import vector3 from '../../assets/svg/Vector2.svg';
import vector4 from '../../assets/svg/Vector3.svg';
import vector5 from '../../assets/svg/Vector4.svg';

import Group11 from '../../assets/svg/Group11.svg'


const FeatureSection = () => {
    return (

        <>
{/* <img src={Group11} alt="Trophy" className="xs:h-[250px]  md:h-[500px] xl:h-[600px] absolute xs:left-[75%] ml:left-[78%] md:left-[82%] xl:left-[85%] xs:top-[30%] md:top-[60%]  xl:top-[50%] " />

<img src={Group11} alt="Trophy" className="xs:h-[250px]  md:h-[600px] xl:h-[700px] absolute xs:top-[65%] md:top-[95%] xl:top-[90%]  left-[-30%] -z-10  rotate-90 " /> */}


        <div className="relative xl:w-[1240px] md:w-[900px] mx-auto mt-[200px] mb-20">
            <h2 className="text-left text-2xl md:text-3xl font-bold text-prime mb-8  ">Why Choose Us</h2>
            <div className="flex flex-wrap justify-start px-10    gap-x-48 gap-y-20 max-w-[1240px] mx-auto">
                <div className="flex flex-col items-start w-72">
                    <img src={vector1} alt="Trophy" className="w-12 h-12 mb-4" />
                    <p className="text-left text-sm md:text-base font-medium">Sewing equipment has been produced for many years</p>
                </div>
                <div className="flex flex-col items-start w-60">
                    <img src={vector2} alt="Sales team" className="w-12 h-12  mb-4" />
                    <p className="text-left text-sm md:text-base font-medium">Have an excellent elite sales team</p>
                </div>
                <div className="flex flex-col items-start w-72 xl:w-60">
                    <img src={vector3} alt="Quality" className="w-12 h-12 mb-4 " />
                    <p className="text-left text-sm md:text-base font-medium pb-4">Equipment quality is guaranteed</p>
                </div>
                <div className="flex flex-col items-start w-72">
                    <img src={vector4} alt="After sales" className="w-12 h-12 mb-4" />
                    <p className="text-left text-sm md:text-base font-medium">Good after-sales service, praised by customers</p>
                </div>
                <div className="flex flex-col items-start w-72">
                    <img src={vector5} alt="Categories" className="w-12 h-12 mb-4" />
                    <p className="text-left text-sm md:text-base font-medium">Complete categories of sewing equipment</p>
                </div>
            </div>
        </div>

        </>
    );
};

export default FeatureSection;
