import React, { FC, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import './QuestionDetail.css';

type HistoryType = {
  location: object;
};
type unionBase = string | number;
type HistoryParam<T> = {
  uid?: T;
  qid?: T;
  title?: string;
};
const QuestionDetail: FC<HistoryType> = ({ location }): JSX.Element => {
  const { uid, qid, title }: HistoryParam<unionBase> = useParams();
  const history = useHistory();
  if(!uid && !qid && !title) {
    history.push('/');
  }
  const [baseUrl, setUrl] = useState<string>('');
  const [answerFlag, setAnswerFlag] = useState<boolean>(true);

  useEffect(() => {
    queryDetails();
  }, []);
  const queryDetails = async () => {
    let response = await axios.get(`/api/images?qid=${qid}&uid=${uid}`, {
      responseType: 'blob',
    });
    const qrUrl = window.URL.createObjectURL(response.data);
    setUrl(qrUrl);
  };
  const showQuestion = () => {
    setAnswerFlag(false);
  };
  return (
    <div className="yd-question-detail">
      <h2>{title}</h2>
      {/* <p>{title}</p> */}
      <div className="yd-question-answer">
        <p
          className={
            (answerFlag
              ? 'yd-question-answer-hide showQuestion'
              : 'yd-question-answer-hide') + ' yd-question-title'
          }
          onClick={() => showQuestion()}
        >
          点击查看答案&解析
        </p>
        <img
          className={
            answerFlag
              ? 'yd-question-answer-show'
              : 'yd-question-answer-show showQuestion'
          }
          src={baseUrl}
        />
      </div>
    </div>
  );
};

export default QuestionDetail;
