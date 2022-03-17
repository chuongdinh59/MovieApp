import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../../service/api';
import { axiosConfig } from '../../../service/axios';

const Similar = (props) => {
  const [data, setData] = useState();
  const { category, id } = props;
  useEffect(() => {
    (async () => {
      const res = await api.similar(category, id);
      setData(res.results);
    })();
  }, [category, id]);

  return (
    <div className="similar">
      <h3 className="similar-label title">Similar to this</h3>
      <div className="similar-main">
        {data?.map((item, i) => {
          return (
            <Link className="similar-item mb-2" key={i} to={`/detail/${category}/${item?.id}`}>
              <img src={axiosConfig.w500Image(item?.backdrop_path || item?.poster_path)} alt="" />
              <div className="similar-content">
                <p className="title-2">{item.title || item.name}</p>
                <div className="similar-value">
                  <div className="icon star">
                    <FaStar />
                  </div>
                  <span className="title-2">{item.vote_average}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Similar;
