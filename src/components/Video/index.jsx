import React, { useEffect, useState } from 'react';
import api from '../../service/api';

function Video({ category, id }) {
  const [video, setVideo] = useState();
  useEffect(() => {
    (async () => {
      const res = await api.getVideos(category, id);
      setVideo(res?.results);
    })();
  }, [category, id]);
  return video ? (
    <iframe
      src={`https://www.youtube.com/embed/${video[0]?.key}`}
      width="100%"
      height="100%"
      title="video"
    ></iframe>
  ) : (
    <h1>LOADING....</h1>
  );
}

export default Video;
