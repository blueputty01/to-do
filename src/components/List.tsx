import { useLocalStorage } from '../services/useLocalStorage';
import React from 'react';
import Item from './Item';

//getting state https://stackoverflow.com/questions/27864951/how-to-access-a-childs-state-in-react/27875018#27875018

const List = () => {
  const [list, setList] = useLocalStorage('list', []);

  const handleFieldChange = (itemId: number, value: string) => {
    setList({ ...list, [itemId]: value });
  };

  console.log(list);

  return (
    <div>
      {list.map((itemData: string, index: number) => {
        <Item id={index} onChange={handleFieldChange}>
          itemData
        </Item>;
      })}
    </div>
  );
};

export default List;
