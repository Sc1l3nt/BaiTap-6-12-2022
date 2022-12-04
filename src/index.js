// Dom
import ReactDOM from 'react-dom/client';
// CSS
import './index.css';
// React router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeTemplate from './Template/HomeTemplate';
import Home from './Pages/Home/Home';
// React redux
import { Provider } from 'react-redux'
import BaiTapBurger from './Pages/BaiTapBurger/BaiTapBurger';
import { store } from './Redux/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route path='home' element={<Home />} />
          <Route path='baitapburger' element={<BaiTapBurger />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);