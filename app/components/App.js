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
    if (e.key != undefined) {
      console.log('this is an edit')
    }
    else {
    this.state.list.push(e);
    //add a key to each object
    for (var i=0; i<this.state.list.length; i++) {
      var obj = this.state.list[i];
      obj['key']= i.toString()
    }
    }

    //sort the array of list items by priority
    var newList = this.state.list.slice();

    newList.sort(function(a, b) {
      //from high to low priority
      return a.priority - b.priority || a.key - b.key;
      });

    // console.log(newList)
    // console.log(this.state.list)
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
            return <List item={item} key={item.key} onChange={this.handleClick} onDelete={this.deleteItem}/>
          }, this)}
        </ul>
      </div>
      )
  }
};

export default App;
