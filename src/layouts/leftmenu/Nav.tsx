import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { TNav } from './nav.types';

const Nav = ({ to, children }: TNav) => {
  return <NavLink to={to}>{children}</NavLink>;
};

export default memo(Nav);
