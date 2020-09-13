// import "./banner.css";
import * as React from "react";
import Swiper,{ItemProps} from "@components/Swiper";
const Daily:React.FC= () => {
  const bannerItem:ItemProps[] = [{
    image: require('@assets/images/banner.png'),
    title: 'banner1',
  }, {
    image: require('@assets/images/banner1.png'),
    title: 'banner2',
  }];
  return (
    <>
      <Swiper imgItem={bannerItem}/>
      <div className="components-daily">
        <span>daily</span>
      </div>
    </>
  );
};
export default Daily;