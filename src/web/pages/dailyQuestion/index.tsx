// import "./banner.css";
import React, { FC, useEffect, useState } from 'react';
import LabelClassTypeTab from '@components/LabelClassTypeTab/index';
import axios from 'axios';
import './DailyQuestion.css';

const Daily: FC = () => {
  const [list, setList] = useState<object>([]);
  useEffect(() => {
    let data = getData('daily')
    setList(data.list);
  }, []);
  //可以抽出来
  const getData = async (type: string):object =>{
    let res = await axios.get(`http://localhost:8082/api/list/${type}`, {
      responseType: 'json',
    })
    console.log(res.data)
    return res.data
  }
  return (
    <div className="yd-components-Daily">
      <h2>每日一题</h2>
      <LabelClassTypeTab list={list} />
    </div>
  );
};
export default Daily;
