import React, { useContext } from 'react';
import { FaDesktop, FaHistory, FaHome, FaUser, FaRegCompass, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import MenuContext from '../../context/menuContext';
import { auth } from '../../firebase/config';

const Menu = () => {
  const { isOpen, handleToggle } = useContext(MenuContext);
  const { user, setUser } = useContext(AuthContext);
  const handleFblogout = () => {
    auth
      .signOut()
      .then(function () {
        alert('Logout thành công');
      })
      .catch(function (error) {
        alert('Đã có lỗi xảy ra trong quá trình logout. Xin thử lại');
      });
    setUser({});
  };
  console.log(user);
  return (
    <>
      {isOpen && <div className="overplay" onClick={handleToggle}></div>}
      <div className={`menu ${isOpen ? 'visible' : ''}`}>
        <div className="menu-wrapper">
          <div className="menu-logo">
            <img src="./img/logo.png" alt="" />
          </div>
          <div className="menu-content">
            <h3 className="menu-title title mb-3">Menu</h3>
            <Link className="menu-content_item mb-2" to={'/'}>
              <div className="icon">
                <FaHome />
              </div>
              <span className="title-2">Home</span>
            </Link>
            <Link className="menu-content_item mb-2" to="explore">
              <div className="icon">
                <FaDesktop />
              </div>
              <span className="title-2">Explore</span>
            </Link>
            <Link className="menu-content_item mb-2" to="/history">
              <div className="icon">
                <FaHistory />
              </div>
              <span className="title-2">History</span>
            </Link>
            <div className="menu-content_item mb-2 menu-search pointer" onClick={handleToggle}>
              <div className="icon">
                <FaSearch />
              </div>
              <span className="title-2">Search</span>
            </div>

            {Object.keys(user).length === 0 ? (
              <Link className="menu-content_item mb-2" to="/login">
                <div className="icon">
                  <FaUser />
                </div>
                <span className="title-2">Login</span>
              </Link>
            ) : (
              <div className="menu-content_item mb-2 pointer" onClick={handleFblogout}>
                <div className="icon">
                  <FaUser />
                </div>
                <span className="title-2">Logout</span>
              </div>
            )}
          </div>
        </div>
        {user?.uid && (
          <div className="menu-user">
            <div className="icon">
              <img src={user?.photoURL} alt="" />
            </div>
            <span className="title-2">{user?.displayName}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
