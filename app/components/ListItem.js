import React from 'react';
import update from 'react-addons-update';
import Button from './Button';
import Selection from './Selection';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.saveNew = this.saveNew.bind(this);
    this.state = {
      editing: false,
    }
  }

  deleteItem(e) {
    this.props.onDelete(e);
  }

  toggleEditing() {
    this.setState({editing: true});
  }

  saveNew(e) {
    this.props.onChange(e);
    this.setState({editing: false});
  }

  render(item) {
    if (this.state.editing) {
      return (
        <div>
          <Selection onChange={this.saveNew.bind(this)} keys={this.props.item.key} />
        </div>
      )
    }
    else {
    var item = this.props.item;
      return <li id={'key-'+item.key} className={"list-item-"+item.priority}>{item.input}<Button  onClick={this.deleteItem.bind(this, item)} value="Delete" /><Button onClick={this.toggleEditing.bind(this, item)} value="Edit" /></li>
      }
    }
};

export default ListItem;
