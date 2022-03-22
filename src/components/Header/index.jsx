import React from 'react';
import Filter from '../Filter';
import { Search } from '../Search';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { setType, type } = props;
  return (
    <header className="header">
      <div className="header-container  ">
        <Link className="header-logo" to={'/'}>
          <img src="/img/logo.png" alt="" />
        </Link>
        <div className="icon search-icon">
          <FaSearch />
        </div>
        <div className="header-search ">
          <Search />
        </div>
      </div>
      <div className="header-category mb-3">
        <Link
          className={`header-item title pointer${type === 'tv' ? ' active' : ''}`}
          onClick={(e) => {
            setType('tv');
          }}
          to={`/explore`}
        >
          TV Series
        </Link>
        <Link
          className={`header-item title pointer ${type === 'movie' ? ' active' : ''}`}
          onClick={(e) => {
            const target = e.currentTarget.classList;
            if (target.contains('active')) target.remove('active');
            setType('movie');
          }}
          to={`/explore/movie`}
        >
          Movie
        </Link>
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
