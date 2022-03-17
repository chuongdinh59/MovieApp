import React, { useState } from 'react';
import { CardList } from '../../components/Card';
import Header from '../../components/Header';

const Explore = () => {
  const [active, setActive] = useState('tv');
  return (
    <div className="explore container">
      <Header type={active} setType={setActive} />
      <CardList />
    </div>
  );
};

export default Explore;
