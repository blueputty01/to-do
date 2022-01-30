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
  //https://gist.github.com/gordonbrander/2230317?permalink_comment_id=3443509#gistcomment-3443509
  return (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    ''
  );
}

const List = () => {
  const empty: ItemList = {
    [uid()]: { value: '✏️ start taking notes...', checked: false },
  };
  let [items, setItems] = useLocalStorage('items', empty);

  const handleFieldChange = (id: string, change: string | boolean) => {
    if (typeof change === 'string') {
      items[id].value = change;
      setItems({ ...items });
    } else {
      items[id].checked = change;
      setItems({ ...items });
    }
  };

  const createNew = (id: string, value: string) => {
    setItems({ ...items, [uid()]: { value: '', checked: false } });
  };

  const itemEles = Object.entries(items).map(([key, dat]) => {
    const castedDat = dat as ItemData;

    return (
      <Item
        key={key}
        id={key}
        checked={castedDat.checked}
        onEnter={createNew}
        onChange={handleFieldChange}
        value={castedDat.value}
      ></Item>
    );
  });

  return <div>{itemEles}</div>;
};

export default List;
