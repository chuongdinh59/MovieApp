import React, { useContext, useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { IoIosNavigate } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';
import addDocument from '../../utils/addDocument';
import { AuthContext } from '../../context/authContext';
import { AppContext } from '../../context/appContext';
function Comment(props) {
  const [value, setValue] = useState('');
  const { category, id } = useParams();
  const {
    user: { uid, displayName, photoURL },
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const { comments } = useContext(AppContext);
  const pushComment = () => {
    if (value === '') return;
    category && category === 'tv'
      ? addDocument('commentsTv', {
          uid,
          displayName,
          id,
          category,
          photoURL,
          text: value,
        })
      : addDocument('commentsMovie', {
          uid,
          displayName,
          id,
          category,
          photoURL,
          text: value,
        });
    setValue('');
  };
  return (
    <div className="comment mb-2">
      <div className="comment-list">
        {comments?.map((i) => {
          return (
            <div className="comment-item">
              <div className="comment-profile">
                <img src={i.photoURL} alt="" />
                <span>{i.displayName}:</span>
              </div>
              <p className="comment-text">{i.text}</p>
            </div>
          );
        })}
      </div>

      <div className="comment-bar">
        {uid ? (
          <>
            <input
              type="text "
              placeholder="Bình Luận"
              value={value}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  pushComment();
                }
              }}
              onChange={(e) => setValue(e.currentTarget.value)}
            />
            <AiOutlineSend className="pointer send-btn" onClick={pushComment} />
          </>
        ) : (
          <div
            className="pointer comment-notify"
            onClick={() => {
              navigate('/login');
            }}
          >
            <span>Đăng nhập để comment</span>
            <IoIosNavigate className="pointer send-btn navigate-btn " />
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
