import React, { FC } from 'react';
import { routeLists } from '@routes/index';
import { Link } from 'react-router-dom';
import './NavList';

const NavList: FC = () => {
  return (
    <div className="questionBank-navBar">
      {routeLists.map((item, index) => {
        return (
          <div key={index}>
            <Link to={item.path as string} className="navItem">
              {item.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavList;
