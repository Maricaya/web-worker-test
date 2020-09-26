// import "./banner.css";
import React, { useEffect, useState } from 'react';
import LabelClassTypeTab from '@components/LabelClassTypeTab/index';
import './hotQuestion.css';
import axios from 'axios';

const Hot: React.FC = () => {
  const [list, setList] = useState<[]>([]);
  useEffect(() => {
    getList()
  }, []);
  const getList = async () => {
    let res = axios.get('/api/list/hot', {})
    setList((await res).data.list)
  }
  return (
    <div className="yd-components-hot">
      <h2>目前各大厂最火的前端面试真题都在这里</h2>
      <LabelClassTypeTab value={list} />
    </div>
  );
};
export default Hot;
