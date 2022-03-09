import React, { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { fetchDetail, setDataMovieDetail } from '../../redux/reducers/movieSlice';
import Similar from './Similar';

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetail(id));
  }, []);
  return (
    <div className="detail">
      <div className="container">
        <Header />
        <div className="detail-main grid">
          <div className="col ">
            <div className="media mb-2"></div>
            <div className="title">West Side Story</div>
            <div className="evalute mb-3">
              <div className="evalute-item">
                <div className="icon star">
                  <FaStar />
                </div>
                <span className="title-2">7.8</span>
              </div>
              <div className="evalute-item">
                <div className="icon">
                  <img src="./img/calendar.png" alt="" />
                </div>
                <span className="title-2">2022</span>
              </div>
            </div>
            <div className="tags mb-3">
              <a href="#!" className="tag-item text">
                Crime
              </a>
              <a href="#!" className="tag-item text">
                Drama
              </a>
              <a href="#!" className="tag-item text">
                Singing & Dacing
              </a>
              <a href="#!" className="tag-item text">
                Romatic
              </a>
            </div>
            <p className="description text">
              An adaptation of the 1957 musical, West Side Story explores forbidden love and the rivalry
              between the Jets and the Sharks, two teenage street gangs of different ethnic backgrounds.
            </p>
          </div>
          <div className="col">
            <Similar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
