import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      enabledSubmit: false,
    };
  }

  handleChangeUsername = (event) => {
    const username = event.target.value;
    const password = this.state.password;
    this.setState({
      username: username,
      enabledSubmit: password.length > 0 && username.length > 0,
    });
  };

  handleChangePassword = (event) => {
    const username = this.state.username;
    const password = event.target.value;
    this.setState({
      password: password,
      enabledSubmit: password.length > 0 && username.length > 0,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // onSubmit(this.state.username, this.state.password);
  };

  render() {
    return (
      <div>
        <label>
          <span> User name: </span>
          <input type='text' name='name' id='username-input' value={this.state.username} onChange={this.handleChangeUsername} />
        </label>
        <br />
        <br />
        <label>
          <span> Password </span>
          <input type='password' name='name' id='password-input' value={this.state.password} onChange={this.handleChangePassword} />
        </label>
        <br />
        <br />
        <button type='submit' value='Login' id='login-button' disabled={!this.state.enabledSubmit} onClick={this.handleSubmit}>
          Login
        </button>
      </div>
    );
  }
}

export default LoginForm;
