import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Explore from './page/Explore';
import History from './page/History';
import Home from './page/Home';
import './scss/style.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import Detail from './page/Detail';
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/history" element={<History />} />
          <Route path="/tv/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
