import React from 'react';
import update from 'react-addons-update';
import Button from './Button';
import ListItem from './ListItem';
import Selection from './Selection';

class List extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.addToList = this.addToList.bind(this);
    this.sortArray = this.sortArray.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      list: [],
      listSorted: []
    };
  }

  handleClick(e) {
  //if a previous key is defined - means this is an edit to an existing list item
    if (e.key != undefined) {
      //find the object in the list array that is being editted (find same key)
      var arr=this.state.list;
      for (var i=0; i<arr.length; i++) {
        if (arr[i].key == e.key) {
          var item=arr[i];
            //if there was no change in priority...
            if (item.priority == e.priority) {
              //update only the input
              return item.input = e.input;
            }
            //if there was a change in priority...
            else {
              //remove the current object from the array
              this.deleteItem(item);
              //add the edit as a new item to the array and assign a new key value
              this.addToList(e);
            }
        }
      }
    }
    //if a key is not assigned - means this is a new added list item
    else {
      this.addToList(e);
    }
  }

  addToList(e) {
    this.state.list.push(e);
    //add a key to each object
    for (var i=0; i<this.state.list.length; i++) {
      var item = this.state.list[i];
      item['key'] = i.toString()
    }
    this.sortArray();
  }

  sortArray() {
    //sort the array of list items by priority
    var newList = this.state.list.slice();
    newList.sort(function(a, b) {
      //from high to low priority
      return a.priority - b.priority || a.key - b.key
      });
    this.setState({listSorted: newList});
  }

  deleteItem(e) {
    var list = this.state.list;
      if (list.indexOf(e) > -1) {
      list.splice(list.indexOf(e), 1);
      this.state.listSorted.splice(this.state.listSorted.indexOf(e), 1);
      }
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Selection onChange={this.handleClick} />
        <ul>
          {this.state.listSorted.map(function(item){
            return <ListItem item={item} key={item.key} onChange={this.handleClick} onDelete={this.deleteItem}/>
          }, this)}
        </ul>
      </div>
      )
  }
};

export default List;
