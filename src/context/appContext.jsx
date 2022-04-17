import { createContext, useMemo, useState } from 'react';
import useFirestore from '../hook/useFirestore';
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [filter, setFilter] = useState({});
  const colectionName = 'comments' + filter?.category?.[0]?.toUpperCase() + filter?.category?.slice(1);
  const conditionComments = useMemo(() => {
    return {
      fieldName: 'id',
      operator: '==',
      compareValue: `${filter?.id}`,
    };
  }, [filter?.id, filter?.category]);
  const comments = useFirestore(colectionName, conditionComments);
  console.log(comments);
  return <AppContext.Provider value={{ filter, setFilter, comments }}>{children}</AppContext.Provider>;
};
