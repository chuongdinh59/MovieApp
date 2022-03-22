import { createContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsIOpen] = useState(false);
  const handleToggleModal = () => {
    setIsIOpen(!isOpen);
  };
  return <ModalContext.Provider value={{ handleToggleModal, isOpen }}>{children}</ModalContext.Provider>;
};
export default ModalContext;
