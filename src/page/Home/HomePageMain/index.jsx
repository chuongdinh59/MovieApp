import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { CardSection } from '../../../components/Card';
import Slider from '../../../components/Slide';
import InfiniteScroll from 'react-infinite-scroll-component';
import { homeService } from '../../../service/homeService';
import useSWRInfinite from 'swr/infinite';

const HomePageMain = () => {
  const data = useSelector((state) => state.home)?.home;
  // const getKey = (index) => `home-${index || 0}`;
  // const {
  //   data: dataTemp,
  //   error,
  //   setSize,
  // } = useSWRInfinite(getKey, (key) => homeService.getHome(Number(key.split('-').slice(-1)[0])), {
  //   revalidateFirstPage: false,
  // });
  // console.log(setSize);
  const logger = () => {
    console.log(10);
  };
  return (
    <div className="home-main">
      <div className="home-main_header-sm">
        <div className="logo">
          <img src="./img/logo.png" alt="" />
        </div>
        <div className="bar icon">
          <FaBars />
        </div>
      </div>
      <InfiniteScroll dataLength={20} next={logger}>
        <div className="home-main_list">
          <Slider />
          {/* <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection />
        <CardSection /> */}
          {data &&
            data?.map((item) => {
              return item.homeSectionName !== '' && <CardSection data={item} />;
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default HomePageMain;
