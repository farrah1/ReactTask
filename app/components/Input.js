import React from 'react';

class Input extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
  var input = e.target.value;
  this.props.onChange(input);
  }

  render() {
    return (
      <input type="text" defaultValue={this.props.value} onChange={this.handleChange} />
    )
  }
};
export default Input;
