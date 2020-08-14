import React from 'react';
import SidebarItem from './SidebarItem';

const index = ({ name, badge, active }) => {
  return <SidebarItem name={name} badge={badge} active={active} />;
};

export default index;
