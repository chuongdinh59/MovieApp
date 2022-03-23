import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import Modal from '.';
import ModalContext from '../../context/modalContext';
import api, { category } from '../../service/api';
import { axiosConfig } from '../../service/axios';
import { addType } from '../Search';
function SearchModal(props) {
  const { handleToggleModal, isOpen } = useContext(ModalContext);
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
    <Modal isOpen={isOpen} handleToggleModal={handleToggleModal}>
      <div className="modal-search">
        <div className="modal-search_input mb-3">
          <input
            type="text"
            placeholder="Bạn muốn tìm phim gì"
            value={value}
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
            ref={ref}
          />
        </div>
        {data.length > 0 && (
          <div className="list-search">
            <Swiper
              modules={[Navigation]}
              navigation={true}
              slidesPerView={1}
              slidesPerGroupAuto
              spaceBetween={30}
              loop
              className="mySwiper"
            >
              {data?.map((i) => {
                const link = '/detail/' + i.type + '/' + i.id;
                return (
                  <SwiperSlide>
                    <Link className="item" to={link}>
                      <img src={axiosConfig.w500Image(i?.backdrop_path || i.poster_path)} alt="" />
                      <span className="item-title title">{i?.title || i?.name}</span>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default SearchModal;
