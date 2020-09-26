import React, { FC } from 'react';
import './Rightbar.css';

const data = [
  { title: '最牛逼的前端聚集地', id: '001' },
  { title: '最牛逼的前端聚集地', id: '001' },
  { title: '最牛逼的前端聚集地', id: '001' },
  { title: '最牛逼的前端聚集地', id: '001' },
  { title: '最牛逼的前端聚集地', id: '001' },
  { title: '最牛逼的前端聚集地', id: '001' },
  { title: '最牛逼的前端聚集地', id: '001' },
  { title: '最牛逼的前端聚集地', id: '001' },
];
type IList = {
  title: string;
  id: string;
};
const RightBar: FC = () => {
  return (
    <div className="yd-right-bar">
      <h2>贡献题目</h2>
      <ul className="yd-right-content">
        {data.map((item, index) => (
          <li key={index} className="yd-right-list">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightBar;
