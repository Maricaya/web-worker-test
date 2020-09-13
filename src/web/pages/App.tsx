import React from 'react';
import routes, { routeLists } from '@routes/index';
import { BrowserRouter, Link } from 'react-router-dom';
// import { useRootData } from 'web/tools/useRootData';
import Banner from '@components/Banner';
import NavList from '@components/NavList';
import '@assets/styles/base.css';
import RightBar from '../components/RightBar/index';

const App = () => {
  //   const token = useRootData((store) => store.home.token);
  return (
    <BrowserRouter>
      <Banner />
      <NavList />
      <div className="yd-base-content">
        {routes('')}
        <RightBar />
      </div>
    </BrowserRouter>
  );
};
export default App;
