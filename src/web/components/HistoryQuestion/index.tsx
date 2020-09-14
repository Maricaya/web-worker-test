// import "./banner.css";
import React, { FC } from 'react';
import LabelClassTypeTab from '../LabelClassTypeTab/index';
import './HistoryQuestion.css';

const History: FC = () => {
  return (
    <div className="yd-components-history">
      <h2>历史题目</h2>
      <LabelClassTypeTab />
    </div>
  );
};
export default History;
