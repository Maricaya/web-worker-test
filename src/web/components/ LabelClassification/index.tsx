import { React } from 'react';
import { useQuery } from 'react-query';
type IData = {
  [key: string]: string;
};
const LabelClassification: React.FC = () => {
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
};

export default LabelClassification;
