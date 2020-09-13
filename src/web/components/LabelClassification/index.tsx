import React, { FC } from 'react';
import { useQuery } from 'react-query';

interface IData {
  [key: string]: string;
}
interface ItagType extends IData {
  label: string;
  value: string;
}
const LabelClassification: FC<ItagType> = () => {
  const {
    isLoading,
    error,
    data,
  }: { isLoading: boolean; error: Error; data: IData } = useQuery(
    'repoData',
    // eslint-disable-next-line comma-dangle
    () => fetch('/api/question/type').then((res) => res.json())
  );
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) return <h1>你的数据木得了</h1>;
  return (
    <div>
      {data.data.map((val: ItagType, key) => (
        <span key={key} className="">
          {val.label}
        </span>
      ))}
    </div>
  );
};

export default LabelClassification;
