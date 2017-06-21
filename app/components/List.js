import React from 'react';
import update from 'react-addons-update';
import Button from './Button';
import Selection from './Selection';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      newItem: [],
      item: []
    }
    this.toggleEditing = this.toggleEditing.bind(this);
    this.toggleSave = this.toggleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  deleteItem(e) {
  this.setState({newItem: true})
  }

  toggleEditing() {
    this.setState({editing: true});
  }

  toggleSave() {
    this.props.onChange(this.state.newItem)
    this.setState({editing: false});
  }

  handleChange(e) {
    this.setState({newItem: e});
  }

  render(item) {
    if (this.state.editing) {
      return (
        <div>
          <Selection onChange={this.handleChange}/>
          <Button onClick={this.toggleSave.bind(this)} value="Save" />
        </div>
      )
    }
    else {
    var item = this.props.item;
      return <li className={"list-item-"+item.priority}>{item.input}<Button  onClick={this.deleteItem.bind(this, item)} value="Delete" /><Button onClick={this.toggleEditing.bind(this, item)} value="Edit" /></li>
      }
    }
};

export default List;
