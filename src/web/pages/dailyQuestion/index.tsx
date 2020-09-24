// import "./banner.css";
import React, { FC, useEffect, useState } from 'react';
import LabelClassTypeTab from '@components/LabelClassTypeTab/index';
import { useRootData } from '@tools/useRootData';
import axios from 'axios';
import './DailyQuestion.css';

const Daily: FC = () => {
  const { lists, qid, uid, getAllList, setUid, setQid } = useRootData(
    (store) => ({
      lists: store.QuestionModel.list,
      qid: store.QuestionSimple.qid,
      uid: store.QuestionSimple.uid,
      setUid: store.QuestionSimple.setUid,
      setQid: store.QuestionSimple.setQid,
      getAllList: store.QuestionModel.getAllList,
    })
  );
  const [list, setList] = useState<object>([]);
  useEffect(() => {
    getAllList('type');
    //setList(list);
  }, []);
  //可以抽出来

  return (
    <div className="yd-components-Daily">
      <h2>每日一题</h2>
      <LabelClassTypeTab value={list} />
    </div>
  );
};
export default Daily;
