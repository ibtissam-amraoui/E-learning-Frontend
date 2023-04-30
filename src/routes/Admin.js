import SidebarAdmin from "../components/SidebarAdmin";
import {React, Component} from "react";
export default class Admin  extends Component{
      componentDidMount(){
            fetch("http://localhost:8000/adminSpace", {
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
        console.log(data, "admin space");
      });
      }
      render(){
    return(
    <>
    <SidebarAdmin>
      <div>  
            <h1> Welcome admin</h1>
      </div>
     </SidebarAdmin>
    </>
    );
}
}