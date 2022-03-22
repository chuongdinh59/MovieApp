import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { CardSection } from '../../../components/Card';
import Slider from '../../../components/Slide';
import MenuContext from '../../../context/menuContext';
import { category, movieType, tvType } from '../../../service/api';

const HomePageMain = () => {
  const { handleToggle } = useContext(MenuContext);
  return (
    <div className="home-main">
      <div className="home-main_header-sm" onClick={() => handleToggle(true)}>
        <div className="logo">
          <img src="./img/logo.png" alt="" />
        </div>
        <div className="bar icon">
          <FaBars />
        </div>
      </div>
      <div className="home-main_list">
        <Slider />
        <CardSection category={category.movie} type={movieType.popular} />
        <CardSection category={category.movie} type={movieType.top_rated} />
        <CardSection category={category.movie} type={movieType.upcoming} />
        <CardSection category={category.tv} type={tvType.popular} />
        <CardSection category={category.tv} type={tvType.on_the_air} />
        <CardSection category={category.tv} type={tvType.top_rated} />
      </div>
    </div>
  );
};

export default HomePageMain;
