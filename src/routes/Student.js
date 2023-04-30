//import Navbar from "../components/Navbar";
import {React, Component} from "react";
import Sidebar from "../components/Sidebar";
import './Teacher.css'
export default class Teacher  extends Component{
      componentDidMount(){
            fetch("http://localhost:8000/studentSpace", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "teacher space");
      });
      }
      render(){
    return(
    <>
      <Sidebar>
      <h1>Welcome Student</h1>
      </Sidebar>
    </>
    );
}
}