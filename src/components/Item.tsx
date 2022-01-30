import React from 'react';
import './Item.scss';
import '../styles/utils.scss';
import { useLocalStorage } from '../services/useLocalStorage';
import { off } from 'process';

interface ItemProps {
  id: number;
  onChange: Function;
  children: string;
}
function Item(props: ItemProps) {
  return (
    <div
      contentEditable="true"
      onChange={(event) => props.onChange(event, props.id)}
    >
      {props.children}
    </div>
  );
}

export default Item;
