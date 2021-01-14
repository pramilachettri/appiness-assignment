import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { USER_EMAIL, USER_PASSWORD } from '../../utils/constants';

class Login extends Component {
  state = {
    username:"",
    password:"",
    submitted: false
  }

  onChangeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  formSubmitHandler = (event) => {    
    event.preventDefault();
    this.setState({ submitted: true });
    const userInputData = {
      username: this.state.username,
      password: this.state.password,
    };

    const userData = {
      username: USER_EMAIL,
      password: USER_PASSWORD,
    };

    if(JSON.stringify(userData) === JSON.stringify(userInputData)) {
      localStorage.setItem('userEmail', JSON.stringify(userData.username));
      this.props.history.push('/');
    };
  }

  
  render() {
    const { username, password, submitted } = this.state;
    const { onChangeHandler, formSubmitHandler} = this;
    return (
      <div className="login">
        <div className="container">
          <form className="form" onSubmit={formSubmitHandler}>
            <h2>Please login here</h2>

            <div className="form-control">
              <label>Username</label>
              <input 
                type="email" required
                placeholder="Enter username" 
                value={username} 
                onChange={onChangeHandler}
                name="username"
              />
              {submitted && username && username !== USER_EMAIL &&
                <div className="help-block">Username does not match</div>
              }
            </div>

            <div className="form-control">
              <label>Password</label>
              <input 
                type="password" required
                placeholder="Enter password" 
                value={password} 
                onChange={onChangeHandler}
                name="password"
              />
              {submitted && password && password !== USER_PASSWORD &&
                <div className="help-block">Password does not match</div>
              }
            </div>
            <button type="submit">Login</button>
          </form>
      </div>
      </div>
    )
  }
};
export default withRouter(Login);
