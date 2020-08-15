import React from 'react';
import SidebarItem from '../SidebarItem/SidebarItem';
import styles from './SidebarSection.module.css';

const SidebarSection = () => {
  return (
    <div className={styles.section}>
      <p className={styles.section_header}>Explore</p>
      <SidebarItem name='Books' badge='175' />
      <SidebarItem name='Genres' badge='42' />
      <SidebarItem name='Authors' badge='106' />
    </div>
  );
};

export default SidebarSection;
