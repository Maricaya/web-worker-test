import React from 'react';
import routes, { routeLists } from '@routes/index';
import { BrowserRouter, Link } from 'react-router-dom';
// import { useRootData } from 'web/tools/useRootData';
import Banner from '@components/Banner';
import Swiper,{ItemProps} from "@components/Swiper";

const App = () => {
  console.log(1);
  //   const token = useRootData((store) => store.home.token);
  return (
    <BrowserRouter>
      
      {routeLists.map((item, index) => {
        return (
          <div key={index}>
            <Link to={item.path as string}>{item.path}</Link>;
          </div>
        );
      })}
      {routes('')}
    </BrowserRouter>
  );
};
export default App;
