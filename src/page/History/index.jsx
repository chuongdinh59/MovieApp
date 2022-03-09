import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { CardList } from '../../components/Card';
import Header from '../../components/Header';

const History = () => {
  return (
    <>
      <div className="history">
        <div className="container">
          <Header />
          <div className="history-wraper">
            <div className="history-header mb-3">
              <h3 className="title">Watch History</h3>
              <button className="history-clean_btn pointer">
                <FaTrash />
                <span>Clean</span>
              </button>
            </div>
            <CardList />
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
