import React, { useEffect } from 'react';
import Menu from '../../components/Menu';
import Overplay from '../../components/Overplay';
import { SearchBoard } from '../../components/Search';
import HomePageMain from './HomePageMain';

const Home = () => {
  return (
    <div className="home">
      <Overplay />
      <Menu />
      <HomePageMain />
      <SearchBoard />
    </div>
  );
};

export default Home;
