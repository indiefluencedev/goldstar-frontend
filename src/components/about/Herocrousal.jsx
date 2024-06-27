import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import image1 from '../../assets/png/heroimage.png';
import image2 from '../../assets/png/heroimage2.png';
import image3 from '../../assets/png/heroimage3.png';
import imagemobile1 from '../../assets/png/heroimawmobile.jpg';
import imagemobile2 from '../../assets/png/heroimagemobile2.png';

const images = [image1, image2, image3];
const imagesM = [imagemobile1, imagemobile2];

const ImageCarousel = () => {
    return (
        <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[60vh] xl:h-[90vh] 2xl:top-[-10px] xl:top-[-5px] lg:top-[26px] sm:top-[-40px] xs:top-[20px] relative">
            {/* Desktop Carousel */}
            <div className="hidden md:block w-full h-full">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="mySwiper h-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="h-full flex items-center justify-center">
                            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-contain" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Mobile Carousel */}
            <div className="block md:hidden w-full h-full">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="mySwiper h-full"
                >
                    {imagesM.map((image, index) => (
                        <SwiperSlide key={index} className="h-full flex items-center justify-center">
                            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-contain" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ImageCarousel;
