import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: "",
    hometown:""
  }
  handleChange = (event, key) => {
    console.log(event.target.value)
    console.log(key)
    this.setState({
      [key]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
      username: this.state.username,
      hometown: this.state.hometown
      }
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username:</label>
          <input type="text" value={this.state.username} onChange={(event)=> {this.handleChange(event,'username')}}/><br></br>
          <label>Hometown:</label>
          <input type="text" value={this.state.hometown} onChange={(event)=> {this.handleChange(event,'hometown')}}/>

          <input type="submit" value='submit'/>

        </form>
      </div>
    );
  }
};

export default UserInput;
