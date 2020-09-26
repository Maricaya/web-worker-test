import React, { FC, useEffect, useState, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useRootData } from '@tools/useRootData';
import './LabelClassTypeTab.css';

type valType = {} | string | number | {}[];
type IList<T> = {
  [key: string]: T;
};

type nativeEvents = React.ChangeEvent<MouseEvent>;
const LabelClassTypeTab: FC<IList<valType>> = memo(
  ({ value }): JSX.Element => {
    const [typeList, setList] = useState<IList<valType>[] | any>();

    const { setUid, setQid, setTitle } = useRootData((store) => ({
      setUid: store.QuestionSimple.setUid,
      setQid: store.QuestionSimple.setQid,
      setTitle: store.QuestionSimple.setTitle,
    }));

    useEffect(() => {
      setList(value);
    }, [value]);

    const history = useHistory();

    const pageToDetail = async (
      e: nativeEvents,
      params: Question.QuestionDetail
    ) => {
      await setUid(params.uid);
      await setQid(params.qid);
      await setTitle(params.title);
      history.push('/questionDetail');
    };

    return (
      <ul className="yd-questionType-tab">
        {typeList
          ? typeList.map((item: Question.QuestionDetail, index: number) => (
              <li
                key={index}
                className="yd-questionType-list"
                onClick={() => pageToDetail(event, item)}
              >
                {item.title}
              </li>
            ))
          : null}
      </ul>
    );
  }
);

export default LabelClassTypeTab;
