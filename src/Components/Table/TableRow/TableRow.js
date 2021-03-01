import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addToChoice,
  removeChoice,
  getUserChoice,
} from '../../../redux/userChoice/userChoice';

import styles from '../Table.module.css';

export default function TableRow({ number, name, web_pages, country }) {
  const userChoice = useSelector(getUserChoice);

  const [check, setCheck] = useState(() => {
    return userChoice.some(univer => univer.name === name);
  });

  const dispatch = useDispatch();

  const heandleCheck = () => {
    switch (check) {
      case true:
        dispatch(removeChoice(name));
        break;
      case false:
        dispatch(addToChoice({ number, name, web_pages, country }));
        break;
      default:
    }
    setCheck(prevCheck => !prevCheck);
  };

  return (
    <tr>
      <td className={styles.td}>{number}</td>
      <td className={styles.td}>
        <a href={web_pages} target="_blank" rel="noreferrer">
          {name}
        </a>
      </td>
      <td className={styles.td}>{country}</td>
      <td className={styles.td}>
        <input
          checked={check}
          type="checkbox"
          onChange={heandleCheck}
          value={check}
        ></input>
      </td>
    </tr>
  );
}
