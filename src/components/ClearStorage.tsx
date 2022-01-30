import React from 'react';
import { clear } from '../services/useLocalStorage';

export default function Clear() {
  return <button onClick={clear}>Remove All</button>;
}
