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
<<<<<<< HEAD
      <NavList />
=======
      <div className="link-box">
      {routeLists.map((item, index) => {
        return (
          <div key={index}>
            <Link to={item.path as string}>{item.title}</Link>;
          </div>
        );
      })}
      </div>
>>>>>>> e14b7502f8d7c28b5f2f9202418b1c868793be6c
      {routes('')}
    </BrowserRouter>
  );
};
export default App;
