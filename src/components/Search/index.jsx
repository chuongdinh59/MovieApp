import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export const Search = () => {
  return (
    <div className="search-input ">
      <input type="text" placeholder="Search..." />
      <div className="icon">
        <FaSearch />
      </div>
    </div>
  );
};

export const SearchBoard = () => {
  const data = useSelector((state) => state.home)?.topSearch?.data.list;
  return (
    <div className="search">
      <Search />
      <p className="title mb-2">Top Searches</p>
      <div className="search-top">
        {data?.map((item) => {
          return (
            <div className="search-top_item">
              <img className="mb-2" src={item.cover} alt="" />
              <span className="text">{item.title}</span>;
            </div>
          );
        })}
      </div>
    </div>
  );
};
