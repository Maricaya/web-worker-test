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
  name: string;
}
export const routeLists: YDProps[] = [
  {
    path: '/daily',
    exact: true,
    component: Daily,
    name: '每日一题',
    auth: true,
  },
  {
    path: '/history',
    name: '历史题目',
    exact: true,
    component: History,
  },
  {
    path: '/hot',
    name: '热门题目',
    exact: true,
    component: Hot,
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
