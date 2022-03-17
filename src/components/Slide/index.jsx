import React, { useEffect, useState } from 'react';
// Import Swiper styles
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import api, { movieType } from '../../service/api';
import { axiosConfig } from '../../service/axios';
import { Link } from 'react-router-dom';
const Slider = () => {
  const [slider, setSlider] = useState();
  useEffect(() => {
    const params = { page: 1 };
    (async () => {
      const res = await api.getMoviesList(movieType.popular, { params });
      setSlider(res.results);
    })();
  }, []);

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
      {!!slider &&
        slider?.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <section className="slider">
                <Link className="slider-item" to={`/detail/movie/${item.id}`}>
                  <span className="title">{item.title || item.name}</span>
                  <img src={axiosConfig.w500Image(item?.backdrop_path || item?.poster_path)} alt="" />
                </Link>
              </section>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Slider;
