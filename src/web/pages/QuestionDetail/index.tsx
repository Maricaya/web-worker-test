import React, { FC, useEffect, useState } from 'react';
import { useRootData } from '@tools/useRootData';
import axios from 'axios';
import './QuestionDetail.css';

const QuestionDetail: FC = (): JSX.Element => {
  const { qid, uid, title } = useRootData((store) => ({
    qid: store.QuestionSimple.qid,
    uid: store.QuestionSimple.uid,
    title: store.QuestionSimple.title,
  }));
  const [baseUrl, setUrl] = useState<string>('');
  useEffect(() => {
    queryDetails();
  }, []);
  const queryDetails = async () => {
    axios
      .get(`/api/images?qid=${qid}&uid=${uid}`, {
        responseType: 'blob',
      })
      .then((response) => {
        const qrUrl = window.URL.createObjectURL(response.data);
        setUrl(qrUrl);
      });
  };

  return (
    <div className="yd-question-detail">
      <h2>答案来啦</h2>
      <p className="yd-question-title">{title}</p>
      <img className="yd-question-answer" src={baseUrl} alt="" />
    </div>
  );
};

export default QuestionDetail;
