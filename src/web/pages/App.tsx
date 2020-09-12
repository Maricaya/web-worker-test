import React from 'react';
import routes from '@routes/index';
import { BrowserRouter as Router } from 'react-router-dom';
// import { useRootData } from 'web/tools/useRootData';
import Banner from '@components/Banner';


const App = () => {
//   const token = useRootData((store) => store.home.token);
  return (
    // <StoreProvider>
    <>
        <Banner></Banner>
        <h1>hello world</h1>
        <Router basename="/" >每日一题</Router>
        <Router basename="/history">历史题目</Router>
        <Router basename="/hot">热门题目</Router>
    </>
    // </StoreProvider>
  );
};
export default App;
