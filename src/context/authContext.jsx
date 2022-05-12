import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        setLoading(false);
        // navigate(-1);
        navigate('/');
      }
    });
    return () => {
      unsubscibed();
    };
  }, []);
  return <AuthContext.Provider value={{ user, setUser, loading }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
