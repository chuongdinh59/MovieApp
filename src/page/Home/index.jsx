import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Menu from '../../components/Menu';
import Overplay from '../../components/Overplay';
import { SearchBoard } from '../../components/Search';
import HomePageMain from './HomePageMain';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'fetchHome' });
    dispatch({ type: 'fetchTopSearch' });
  }, []);
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
