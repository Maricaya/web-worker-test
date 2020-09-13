import * as React from 'react';
import { Route, Switch, RouteProps, Redirect } from 'react-router-dom';
import Daily from '@components/DailyQuestion';
import Loading from '@components/Loading';
// import { string } from "prop-types";
import LabelClassification from '@components/LabelClassification/index';
const { lazy, Suspense } = React;

const History = lazy(() =>
  import(/* webpackChunkName:"demo" */ '@components/HistoryQuestion')
);
const Hot = lazy(() =>
  import(/* webpackChunkName:"login" */ '@components/HotQuestion')
);
interface YDProps extends RouteProps {
  auth?: boolean;
<<<<<<< HEAD
  name: string;
=======
  title?:string;
>>>>>>> e14b7502f8d7c28b5f2f9202418b1c868793be6c
}
export const routeLists: YDProps[] = [
  {
    path: '/',
    exact: true,
    component: Daily,
    name: '每日一题',
    auth: true,
    title: '每日一题'
  },
  {
    path: '/history',
    name: '历史题目',
    exact: true,
    component: History,
    title: '历史题目'
  },
  {
    path: '/hot',
    name: '热门题目',
    exact: true,
    component: Hot,
    title: '热门题目'
  },
  {
    path: '/LabelClassification',
    name: '类库专题',
    exact: true,
    component: LabelClassification,
  },
];

// 对状态属性进行监听
const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routeLists.map((r, index) => {
        console.log('🍊', index);
        const { path, exact, component } = r;
        const LazyCom = component;
        return (
          <Route
            key={index}
            path={path}
            exact={exact}
            render={(props) => <LazyCom {...props} />}
          />
        );
      })}
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Suspense>
);

export default Routes;
