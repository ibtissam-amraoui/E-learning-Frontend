import React, { Component } from "react";
import './SignUp.css';

export default class Reset extends Component{
constructor(props){
    super();
    this.state={
        email:"",
    };
    this.handleSubmit=this.handleSubmit.bind(this);
}
handleSubmit(e){
    e.preventDefault();
    const { email }=this.state;
    console.log(email);
    fetch("http://localhost:8000/forgetPassword",{
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
        if (data.status === "OK")
          alert("Check your email for the password reset link");
        });
        }
        render(){
      return(
        <div className="formm">
        <form onSubmit={this.handleSubmit}>
          <h3>Forgot Password</h3>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={(e)=>this.setState({email:e.target.value})}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
          <a href="/signup">Sign Up</a>
        </p>
          </form>
          </div>
    );
 }
}