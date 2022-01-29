import React from 'react';
import './Item.scss';
import '../styles/utils.scss';
import { useLocalStorage } from '../services/useLocalStorage';

interface ItemProps {
  placeholder?: string;
}
export default class Item extends React.Component<ItemProps> {
  state = {
    value: '',
  };

  handleChange = (event: React.FormEvent) => {
    this.setState({ value: (event.target as HTMLInputElement).value });
  };

  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        value={(this.state as HTMLInputElement).value}
        onChange={this.handleChange}
      />
    );
  }
}


