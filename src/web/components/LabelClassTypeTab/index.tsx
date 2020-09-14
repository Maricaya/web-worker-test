import React, { FC, useEffect, useState, memo } from 'react';
import './LabelClassTypeTab.css';

// type  = {
//   title: string;
//   id: string;
// };
type valType = {} | string | number | {}[];
type IList<T> = {
  [key: string]: T;
};

const mockData = [
  {
    title: 'vue是什么',
    id: '001',
  },
  {
    title: 'vue是什么',
    id: '001',
  },
  {
    title: 'vue是什么',
    id: '001',
  },
  {
    title: 'vue是什么',
    id: '001',
  },
  {
    title: 'vue是什么',
    id: '001',
  },
  {
    title: 'vue是什么',
    id: '001',
  },
  {
    title: 'vue是什么',
    id: '001',
  },
  {
    title: 'vue是什么',
    id: '001',
  },
];
type nativeEvents = React.ChangeEvent<MouseEvent>;
const LabelClassTypeTab: FC<IList<valType>> = memo(
  ({ value }): JSX.Element => {
    const [typeList, setList] = useState<IList<valType>[] | any>();
    useEffect(() => {
      // fetch('/api/question/typeTab')
      //   .then((res) => res.json())
      //   .then((res) => {
      //     setList(res.data);
      //   });
      setList(mockData);
    }, [value]);
    const clickHandle = (e: nativeEvents) => {};
    return (
      <ul className="yd-questionType-tab">
        {typeList
          ? typeList.map((item, index) => (
              <li key={index} className="yd-questionType-list">
                {item.title}
              </li>
            ))
          : null}
      </ul>
    );
  }
);

export default LabelClassTypeTab;
