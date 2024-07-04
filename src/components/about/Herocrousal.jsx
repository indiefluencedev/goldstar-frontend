import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import image1 from '../../assets/png/heroimage.png';
import image2 from '../../assets/png/heroimage2.png';
import image3 from '../../assets/png/heroimage3.png';
import koimage3 from '../../assets/png/koheroimage3.png';
import cnimage3 from '../../assets/png/Cnheroimage3.png';
import koimage2 from '../../assets/png/Koheroimage2.png';
import cnimage2 from '../../assets/png/Cnheroimage2.png';

import imagemobile1 from '../../assets/png/heroimawmobile.jpg';
import imagemobile2 from '../../assets/png/heroimagemobile2.png';
import imagemobile3 from '../../assets/png/heroimagemobile3.png';   
import koimagemobile3 from '../../assets/png/Koheroimagemobile3.png';
import cnimagemobile3 from '../../assets/png/Cnheroimagemobile3.png';
import koimagemobile2 from '../../assets/png/Koheroimagemobile2.png';
import cnimagemobile2 from '../../assets/png/Cnheroimagemobile2.png';

const ImageCarousel = () => {
    const { i18n } = useTranslation();

    const getCurrentImages = () => {
        switch (i18n.language) {
            case 'ko':
                return [image1, koimage2, koimage3];
            case 'cn':
                return [image1, cnimage2 , cnimage3];
            default:
                return [image1, image2, image3];
        }
    };

    const getCurrentMobileImages = () => {
        switch (i18n.language) {
            case 'ko':
                return [imagemobile1, koimagemobile2, koimagemobile3];
            case 'cn':
                return [imagemobile1, cnimagemobile2, cnimagemobile3];
            default:
                return [imagemobile1, imagemobile2, imagemobile3];
        }
    };

    const images = getCurrentImages();
    const imagesM = getCurrentMobileImages();

    return (
        <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[60vh] xl:h-[70vh] 3xl:h-[90vh] 2xl:top-[20px] xl:top-[100px] lg:top-[26px] sm:top-[-40px] xs:top-[30px] relative">
            {/* Desktop Carousel */}
            <div className="hidden md:block pt-9 w-full h-full">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="mySwiper h-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="h-full flex items-center justify-center">
                            <img src={image} alt={`Slide ${index}`} className="w-full  xl:w-full h-full object-cover lg:object-fill xl:object-cover" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Mobile Carousel */}
            <div className="block md:hidden w-full h-full pt-10">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="mySwiper h-full"
                >
                    {imagesM.map((image, index) => (
                        <SwiperSlide key={index} className="h-full flex items-center justify-center">
                            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-fill" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ImageCarousel;
