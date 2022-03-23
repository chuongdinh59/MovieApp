import React from 'react';
import Menu from '../../components/Menu';
import SearchModal from '../../components/Modal/SearchModal';
import { SearchBoard } from '../../components/Search';
import HomePageMain from './HomePageMain';
const Home = () => {
  return (
    <div className="home">
      <SearchModal />
      <Menu />
      <HomePageMain />
      <SearchBoard />
    </div>
  );
};

export default Home;
