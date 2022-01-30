import React from 'react';
import List from './List';
import './App.scss';
import Clear from './ClearStorage';

export default function App() {
  return (
    <main>
      <List></List>
      <Clear></Clear>
    </main>
  );
}
