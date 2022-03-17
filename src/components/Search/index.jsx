import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api, { category } from '../../service/api';
import { axiosConfig } from '../../service/axios';
export function addType(array, type) {
  for (let i in array) {
    array[i] = {
      ...array[i],
      type,
    };
  }
}
export const Search = () => {
  const [value, setValue] = useState(null);
  const [data, setData] = useState();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }
    if (value !== '') {
      ref.current = setTimeout(() => {
        (async () => {
          const params = {
            query: value,
          };
          const res = await api.search(category.tv, { params });
          const res2 = await api.search(category.movie, { params });
          addType(res.results, 'tv');
          addType(res2.results, 'movie');
          setData([...res.results, ...res2?.results]);
        })();
      }, 300);
    } else {
      setData([]);
    }
  }, [value]);
  return (
    <>
      <div className="search-input ">
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
          ref={ref}
        />
        <div className="icon">
          <FaSearch />
        </div>
      </div>
      {data?.length > 0 && (
        <div className="list">
          {data?.map((item) => {
            return (
              <Link className="item" to={`/detail/${item.type}/${item.id}`}>
                <img src={axiosConfig.w500Image(item.backdrop_path || item.poster_path)} alt="" />
                <p className="item-name text">{item.name || item.title}</p>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export const SearchBoard = () => {
  const [data, setData] = useState([]);
  const params = {
    media_type: 'all',
    time_window: 'week',
  };
  useEffect(() => {
    (async () => {
      const res = await api.getTrendyVideo({ params });
      setData(res.results);
    })();
  }, []);
  return (
    <div className="search">
      <Search />
      <p className="title mb-2">Top Searches</p>
      <div className="search-top">
        {/* <div className="search-top_item">
          <img className="mb-2" src="{}" alt="" />
          <span className="text">asdasd</span>;
        </div> */}
        {data?.map((item) => {
          return (
            <Link className="search-top_item" to={`/detail/${item?.media_type}/${item?.id}`}>
              <img
                className="mb-2"
                src={axiosConfig.w500Image(item.backdrop_path || item.poster_path)}
                alt=""
              />
              <span className="text">{item.title || item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
