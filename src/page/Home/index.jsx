import React from 'react';
import Menu from '../../components/Menu';
import { SearchBoard } from '../../components/Search';
import HomePageMain from './HomePageMain';
const Home = () => {
  return (
    <div className="home">
      <Menu />
      <HomePageMain />
      <SearchBoard />
    </div>
  );
};

export default Home;
