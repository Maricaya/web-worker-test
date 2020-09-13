import React from 'react';
import routes, { routeLists } from '@routes/index';
import { BrowserRouter, Link } from 'react-router-dom';
// import { useRootData } from 'web/tools/useRootData';
import Banner from '@components/Banner';
import NavList from '@components/NavList';
const App = () => {
  //   const token = useRootData((store) => store.home.token);
  return (
    <BrowserRouter>
      <Banner />
      <NavList />
      {routes('')}
    </BrowserRouter>
  );
};
export default App;
