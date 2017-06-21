import React from 'react';
import update from 'react-addons-update';
import Button from './Button';
import List from './List';
import Selection from './Selection';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {
      item: [],
      list: [],
      listSorted: []
    };
  }

  handleClick(e) {
    console.log(e)
    this.setState({item: e});
    this.state.list.push(e);

    //sort the array of list items by priority
    var newList = this.state.list;
    var sortedList = newList.sort(function(obj1, obj2) {
      //from high to low priority
      return obj2.priority - obj1.priority;
      })
    this.setState({listSorted: sortedList});
  }

  deleteItem(e) {
    var updatedList = this.state.list;
      if (updatedList.indexOf(e) > -1) {
      updatedList.splice(updatedList.indexOf(e), 1);
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Selection onChange={this.handleClick} />
        <ul>
          {this.state.listSorted.map(function(item){
            return <List item={item} onChange={this.handleClick} onDelete={this.deleteItem}/>
          }, this)}
        </ul>
      </div>
      )
  }
};

export default App;
