import React from 'react';
import './Item.scss';

export default class Item extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.FormEvent) {
    this.setState({ value: (event.target as HTMLInputElement).value });
  }

  render() {
    return (
      <input
        type="text"
        value={(this.state as HTMLInputElement).value}
        onChange={this.handleChange}
      />
    );
  }
}
