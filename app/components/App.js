import React from 'react';
import update from 'react-addons-update';
import Button from './Button';
import List from './List';
import Selection from './Selection';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getItem = this.getItem.bind(this);
    this.state = {
      item: [],
      list: [],
      listSorted: []
    };
  }

  handleClick(e) {
    this.setState({item: e});
    var newItem = this.state.item;
    this.state.list.push(newItem);

    //sort the array of list items by priority
    var newList = this.state.list;
    var sortedList = newList.sort(function(obj1, obj2) {
      //from high to low priority
      return obj2.priority - obj1.priority;
      })
    this.setState({listSorted: sortedList});
  }

  getItem(e) {
  }

  render() {
    return (
      <div>
        <Selection onChange={this.handleClick} />
        <ul>
          {this.state.listSorted.map(function(item){
            return <List item={item} onChange={this.handleClick}/>
          }, this)}
        </ul>
      </div>
      )
  }
};

export default App;
