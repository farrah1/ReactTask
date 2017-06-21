import React from 'react';
import update from 'react-addons-update';
import Input from './Input';
import Priority from './Priority';
import Button from './Button';

class Selection extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      input: '',
      priority: '2',
      item: {
        input: 'Add item to list...',
        priority: '2',
      },
    };
  }

  handleChange(e) {
    this.setState({input: e});
  }

  handlePriorityChange(e) {
    this.setState({priority: e});
  }

  handleClick() {
    var newItem = update(this.state.item, {$set: {input: this.state.input, priority: this.state.priority}});
    this.props.onChange(newItem);
  }

  render() {
    return (
      <div>
        <Input type="text" value={this.state.item.input} onChange={this.handleChange} />
        <Priority onChange={this.handlePriorityChange} />
        <Button onClick={this.handleClick} value="+" />
      </div>
      )
  }
};

export default Selection;
