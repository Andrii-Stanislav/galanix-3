import React from 'react';
import TableRow from './TableRow';

import styles from './Table.module.css';

export default function Table({ universities }) {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th>№</th>
          <th>University</th>
          <th>Country</th>
          <th>Save</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {universities.map((univer, index) => (
          <TableRow
            key={univer.name}
            number={index + 1}
            name={univer.name}
            web_pages={univer.web_pages}
            country={univer.country}
          />
        ))}
      </tbody>
    </table>
  );
}
