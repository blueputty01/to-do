import { useLocalStorage } from '../services/useLocalStorage';
import React from 'react';
import Item from './Item';

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
  const empty: ItemList = {
    add: { value: '✏️ start taking notes...', checked: false },
  };
  const [items, setItems] = useLocalStorage('items', empty);

  const handleFieldChange = (id: string, value: string) => {
    const newObj: ItemData = { value: value, checked: false };
    setItems({ ...items, [id]: newObj });
  };

  const onBlur = () => {};

  const itemEles = Object.entries(items).map(([key, dat]) => {
    const castedDat = dat as ItemData;
    return (
      <Item
        key={key}
        id={key}
        onChange={handleFieldChange}
        onBlur={}
        value={castedDat.value}
      ></Item>
    );
  });

  return <div>{itemEles}</div>;
};

export default List;
