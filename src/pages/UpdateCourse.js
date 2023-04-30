import React, { Component } from 'react';
import  '../routes/SignUp.css';
import Sidebar from '../components/Sidebar';
export default class updateCourse extends Component {
  constructor(props){
    super(props)
    this.state={
name:"",
price:"",
category:"",
field:"",
userId:"",
description:"",
image:"",
file: null,
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const{name,price,category,field,userId,description,image,file }=this.state;
    console.log(name,price,category,field,userId,description,image,file );
    fetch("http://localhost:8000/add-course", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        price,
        category,
        field,
        userId,
        description,
        image,
        file
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
  }
      )}
      
      handleCategoryChange(e) {
        this.setState({ category: e.target.value });
      }
  render() {
    return (
      <>
      <Sidebar>
      <div className='formm'style={{ margin:'auto',padding:'-5px' }}>
      <form onSubmit={this.handleSubmit}>
        <h3>Update your course</h3>

        <div className="mb-3">
        <label >Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e)=>this.setState({name:e.target.value})}
          />
        </div>
        <div className="mb-3">
        <label >Price</label>
          <input type="text" className="form-control" 
          onChange={(e)=>this.setState({price:e.target.value})}/>
        </div>
        <div className="mb-3">
        <label >Category</label>
          <select className="form-control" onChange={(e) => this.handleCategoryChange(e)}>
          <option value="" disabled selected hidden>Choose course category</option>
              <option value="pdf">PDF</option>
              <option value="video">Video</option>
            </select>
        </div>
        <div className="mb-3">
  <label htmlFor="file">Upload Course</label>
  <input
    type="file"
    id="file"
    placeholder='course'
    name="file"
    className="form-control"
    onChange={(e)=>this.setState({file:e.target.value})}
  />
</div>
        <div className="mb-3">
        <label > Field</label>
          <input
            type="text"
            className="form-control"
            onChange={(e)=>this.setState({field:e.target.value})}
          />
        </div>
        <div className="mb-3">
        <label >Description</label>
          <input
            type="text"
            className="form-control"
            onChange={(e)=>this.setState({description:e.target.value})}
          />
        </div>
        <div className="mb-3">
  <label htmlFor="image">Course image</label>
  <input
    type="file"
    id="image"
    placeholder='course image'
    name="image"
    className="form-control"
    onChange={(e)=>this.setState({image:e.target.value})}
  />
</div>
        <div className="d-grid">
          <button  type="submit" className="btn btn-primary">
          Save
          </button>
        </div>
      </form>
      </div>
      </Sidebar>
      </>
    )
  }
}
