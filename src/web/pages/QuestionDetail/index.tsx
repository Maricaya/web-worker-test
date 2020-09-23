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
    //setUrl('');
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
