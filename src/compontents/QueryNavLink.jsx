import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

function QueryNavLink(props) {
  const { to, ...rest } = props;
  const location = useLocation();
  return <NavLink to={to + location.search} {...rest} />;
}

export default QueryNavLink;
