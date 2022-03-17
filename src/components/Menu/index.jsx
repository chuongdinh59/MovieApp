import React from 'react';
import { FaDesktop, FaHistory, FaHome, FaRegCompass, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
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
          <Link className="menu-content_item mb-2" to="/discovery">
            <div className="icon">
              <FaRegCompass />
            </div>
            <span className="title-2">Discovery</span>
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
          <div className="menu-content_item mb-2 menu-search">
            <div className="icon">
              <FaSearch />
            </div>
            <span className="title-2">Search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
