import React, { FC, useEffect, useState, useRef } from 'react';
import { useQuery } from 'react-query';
import './LabelClassification.css';
import LabelClassTypeTab from '../LabelClassTypeTab/index';

interface IData {
  [key: string]: string | boolean;
}
const mockData = [
  {
    label: '全部',
    value: 'all',
    chose: true,
  },
  {
    label: 'html',
    value: 'html',
    chose: false,
  },
  {
    label: 'js',
    value: 'js',
    chose: false,
  },
  {
    label: 'css',
    value: 'css',
    chose: false,
  },
  {
    label: 'vue',
    value: 'vue',
    chose: false,
  },
  {
    label: 'react',
    value: 'react',
    chose: false,
  },
  {
    label: 'node',
    value: 'node',
    chose: false,
  },
  {
    label: '工程化',
    value: 'webpack',
    chose: false,
  },
  {
    label: '网络安全',
    value: 'internet',
    chose: false,
  },
  {
    label: '算法',
    value: 'suanfa',
    chose: false,
  },
  {
    label: '编程',
    value: 'coding',
    chose: false,
  },
  {
    label: '其他',
    value: 'other',
    chose: false,
  },
];
type tabEvent = React.ChangeEvent<MouseEvent>;
interface ItagType extends IData {
  label: string;
  value: string;
  chose?: boolean;
}
type queryType = { isLoading: boolean; error: Error; data: any };

const LabelClassification: FC<ItagType> = (): JSX.Element => {
  // const getQuery = useCallback(() => {

  // });

  const [tagList, setList] = useState<ItagType[] | null>(null);
  const [tagType, setPropsType] = useState<string>('');
  // useQuery异步赋值
  // const { isLoading, error, data }: queryType = useQuery(
  //   'repoData',
  //   // eslint-disable-next-line comma-dangle
  //   () => fetch('/api/question/type').then((res) => res.json())
  // );
  useEffect(() => {
    // fetch('/api/question/type')
    //   .then((res) => res.json())
    //   .then((res) => {
    //     res.data.map((item: any) => (item.chose = false));
    //     setList(res.data);
    //   });
    setList(mockData);
  }, []);
  const a = useRef<string>(''); // 阻止相同标签导致重复渲染
  const propTypeEmit = (val) => {
    a.current = val.value;
    setPropsType(val);
  };

  //标签选中处理
  const setType = (e: tabEvent, key: number, val) => {
    setList(() => {
      return [...tagList].map((item, index) =>
        index === key ? { ...item, chose: true } : { ...item, chose: false }
      );
    });
    if (a.current === val.value) return;
    propTypeEmit(val);
  };

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  // if (error) return <h1>null of data</h1>;
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
