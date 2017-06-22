import React from 'react';
import List from './List';
import Input from './Input';
import Button from './Button';

class AddList extends React.Component {
  render() {
    <div className='List'>
      <h1>{this.state.listName}</h1>
      <List />
    </div>
  }
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      listName: ''
    }
  }

  handleChange(e) {
    this.setState({listName: e});
  }

  render() {
    return (
      <div>
        <Input type="text" value='Create new list...' onChange={this.handleChange} />
        <Button onClick={new AddList } value="+" />
      </div>
      )
  }
};

export default App;
