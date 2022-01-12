import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import PropTypes from 'prop-types';
import SectionTitle from '../SectionTitle/SectionTitle';
import { brandsIcons } from '../../utils/data';
import 'swiper/swiper.min.css';
import './Brands.css';

SwiperCore.use([Autoplay]);

export default function Brands({ classes }) {
  return (
    <div className={`brands ${classes}`}>
      <SectionTitle title="марки техники" />
      <Swiper
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={2}
        spaceBetween={20}
        className="brands__container"
        breakpoints={{
          1600: {
            slidesPerView: 5,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 27,
          },
          550: {
            slidesPerView: 3,
            spaceBetween: 26,
          },
        }}
      >
        {brandsIcons.map((elem) => (
          <SwiperSlide key={elem.id}>
            <img className="brands__image" src={elem.src} alt="#" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

Brands.propTypes = {
  classes: PropTypes.string,
};

Brands.defaultProps = {
  classes: '',
};
