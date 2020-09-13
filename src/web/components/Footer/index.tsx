import React, { FC } from 'react';
import './Footer.css';

const Footer: FC = () => {
  return (
    <div className="yd-components-footer">
      <div className="copyRight">
        <nav className="yd-footer-nav">
          <span>👬友情链接</span>
          <a href="http://www.css88.com" target="_block">
            CSS88
          </a>
          <a href="http://www.zhangxinxu.com" target="_block">
            张鑫旭博客
          </a>
          <a href="http://www.w3cplus.com" target="_block">
            大漠博客
          </a>
          <a href="http://www.ruanyifeng.com" target="_block">
            阮一峰博客
          </a>
          <a href="https://ke.qq.com/" target="_block">
            腾讯课堂
          </a>
          <a href="/users/login" target="_block">
            学习系统入口
          </a>
        </nav>
        <p>
          Copyright © 2016 yidengxuetang.com All Rights
          Reversed.京ICP备16022242号-1
        </p>
      </div>
    </div>
  );
};
export default Footer;
