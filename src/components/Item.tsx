import React from 'react';
import './Item.scss';
import '../styles/utils.scss';
interface ItemProps {
  id: string;
  checked: boolean;
  onChange: Function;
  onEnter: Function;
  placeholder?: string;
  value: string;
}
const Item = (props: ItemProps) => {
  return (
    <div className={['item', props.checked ? 'checked' : ''].join(' ')}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={(event) => {
          props.onChange(props.id, (event.target as HTMLInputElement).checked);
        }}
      />
      <input
        type="text"
        placeholder={props.placeholder}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            props.onEnter(props.id, (event.target as HTMLInputElement).value);
          }
        }}
        onChange={(event) =>
          props.onChange(props.id, (event.target as HTMLInputElement).value)
        }
        value={props.value}
      ></input>
    </div>
  );
};

export default Item;
