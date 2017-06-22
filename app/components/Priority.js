import React from 'react';

class Priority extends React.Component {
  //when a user sets a priority, add that item to the designated ul by changing its id (see if this is possible)

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    var prty = e.target.value;
    this.props.onChange(prty);
  }

  render() {
    return (
      <select id="priority" onChange={this.handleChange} >
          <option value="0">
            High
          </option>

          <option value="1">
            Medium
          </option>

          <option value="2">
            Low
          </option>
      </select>
    )
  }
};

export default Priority;
