// import "./banner.css";
import React, { useEffect } from 'react';
import LabelClassTypeTab from '../LabelClassTypeTab/index';
import './hotQuestion.css';

const Hot: React.FC = () => {
  useEffect(() => {});
  return (
    <div className="yd-components-hot">
      <h2>目前各大厂最火的前端面试真题都在这里</h2>
      <LabelClassTypeTab />
    </div>
  );
};
export default Hot;
