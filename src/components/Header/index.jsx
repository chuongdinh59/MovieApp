import React from 'react';
import Filter from '../Filter';
import { Search } from '../Search';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container  ">
        <div className="header-logo">
          <img src="./img/logo.png" alt="" />
        </div>
        <div className="icon search-icon">
          <FaSearch />
        </div>
        <div className="header-search ">
          <Search />
        </div>
      </div>
      <div className="header-category mb-3">
        <a href="#!" className="header-item title">
          TV Series
        </a>
        <a href="#!" className="header-item title">
          Movie
        </a>
        <a href="#!" className="header-item title">
          Anime
        </a>
      </div>
      <div className="header-filter mb-3">
        <Filter />
        <Filter />
        <Filter />
        <Filter />
        <Filter />
      </div>
    </header>
  );
};

export default Header;
