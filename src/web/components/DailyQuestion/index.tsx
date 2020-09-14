// import "./banner.css";
import React, { FC } from 'react';
import LabelClassTypeTab from '../LabelClassTypeTab/index';
import './DailyQuestion.css';

const Daily: FC = () => {
  return (
    <div className="yd-components-Daily">
      <h2>每日一题</h2>
      <LabelClassTypeTab />
    </div>
  );
};
export default Daily;
