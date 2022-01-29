import { useLocalStorage } from '../services/useLocalStorage';
import React from 'react';

//getting state https://stackoverflow.com/questions/27864951/how-to-access-a-childs-state-in-react/27875018#27875018

const List = (props) => {
  const [list, setList] = useLocalStorage('list', '');

  const handleFieldChange = (itemId, value) => {
    setList({ ...list, [itemId]: value });
  };

  const fields = props.fields.map((field) => (
    <FieldEditor
      key={field}
      id={field}
      onChange={handleFieldChange}
      value={values[field]}
    />
  ));

  return <div>{fields}</div>;
};

export default List;
