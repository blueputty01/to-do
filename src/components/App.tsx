import React from 'react';
import List from './List';
import Item from './Item';
import './App.scss';

export default function App() {
  return (
    <main>
      <Item onChange={() => {}}>✏️ take a note</Item>
      <List></List>
    </main>
  );
}
