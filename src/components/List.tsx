import { useLocalStorage } from '../services/useLocalStorage';
import React from 'react';
import Item from './Item';
import { generateKey } from 'crypto';

interface ItemData {
  value: string;
  checked: boolean;
}

interface ItemList {
  [key: string]: ItemData;
}

function uid() {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    ''
  );
}

//https://gist.github.com/gordonbrander/2230317?permalink_comment_id=3443509#gistcomment-3443509
const List = () => {
  const addName = 'add';
  const addDefault = { value: '✏️ start taking notes...', checked: false };

  const empty: ItemList = {
    [addName]: addDefault,
  };
  const [items, setItems] = useLocalStorage('items', empty);

  const handleFieldChange = (id: string, value: string) => {
    const newObj: ItemData = { value: value, checked: false };
    setItems({ ...items, [id]: newObj });
  };

  const onBlur = (id: string, value: string) => {
    if (id === addName) {
      console.log('bro');

      setItems({
        ...items,
        [addName]: addDefault,
        [uid()]: { value: value, checked: false },
      });
    }
  };

  console.log(items);

  const itemEles = Object.entries(items).map(([key, dat]) => {
    const castedDat = dat as ItemData;
    return (
      <Item
        key={key}
        id={key}
        onChange={handleFieldChange}
        onBlur={onBlur}
        value={castedDat.value}
      ></Item>
    );
  });

  return <div>{itemEles}</div>;
};

export default List;
