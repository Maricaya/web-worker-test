import * as React from 'react';
import { Route, Switch, RouteProps, Redirect } from 'react-router-dom';
import Daily from '@pages/dailyQuestion';
import Loading from '@components/Loading';
// import { string } from "prop-types";
import LabelClassification from '@pages/LabelClassification';
const { lazy, Suspense } = React;

const History = lazy(() =>
  import(/* webpackChunkName:"History" */ '@pages/historyQuestion')
);
const Hot = lazy(() =>
  import(/* webpackChunkName:"Hot" */ '@pages/hotQuestion')
);
const QuestionDetail = lazy(() =>
  import(/* webpackChunkName:"QuestionDetail"*/ '@pages/QuestionDetail')
);

interface YDProps extends RouteProps {
  auth?: boolean;
  name: string;
  loadData?: any;
  hideNav?: boolean;
}
export const routeLists: YDProps[] = [
  {
    path: '/daily',
    exact: true,
    component: Daily,
    name: '每日一题',
    auth: true,
    loadData: Daily.getData,
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
    path: '/labelClassification',
    name: '类库专题',
    exact: true,
    component: LabelClassification,
  },
  {
    path: '/questionDetail/:uid/:qid/:title',
    name: '题目详情',
    exact: true,
    component: QuestionDetail,
    hideNav: true,
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
      <Redirect from="/" to="/daily" />
    </Switch>
  </Suspense>
);

export default Routes;
