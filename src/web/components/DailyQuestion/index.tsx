// import "./banner.css";
import React, { FC ,useEffect} from 'react';
import LabelClassTypeTab from '../LabelClassTypeTab/index';
import axios from "axios";
import './DailyQuestion.css';

const Daily: FC = () => {
  const getData = (store: { dispatch: (arg0: { type: string; payload: { data: any; }; }) => void; })=>{
    return new Promise((resolve) => {
      axios.get("http://localhost:8082/api/images").then((response) => {
        // store.dispatch({
        //   type: "CHANGE_DATA",
        //   payload: {
        //     data: response.data.data,
        //   },
        // });
        resolve(response);
      });
    });
  }
  useEffect(() => {
      axios.get("http://localhost:8082/api/images").then((response) => {
        let img = new Image()

      });
  }, []);
  let data ;
  return (
    <div className="yd-components-Daily">
      
      <h2>每日一题</h2>
      <LabelClassTypeTab />
    </div>
  );
};
export default Daily;
