import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import { AppProvider } from './context/appContext';
import AuthProvider from './context/authContext';
import { MenuProvider } from './context/menuContext';
import { ModalProvider } from './context/modalContext';
import Login from './page/Auth';
import Detail from './page/Detail';
import Explore from './page/Explore';
import History from './page/History';
import Home from './page/Home';
import './scss/style.scss';
const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <ModalProvider>
            <MenuProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />}>
                  <Route path=":type" element={<Explore />} />
                </Route>
                <Route path="/history" element={<History />} />
                <Route path="/detail/:category/:id" element={<Detail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/demo" element={<Loading />} />
              </Routes>
            </MenuProvider>
          </ModalProvider>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
