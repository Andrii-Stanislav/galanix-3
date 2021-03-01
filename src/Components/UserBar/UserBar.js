import React from 'react';
import { useSelector } from 'react-redux';

import { getUserChoice } from '../../redux/userChoice/userChoice';

import styles from './UserBar.module.css';

export default function UserBar() {
  const userChoice = useSelector(getUserChoice);

  return (
    <div className={styles.container}>
      <span>
        {userChoice.length > 0 ? userChoice.length : 0} choicen universities
      </span>
    </div>
  );
}
