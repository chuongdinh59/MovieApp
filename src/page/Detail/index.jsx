import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Video from '../../components/Video';
import api from '../../service/api';
import { axiosConfig } from '../../service/axios';
import Credit from './Credit';
import Similar from './Similar';
import Loading from '../../components/Loading';
const Detail = () => {
  const { category, id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const res = await api.detail(category, id, { params: {} });
      setData(res);
    })();
    window.scroll(0, 0);
  }, [category, id]);
  return data ? (
    <div className="detail">
      <div className="container">
        <Header />
        <div className="detail-main grid mb-3">
          <div className="col ">
            <div className="media mb-2">
              <Video category={category} id={id} />
            </div>
            <div className="title">{data?.title}</div>
            <div className="evalute mb-3">
              <div className="evalute-item">
                <div className="icon star">
                  <FaStar />
                </div>
                <span className="title-2">
                  {data?.vote_average}+ ({data?.vote_count} )
                </span>
              </div>
              <div className="evalute-item">
                <div className="icon">
                  <img src="/img/calendar.png" alt="" />
                </div>
                <span className="title-2">2022</span>
              </div>
            </div>
            <div className="tags mb-3">
              {data?.genres.map((item) => {
                return (
                  <a key={item?.id} href="#!" className="tag-item text">
                    {item?.name}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="col">
            <Similar category={category} id={id} />
          </div>
        </div>
        <div className="overview mb-3">
          <img src={axiosConfig.w500Image(data?.poster_path || data?.backdrop_path)} alt="" />
          <div className="overview-se">
            <p className="description text">{data?.overview}</p>
          </div>
        </div>
        <h3 className="title mb-3">CAST</h3>
        <Credit category={category} id={id} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Detail;
