import React, { useState } from 'react';

import AppBar from './Components/AppBar';
import SearchForm from './Components/SearchForm';
import UserBar from './Components/UserBar';
import Table from './Components/Table';

import './App.css';

import fetchUniversities from './services/fetchUniversities';

export default function App() {
  const [universities, setUniversities] = useState([]);

  const getHeandleRequest = country => {
    fetchUniversities(country).then(searchUniversities =>
      setUniversities(searchUniversities),
    );
  };

  const resetUniversities = () => {
    setUniversities([]);
  };

  return (
    <div className="main-container">
      <AppBar>
        <SearchForm onSearch={getHeandleRequest} onReset={resetUniversities} />
        <UserBar />
      </AppBar>
      {universities.length > 0 && <Table universities={universities} />}
    </div>
  );
}
