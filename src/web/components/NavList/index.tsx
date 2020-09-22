import React, { FC } from 'react';
import { routeLists } from '@routes/index';
import { NavLink } from 'react-router-dom';
import './NavList';

const NavList: FC = () => {
  return (
    <div className="yd-questionBank-navBar">
      {routeLists.map((item, index) => {
        return (
          <div key={index}>
           {item?.hideNav?'':
           (<NavLink
              to={item.path as string}
              activeStyle={{ color: '#446d91' }}
              className="yd-navItem"
            >
            {item.name}
            </NavLink>)} 
          </div>
        );
      })}
    </div>
  );
};

export default NavList;
