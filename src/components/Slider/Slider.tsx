'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { TypeImg } from '../TopContent/images';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Slider.module.scss';

type Props = {
  images: TypeImg[];
};

const Slider = ({ images }: Props) => {
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination, Navigation]}
      effect={'fade'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      watchSlidesProgress={false}
      watchOverflow={false}
      fadeEffect={{}}
      className={styles.slider}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
      }}
      spaceBetween={30}
    >
      {images.map((img) => {
        return (
          <SwiperSlide key={img.alt} className={styles.sliderSlide}>
            <img loading="lazy" src={img.src} className={styles.sliderImage} />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
        );
      })}
      <div className="swiper-controller">
        <div className={styles.sliderButtonLeft + ' swiper-button-left'}>
          <img src="img/top-content/arrow-left.svg" alt="arrow-left" />
        </div>
        <div className={styles.sliderButtonRight + ' swiper-button-right'}>
          <img src="img/top-content/arrow-right.svg" alt="arrow-right" />
        </div>
        <div className="swiper-pagination">
          <span className="swiper-pagination-bullet " />
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;
