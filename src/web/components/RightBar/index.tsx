import React, { FC } from 'react';

const RightBar: FC = () => {
  const data = [
    { title: '最牛逼的学堂', id: '001' },
    { title: '最牛逼的学堂', id: '001' },
    { title: '最牛逼的学堂', id: '001' },
    { title: '最牛逼的学堂', id: '001' },
    { title: '最牛逼的学堂', id: '001' },
    { title: '最牛逼的学堂', id: '001' },
    { title: '最牛逼的学堂', id: '001' },
    { title: '最牛逼的学堂', id: '001' },
  ];
  return (
    <div>
      <span>贡献题目</span>
      {data.map((item, index) => {
        <span key={index}>{item.title}</span>;
      })}
    </div>
  );
};

export default RightBar;
