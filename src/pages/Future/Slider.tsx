import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image1 from '../../assets/images/BuildingFutures1.jpg';
import Image2 from '../../assets/images/BuildingFutures2.jpg';
import Image3 from '../../assets/images/BuildingFutures3.jpg';
import Image4 from '../../assets/images/BuildingFutures4.jpg';
import Image5 from '../../assets/images/BuildingFutures5.jpg';
import Image8 from '../../assets/images/BuildingFutures8.jpg';
import Image7 from '../../assets/images/BuildingFutures7.jpg';

export default function Slider() {
  return (
    <>
      <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="FutureSwiper"
            >
                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src={Image1} />
                </SwiperSlide>

                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src={Image2} />
                </SwiperSlide>

                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src={Image3} />
                </SwiperSlide>

                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src={Image4} />
                </SwiperSlide>

                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src={Image5} />
                </SwiperSlide>

                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src={Image8} />
                </SwiperSlide>

                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover', width: '300px', height: '300px' }}>
                    <img src={Image7} />
                </SwiperSlide>
            </Swiper>
    </>
  )
}
