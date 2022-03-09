import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useSelector } from 'react-redux';
const Slider = () => {
  let slider = useSelector((store) => store.home);
  slider = slider?.home?.filter((item) => item.homeSectionType === 'BANNER')[1].recommendContentVOList;
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      slidesPerView={1}
      slidesPerGroupAuto
      spaceBetween={30}
      loop
      className="mySwiper"
    >
      {slider?.map((item) => {
        return (
          <SwiperSlide>
            <section className="slider">
              <div className="slider-item">
                <span className="title">{item.title}</span>
                <img src={item.imageUrl} alt="" />
              </div>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
