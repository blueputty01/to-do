import React from 'react';
import Adder from './Adder';
import List from './List';
import './App.scss';

export default function App() {
  return (
    <React.Fragment>
      <Adder></Adder>
      <List></List>
    </React.Fragment>
  );
}
