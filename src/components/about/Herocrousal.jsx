import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import image1 from '../../assets/png/heroimage.png';
import image2 from '../../assets/png/heroimage2.png';
import image3 from '../../assets/png/heroimage3.png';

const images = [image1, image2, image3];

const ImageCarousel = () => {
    return (
        <div className="w-full  h-[40vh] md:h-[80vh]">
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="mySwiper h-full"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="h-full">
                        <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageCarousel;
