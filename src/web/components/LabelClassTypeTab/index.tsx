import React, { FC, useEffect, useState, memo } from 'react';
import './LabelClassTypeTab.css';

type IList = {
  title: string;
  id: string;
};
type Iprops = {
  value: string;
};
const LabelClassTypeTab: FC<Iprops> = memo(
  ({ value }): JSX.Element => {
    const [typeList, setList] = useState<IList[]>();
    useEffect(() => {
      console.log('渲染了');
      fetch('/api/question/typeTab')
        .then((res) => res.json())
        .then((res) => {
          setList(res.data);
        });
    }, [value]);

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
