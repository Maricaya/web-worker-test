import React from 'react';
import { StaticRouter, Link } from 'react-router-dom';
import routes, { routeLists } from '../routes/index-server-router';
// import { useRootData } from 'web/tools/useRootData';
import Banner from '@components/Banner';
import NavList from '@components/NavList';
import Footer from '@components/Footer';
import '@assets/styles/base.css';
import RightBar from '../components/RightBar/index';
import Swiper, { ItemProps } from '@components/Swiper';

const bannerItem: ItemProps[] = [
  {
    image: require('@assets/images/banner.png'),
    title: 'banner1',
  },
  {
    image: require('@assets/images/banner1.png'),
    title: 'banner2',
  },
];
const App = (url: string) => {
  //   const token = useRootData((store) => store.home.token);
  return (
    <StaticRouter location={url}>
      {/* <Banner /> */}
      <Swiper imgItem={bannerItem} />
      <NavList />
      <div className="yd-base-content">
        {routes()}
        <RightBar />
      </div>
      <Footer />
    </StaticRouter>
  );
};
export default App;
