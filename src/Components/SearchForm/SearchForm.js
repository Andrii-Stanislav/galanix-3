import React, { useState } from 'react';

import styles from './SearchForm.module.css';

export default function SearchForm({ onSearch, onReset }) {
  const [search, setSearch] = useState('');

  const heandleSubmit = event => {
    event.preventDefault();
    onSearch(search);
    setSearch('');
  };

  return (
    <>
      <form className={styles.form} onSubmit={heandleSubmit}>
        <input value={search} onChange={v => setSearch(v.target.value)} />
        <button type="submit">Отправить</button>
        <button type="button" onClick={onReset}>
          Сброс
        </button>
      </form>
    </>
  );
}
