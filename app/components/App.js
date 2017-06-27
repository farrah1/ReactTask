import React from 'react';
import List from './List';
import Input from './Input';
import Button from './Button';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      listName: '',
    }
  }

  handleChange(e) {
    this.setState({listName: e});
  }

  handleClick(){
    <AddList name={this.state.listName} />

  }

  render() {
    return (
      <div>
        <Input type="text" value='Create new list...' onChange={this.handleChange} />
        <Button onClick={this.handleClick} value="+" />
      </div>
      )
    }
};

class AddList extends React.Component {
   render() {
     console.log('hi');
     <div className='List'>
       <h3>{this.props.name}</h3>
       <List />
     </div>
   }
};

export default App;
