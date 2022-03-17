import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './page/Detail';
import Explore from './page/Explore';
import History from './page/History';
import Home from './page/Home';
import './scss/style.scss';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />}>
          <Route path=":type" element={<Explore />} />
        </Route>
        <Route path="/history" element={<History />} />
        <Route path="/detail/:category/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
