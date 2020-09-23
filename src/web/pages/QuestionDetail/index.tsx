import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import './QuestionDetail.css';

type queryProps = {
  qid: number;
  uid: number;
  title?: string;
};
const QuestionDetail: FC<queryProps> = ({ qid, uid, title }): JSX.Element => {
  const [baseUrl, setUrl] = useState<string>('');
  useEffect(() => {
    queryDetails();
  }, []);

  const queryDetails = async () => {
    axios.get(`http://localhost:8082/api/images?qid=${qid}&uid=${uid}`, {
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
      <p>{title}</p>
      <img className="yd-question-answer" src={baseUrl} alt="" />
    </div>
  );
};

export default QuestionDetail;
