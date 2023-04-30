//import Navbar from "../components/Navbar";
import {React, Component} from "react";
import Sidebar from "../components/Sidebar";
import './Teacher.css';



 class Teacher  extends Component{

  // logout handler function
  userLogout() {
    localStorage.removeItem('token');
    window.location.href = "./login";
  }

      componentDidMount(){
        /*if (localStorage.getItem('token')) {
          this.props.history.push('/teacher');
        }*/
            fetch("http://localhost:8000/teacherSpace", {
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
       <h1>Welcome Teacher</h1>
       <button onClick={this.userLogout}>Logout</button>
      </Sidebar>
    </>
    );
}
}
export default Teacher;
