import React, { Component } from 'react';
import  './SignUp.css';
export default class TeachOn extends Component {
  
  constructor(props){
super(props)
this.state={
fname:"",
lname:"",
email:"",
password:"",
    };
    
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const{fname,lname,email,password}=this.state;
    console.log(fname,lname,email,password);
    fetch("http://localhost:8000/register-teacher", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "OK") {
          alert("Registration Successful");
        } else {
          alert("Something went wrong");
        }
  }
      )}
  render() {
    return (
      <div className='formm'>
      <form onSubmit={this.handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e)=>this.setState({fname:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Last name" 
          onChange={(e)=>this.setState({lname:e.target.value})}/>
         
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>this.setState({email:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>this.setState({password:e.target.value})}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered ?<a href="/login">Login</a>
        </p>
      </form>
      </div>
    )
   
  }
}
