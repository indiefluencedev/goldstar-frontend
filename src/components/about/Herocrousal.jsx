import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import LazyLoad from 'react-lazyload';
import './ImageCarousel.css';


//banner 1
import heroImageEn from '../../assets/banner/hero-image-en.webp'
import heroImageKn from '../../assets/banner/hero-image-kn.webp'
import heroImageCn from '../../assets/banner/hero-image-cn.webp'

// banner 2
import heroImageEn2 from '../../assets/banner/hero-image-en2.webp'
import heroImageKn2 from '../../assets/banner/hero-image-kn2.webp'
import heroImageCn2 from '../../assets/banner/hero-image-cn2.webp'

// banner 3
import heroImageEn3 from '../../assets/banner/hero-image-en3.webp'
import heroImageKn3 from '../../assets/banner/hero-image-kn3.webp'
import heroImageCn3 from '../../assets/banner/hero-image-cn3.webp'

// Mobile banner 1
import heroMobileImageEn from '../../assets/banner/hero-mobile-image-en.webp'
import heroMobileImageKn from '../../assets/banner/hero-mobile-image-kn.webp'
import heroMobileImageCn from '../../assets/banner/hero-mobile-image-cn.webp'

// Mobile banner 2
import heroMobileImageEn2 from '../../assets/banner/hero-mobile-image-en2.webp'
import heroMobileImageKn2 from '../../assets/banner/hero-mobile-image-kn2.webp'
import heroMobileImageCn2 from '../../assets/banner/hero-mobile-image-cn2.webp'

// Mobile banner 3
import heroMobileImageEn3 from '../../assets/banner/hero-mobile-image-en3.webp'
import heroMobileImageKn3 from '../../assets/banner/hero-mobile-image-kn3.webp'
import heroMobileImageCn3 from '../../assets/banner/hero-mobile-image-cn3.webp'


const ImageCarousel = () => {
    const { i18n } = useTranslation();

    const getCurrentImages = () => {
        switch (i18n.language) {
            case 'ko':
                return [heroImageKn, heroImageKn2, heroImageKn3];
            case 'cn':
                return [heroImageCn, heroImageCn2, heroImageCn3];
            default:
                return [heroImageEn, heroImageEn2, heroImageEn3];
        }
    };

    const getCurrentMobileImages = () => {
        switch (i18n.language) {
            case 'ko':
                return [heroMobileImageKn, heroMobileImageKn2, heroMobileImageKn3];
            case 'cn':
                return [heroMobileImageCn, heroMobileImageCn2, heroMobileImageCn3];
            default:
                return [heroMobileImageEn, heroMobileImageEn2, heroMobileImageEn3];
        }
    };

    const images = getCurrentImages();
    const imagesM = getCurrentMobileImages();

    return (
        <div className="carousel-container">
            {/* Desktop Carousel */}
            <div className="desktop-carousel mt-16">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="mySwiper"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="slide">
                            <LazyLoad height={200} offset={100} once>
                                <img src={image} alt={`Slide ${index}`} className="carousel-image" />
                            </LazyLoad>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Mobile Carousel */}
            <div className="mobile-carousel pt-20">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className="mySwiper"
                >
                    {imagesM.map((image, index) => (
                        <SwiperSlide key={index} className="slide">
                            <LazyLoad height={200} offset={100} once>
                                <img src={image} alt={`Slide ${index}`} className="carousel-image" />
                            </LazyLoad>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ImageCarousel;
