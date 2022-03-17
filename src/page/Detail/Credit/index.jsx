import React, { useEffect, useState } from 'react';
import api from '../../../service/api';
import { axiosConfig } from '../../../service/axios';

function Credit(props) {
  const [data, setData] = useState();
  const { category, id } = props;
  useEffect(() => {
    (async () => {
      const res = await api.credits(category, id);
      setData(res.cast);
    })();
  }, [category, id]);

  return (
    <section className="credit grid grid-col-3 grid-col-sm-2 ">
      {data?.slice(0, 6).map((item, i) => {
        return (
          <div className="credit-item" key={i}>
            <img src={axiosConfig.w500Image(item.profile_path)} alt="" className="mb-2" />
            <p className="title chareter">{item.character}</p>
            <p className="name title-2">{item.name}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Credit;
