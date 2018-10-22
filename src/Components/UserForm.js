import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    name: this.props.name || '',
    username: this.props.username || '',
    password: this.props.password ||  '',
    }

    onChange = e => {
      const elementInState = e.target.name;
      const value = e.target.value;
      this.setState({ [elementInState]: value })
    }

  render() {
    const { name, username, password } = this.state;
    return (
       <div className="noteform">
         <p>Name:</p> <input name="name" value={title} onChange={(e) => this.onChange(e)}/>
         <p>Username:</p> <input name="username" value={due_date} onChange={this.onChange}/>
         <p>Password:</p> <input name="password" value={color} onChange={this.onChange}/>
         <p>Confirm Password:</p> <textarea name="text" value={text} onChange={this.onChange}/>
         <button class='button small' onClick={() => this.props.submitForm({...this.state})}>Sign up!</button>
       </div>
    );
  }
}

export default UserForm;