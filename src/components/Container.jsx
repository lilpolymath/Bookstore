import * as React from 'react';

import styles from './Container.module.css';

export default function Container({ children, as = 'div', ...props }) {
  const Component = as;

  const style = styles.container;

  return (
    <Component style={props.style} className={style}>
      <div className={styles.wrapper}>{children}</div>
    </Component>
  );
}
