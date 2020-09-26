/**
 *
 */
import * as React from "react";
import "./swiper.css";

const {useEffect,useState} = React;

export type ItemProps = {
  image: string,
  title: string
}

interface SwiperProps {
  delay?: number,
  imgItem: ItemProps[]
}

const Swiper:React.FunctionComponent<SwiperProps> = ({
  delay = 10000,
  imgItem
}):JSX.Element => {
  let [count,setCount] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      count = count >= imgItem?.length - 1 ? 0 : count + 1;
      setCount(count);
    },delay);
  },[]);

  return (
    <div className="swiper-container">
      <ul className="swiper-item">
        {
          imgItem?.map((v,i) =>(
              <li key={v.title} className={i === count ? 'active' : null}>
                <img src={v.image} alt={v.title}/>
              </li>
            )
          )
        }
      </ul>
      <ol className="swiper-pagination">
        {imgItem?.map((v,i) =>
          (<li key={i} onClick={() => setCount(i)} className={i === count ? 'active' : null}/>)
        )}
      </ol>
    </div>
  );
};

export default Swiper;