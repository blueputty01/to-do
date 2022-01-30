import React from 'react';
import './Item.scss';
import '../styles/utils.scss';
import { useLocalStorage } from '../services/useLocalStorage';
import { off } from 'process';

interface ItemProps {
  id: string;
  onChange: Function;
  onBlur: React.FocusEventHandler;
  placeholder?: string;
  value: string;
}
const Item = (props: ItemProps) => {
  return (
    <input
      contentEditable="true"
      placeholder={props.placeholder}
      onBlur={props.onBlur}
      onChange={(event) =>
        props.onChange(props.id, (event.target as HTMLInputElement).value)
      }
      value={props.value}
    ></input>
  );
};

export default Item;
