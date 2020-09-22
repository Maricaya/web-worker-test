// import "./banner.css";
import React, { FC, useEffect, useState } from 'react';
import LabelClassTypeTab from '@components/LabelClassTypeTab/index';
import axios from 'axios';
import './DailyQuestion.css';

const Daily: FC = () => {
  const getData = (store: {
    dispatch: (arg0: { type: string; payload: { data: any } }) => void;
  }) => {
    return new Promise((resolve) => {
      axios.get('/api/images').then((response) => {
        // store.dispatch({
        //   type: "CHANGE_DATA",
        //   payload: {
        //     data: response.data.data,
        //   },
        // });
        resolve(response);
      });
    });
  };
  const [data, setData] = useState<string>('');
  useEffect(() => {
    axios
      .get('/api/images?qid=870&uid=0', {
        responseType: 'blob',
      })
      .then((response) => {
        console.log(response);
        // data = response.data
        const qrUrl = window.URL.createObjectURL(response.data);
        setData(qrUrl);
        console.log(qrUrl);
      });
  }, []);
  return (
    <div className="yd-components-Daily">
      <h2>每日一题</h2>
      <LabelClassTypeTab />
      <img src={data} />
    </div>
  );
};
export default Daily;
