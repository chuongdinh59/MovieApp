import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
function Modal({ isOpen, handleToggleModal, children }) {
  if (typeof document === undefined) {
    return <div className="modal"></div>;
  }
  return ReactDOM.createPortal(
    <div className={`modal ${isOpen ? 'is-visible' : ''}`}>
      <div className="modal-overplay" onClick={handleToggleModal}></div>
      <div className="modal-main">
        <div className="modal-close" onClick={handleToggleModal}>
          <FaTimes />
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.querySelector('body')
  );
}
export default Modal;
