// import "./banner.css";
import React, { FC, useEffect, useState } from 'react';
import LabelClassTypeTab from '@components/LabelClassTypeTab/index';
import { useRootData } from '@tools/useRootData';
import axios from 'axios';
import './DailyQuestion.css';

const Daily: FC = () => {
  const [list, setList] = useState<[]>([]);
  useEffect(() => {
    getList();
  }, []);
  //可以抽出来
  const getList = async () => {
    let res = await axios.get('/api/list/:type', {});
    setList(res.data.list);
  };
  return (
    <div className="yd-components-Daily">
      <h2>每日一题</h2>
      <LabelClassTypeTab value={list} />
    </div>
  );
};
export default Daily;
