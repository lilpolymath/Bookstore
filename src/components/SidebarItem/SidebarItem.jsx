import React from 'react';
import styles from './SidebarItem.module.css';

const SidebarItem = ({ name, badge = '', active = false }) => {
  return (
    <div className={styles.sidebar_item}>
      <p className={styles.mv_8}>{name}</p>
      {badge && (
        <p
          className={`${styles.notification_count} ${active &&
            styles.notification_active}`}
        >
          {badge}
        </p>
      )}
    </div>
  );
};

export default SidebarItem;
