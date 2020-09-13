import React, { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import './LabelClassification.css';

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

const LabelClassification: FC<ItagType> = () => {
  const { isLoading, error, data }: queryType = useQuery(
    'repoData',
    // eslint-disable-next-line comma-dangle
    () => fetch('/api/question/type').then((res) => res.json())
  );
  const [tagList, setList] = useState<ItagType[] | null>(null);
  useEffect(() => {
    if (data) {
      data.data.map((item: any) => (item.chose = false));
      setList(data.data);
    }
  }, [data]);
  const setType = (e: tabEvent, key: number) => {
    setList(() => {
      return [...tagList].map((item, index) =>
        index === key ? { ...item, chose: true } : { ...item, chose: false }
      );
    });
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) return <h1>你的数据木得了</h1>;
  return (
    <div className="LabelClassification">
      {tagList
        ? tagList.map((val: ItagType, key: number) => (
            <span
              key={key}
              className={`${val.chose ? 'light' : 'normal'} tabItem`}
              onClick={() => setType(event, key)}
            >
              {val.label}
            </span>
          ))
        : null}
    </div>
  );
};

export default LabelClassification;
