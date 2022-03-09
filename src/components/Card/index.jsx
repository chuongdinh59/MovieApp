import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
export const Card = ({ data }) => {
  return (
    data && (
      <Link className="card-item">
        <div className="card-img">
          <img src={data?.imageUrl} alt="" />
          <p className="card-title text">{data?.title}</p>
        </div>
      </Link>
    )
  );
};

export const CardSection = ({ data }) => {
  return (
    <section className="card mb-3">
      <div className=" title mb-2">{data && data?.homeSectionName}</div>
      {/* <div className="card-section grid grid-col-4 grid-col-md-2"> */}
      {/* <Card />
        <Card />
        <Card />
        <Card /> */}
      <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerView={4}
        slidesPerGroupAuto
        spaceBetween={30}
        className="mySwiper"
      >
        {data?.recommendContentVOList?.map((item) => {
          return (
            <SwiperSlide>
              <Card data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* </div> */}
    </section>
  );
};

export const CardList = () => {
  return (
    <section className="card-list grid grid-col-7 grid-col-md-3 grid-col-sm-2 ">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};
