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
      list: [],
      listSorted: []
    };
  }

  handleClick(e) {
    console.log(e)
    this.state.list.push(e);
    //sort the array of list items by priority
    var newList = this.state.list;
    var sortedList = newList.sort(function(obj1, obj2) {
      //from high to low priority
      return obj2.priority - obj1.priority;
      });
    var finalList=[];
    for (var i=0; i<sortedList.length; i++) {
      finalList.push(sortedList[i].push('key:'+i));//******FIX THIS******
    }
    console.log(finalList)
    this.setState({listSorted: sortedList});
  }

  deleteItem(e) {
    var list = this.state.list;
      if (list.indexOf(e) > -1) {
      list.splice(list.indexOf(e), 1);
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
