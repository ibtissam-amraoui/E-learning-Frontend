/*import React, { Component } from 'react';
import  './SignUp.css';
import Sidebar from '../components/Sidebar';
export default class AddCourse extends Component {
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
allImage: [],
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
       convertToBase64=(e)=>{
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result); //base64encoded string  
            //setImage(reader.result);
        };
        reader.onerror = error => {
            console.log("Error: ", error);
        };
      }
  render() {
    return (
      <>
      <Sidebar>
      <div className='formm'style={{ margin:'auto',padding:'-5px' }}>
      <form onSubmit={this.handleSubmit}>
        <h3>Add new course</h3>

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
    onChange={this.convertToBase64}
  />
</div>

        <div className="d-grid">
          <button  type="submit" className="btn btn-primary">
           Add
          </button>
        </div>
      </form>
      </div>
      </Sidebar>
      </>
    )
   
  }
}*/
import React, { useState ,useEffect} from 'react';
import './SignUp.css';
import Sidebar from '../components/Sidebar';

export default function AddCourse() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [field, setField] = useState("");
  const [userId, setUserId] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [allImage, setAllImage] = useState([]);
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, price, category, field, userId, description, image, file);
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
      })
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const convertToBase64 = (e) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); //base64encoded string  
      setImage(reader.result);
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    };
  }
  useEffect(()=>{
    getImage()
},[])
  //to upload an image
  function uploadImage() {
    fetch("http://localhost:8000/upload-image", {
        method: "POST",
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            base64: image
        })
    }).then((res) => res.json()).then((data) => console.log(data))
}
function getImage() {
  fetch("http://localhost:8000/get-image", {
      method: "GET",
  }).then((res) => res.json()).then((data) => {
      console.log(data)
      setAllImage(data.data)
  })
}
  return (
    <>
    <Sidebar>
    <div className='formm'style={{ margin:'auto',padding:'-5px' }}>
    <form onSubmit={handleSubmit}>
      <h3>Add new course</h3>

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
  onChange={convertToBase64}
/>
{image == "" || image == null ? "" : <img width={100} height={100} src={image} />}
<button onClick={uploadImage}>Upload</button>
{allImage.map(data=>{
                    return(
                        <img width={100} height={100} src={data.image} />
                        
                    )
                })}
<br/>
</div>

      <div className="d-grid">
        <button  type="submit" className="btn btn-primary">
         Add
        </button>
      </div>
    </form>
    </div>
    </Sidebar>
    </>
  )
 
}




