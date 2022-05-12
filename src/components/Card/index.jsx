import React, { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useParams } from 'react-router-dom';
// Import Swiper styles
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import api, { category, movieType, tvType } from '../../service/api';
import { axiosConfig } from '../../service/axios';
import { addType } from '../Search';
import Loading from '../Loading';
export const Card = ({ data, category: cate }) => {
  const link = '/detail/' + category[cate] + '/' + data.id;
  const bg = axiosConfig.w500Image(data.poster_path || data.backdrop_path);
  const handleClick = (props) => {
    let items = JSON.parse(localStorage.getItem('history')) || [];
    const index = items.findIndex((i) => i.data.id === data.id);
    if (index !== -1) {
      items.splice(index, 1);
    }
    items = [
      {
        data,
        cate: category[cate],
      },
      ...items,
    ];
    localStorage.setItem('history', JSON.stringify(items));
  };
  return (
    data && (
      <Link className="card-item" to={link} onClick={handleClick}>
        <div className="card-img">
          <img src={bg} alt="" />
          <p className="card-title text">{data?.title || data?.name}</p>
        </div>
      </Link>
    )
  );
};

export const CardSection = (props) => {
  const [data, setData] = useState([]);
  const format = (str) => {
    return str.toUpperCase().replaceAll('_', ' ');
  };
  useEffect(() => {
    const fetchData = async () => {
      let res = null;
      const params = {};

      if (props.type !== 'similar') {
        if (props.category === category.movie) res = await api.getMoviesList(props.type, { params });
        else res = await api.getTvList(props.type, { params });
      } else {
        res = await api.similar(props.category, props.id);
      }
      setData(res.results);
    };
    fetchData();
  }, []);

  return data.length > 0 ? (
    <section className="card mb-3">
      <div className=" title mb-2">{props.category.toUpperCase() + ' - ' + format(props.type)}</div>
      {/* <div className="card-section grid grid-col-4 grid-col-md-2"> */}
      {/* <Card />
        <Card />
        <Card />  
        <Card /> */}

      <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerView={4}
        slidesPerGroupAuto
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 4,
          },
        }}
      >
        {data?.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Card data={item} category={props.category} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* </div> */}
    </section>
  ) : (
    <Loading />
  );
};

export const CardList = () => {
  const { type = 'tv' } = useParams();
  const [data, setData] = useState([]);
  const [filter, setFiler] = useState({
    type,
    category: movieType.popular,
  });
  const ref = useRef(1);
  const params = {
    page: ref.current,
  };
  const fetchData = async () => {
    let res;
    if (type === 'tv') {
      ref.current = 1;
      params.page = 1;
      res = await api.getTvList(tvType.popular, { params });
      addType(res.results, 'tv');
    } else {
      ref.current = 1;
      params.page = 1;
      res = await api.getMoviesList(movieType.popular, { params });
      addType(res.results, 'movie');
    }
    setData(res.results);
  };
  useEffect(() => {
    fetchData();
  }, [type]);
  const fetchMoreData = async () => {
    ref.current++;
    params.page++;
    let res = {};
    if (filter.type === 'tv') {
      res = await api.getTvList(tvType.popular, { params });
      addType(res.results, 'tv');
    } else {
      res = await api.getMoviesList(tvType.popular, { params });
      addType(res.results, 'movie');
    }
    setData([...data, ...res.results]);
  };
  // console.log(data);
  // const fetchMoreData = () => {
  //   const id = setTimeout(() => {
  //     (async () => {
  //       if (type === 'tv') {
  //         const res = await api.getTvList(tvType.popular, { params });
  //         addType(res.results, 'tv');
  //         setData([...data, ...res.results]);
  //       } else {
  //         const res = await api.getMoviesList(movieType.popular, { params });
  //         addType(res.results, 'movie');
  //         setData([...data, ...res.results]);
  //       }
  //     })();
  //   }, 1000);
  //   return clearTimeout(id);
  // };
  return data.length > 0 ? (
    <InfiniteScroll dataLength={data.length} next={fetchMoreData} hasMore={true} loader={<h4>Loading...</h4>}>
      <section className="card-list grid grid-col-5 grid-col-md-3 grid-col-sm-2 ">
        {data?.map((i) => (
          <Card category={i?.type} data={i} />
        ))}
      </section>
    </InfiniteScroll>
  ) : (
    <Loading />
  );
};
