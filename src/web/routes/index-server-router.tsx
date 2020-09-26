import * as React from 'react';
import { Route, Switch, RouteProps, Redirect } from 'react-router-dom';
import Daily from '@pages/dailyQuestion';
// import { string } from "prop-types";
import LabelClassification from '@pages/LabelClassification/index';

import History from '@pages/historyQuestion';
import Hot from '@pages/hotQuestion';
import QuestionDetail from '@pages/QuestionDetail';


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
    path: '/questionDetail',
    name: '题目详情',
    exact: true,
    component: QuestionDetail,
    hideNav: true,
  },
];

// 对状态属性进行监听
const Routes = () => (
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
      <Redirect from="/" to="/Daily" />
    </Switch>
);

export default Routes;
