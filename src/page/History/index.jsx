import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

const History = () => {
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem('history')));
  const handleClear = () => {
    localStorage.removeItem('history');
    setData([]);
  };
  return (
    <>
      <div className="history">
        <div className="container">
          <Header />
          <div className="history-wraper">
            <div className="history-header mb-3">
              <h3 className="title">Watch History</h3>
              <button className="history-clean_btn pointer" onClick={handleClear}>
                <FaTrash />
                <span>Clean</span>
              </button>
            </div>
            <div className="grid grid-col-5 gap-15">
              {data?.map((i) => {
                return (
                  <Link className="card-item" to={i.link}>
                    <div className="card-img">
                      <img src={i.bg} alt="" />
                      <p className="card-title text">{i?.title}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
