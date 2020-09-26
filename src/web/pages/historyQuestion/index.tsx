// import "./banner.css";
import React, { FC ,useEffect, useState } from 'react';
import LabelClassTypeTab from '@components/LabelClassTypeTab/index';
import './HistoryQuestion.css';
import { count } from 'console';
import axios from 'axios'

const History: FC = () => {
  const [list,setList]=useState<[]>([]);
  useEffect(()=>{
    getlist()
  },[])
const getlist = async ()=>{
  let res = await axios.get('/api/list/:type',{})
  setList(res.data.list)
}
  return (
    <div className="yd-components-history">
      <h2>历史题目</h2>
      <LabelClassTypeTab  value={list}/>
    </div>
  );
};
export default History;
