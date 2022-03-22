import { createContext, useState } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsIOpen] = useState(false);
  const handleToggle = () => {
    setIsIOpen(!isOpen);
  };
  return <MenuContext.Provider value={{ handleToggle, isOpen }}>{children}</MenuContext.Provider>;
};
export default MenuContext;
