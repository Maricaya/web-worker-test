import React, { FC, useEffect, useState, useCallback } from 'react';
import { useQuery } from 'react-query';
import './LabelClassification.css';
import LabelClassTypeTab from '../LabelClassTypeTab/index';

interface IData {
  [key: string]: string | boolean;
}

type tabEvent = React.ChangeEvent<MouseEvent>;
interface ItagType extends IData {
  label: string;
  value: string;
  chose?: boolean;
}
type queryType = { isLoading: boolean; error: Error; data: any };

const LabelClassification: FC<ItagType> = (): JSX.Element => {
  const { isLoading, error, data }: queryType = useQuery(
    'repoData',
    // eslint-disable-next-line comma-dangle
    () => fetch('/api/question/type').then((res) => res.json())
  );
  const [tagList, setList] = useState<ItagType[] | null>(null);
  const [tagType, setPropsType] = useState<string>('');
  // useQuery异步赋值
  useEffect(() => {
    if (data) {
      data.data.map((item: any) => (item.chose = false));
      setList(data.data);
    }
  }, [data]);

  //标签选中处理
  const setType = (e: tabEvent, key: number, val) => {
    setList(() => {
      return [...tagList].map((item, index) =>
        index === key ? { ...item, chose: true } : { ...item, chose: false }
      );
    });
    propTypeEmit(val);
  };

  const propTypeEmit = useCallback(
    (val) => {
      setPropsType(val);
    },
    [tagType]
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) return <h1>null of data</h1>;
  return (
    <div className="yd-LabelClassification">
      <div className="yd-tabItem-block">
        {tagList
          ? tagList.map((val: ItagType, key: number) => (
              <span
                key={key}
                className={`${val.chose ? 'yd-light' : 'yd-normal'} yd-tabItem`}
                onClick={() => setType(event, key, val)}
              >
                {val.label}
              </span>
            ))
          : null}
      </div>
      <LabelClassTypeTab value={tagType} />
    </div>
  );
};

export default LabelClassification;
