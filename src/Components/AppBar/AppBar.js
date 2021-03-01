import React from 'react';

import styles from './AppBar.module.css';

export default function AppBar({ children }) {
  return <header className={styles.header}>{children}</header>;
}
