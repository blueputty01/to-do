import React from 'react';
import './Item.scss';
import '../styles/utils.scss';
import { useLocalStorage } from '../services/useLocalStorage';
import { off } from 'process';

interface ItemProps {
  id: string;
  onChange: Function;
  onBlur: Function;
  placeholder?: string;
  value: string;
}
const Item = (props: ItemProps) => {
  return (
    <div className="item">
      <input type="checkbox" />
      <input
        type="text"
        placeholder={props.placeholder}
        onBlur={(event) =>
          props.onBlur(props.id, (event.target as HTMLInputElement).value)
        }
        onChange={(event) =>
          props.onChange(props.id, (event.target as HTMLInputElement).value)
        }
        value={props.value}
      ></input>
    </div>
  );
};

export default Item;
