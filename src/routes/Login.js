import React, { Component } from 'react';
import './SignUp.css';
import Footer from '../components/Footer';
export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      rememberMe: false,
      wrongEmail: false
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { email, password, wrongEmail } = this.state;
  
    fetch("http://localhost:8000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
        wrongEmail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
  
        if (data.status === "OK") {
          alert("Login successful");
          window.localStorage.setItem("token", data.data.token);
          window.localStorage.setItem("loggedIn", true);
          if (data.data.role === "student") {
            window.location.href = "./student";
          } else if (data.data.role === "teacher") {
            window.location.href = "./teacher";
          }else if (data.data.role === "admin") {
            window.location.href = "./admin";
          }
        }
          else if (data.status === "error" && data.message === "User not found") {
            this.setState({ wrongEmail: true });
          }
         else{
        }
      });
  }
  render() {
    const { email, password, rememberMe} = this.state;
    return (
      <>
      <div className="formm">
        <form onSubmit={this.handleSubmit}>
          <h3>Login</h3>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e)=>this.setState({email:e.target.value})}
            />
          </div>
          <div>
          {this.state.wrongEmail && (
          <p style={{ color: "red" }}>Invalid email address.</p>
        )}
        </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={password}
              onChange={(e)=>this.setState({password:e.target.value})}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                name="rememberMe"
                checked={rememberMe}
                onChange={this.handleInputChange}
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Log in
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="./reset">password?</a>
          </p>
          <div style={this.state.errorMessageStyle}>{this.state.errorMessage}</div>
          <p className="forgot-password text-right">
          You don't have an account ?<a href="/signup">Sign Up</a>
        </p>
        </form>
      </div>
      <Footer /> 
    </>
    );
  }
}