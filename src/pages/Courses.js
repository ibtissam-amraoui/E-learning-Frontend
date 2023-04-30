import Sidebar from '../components/Sidebar';
import React, { useState ,useEffect} from 'react';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Teachers.css';
const Courses=()=>{
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const handleDeleteConfirmation = (id) => {
    setSelectedCourse(id);
  };
  function handleClick() {
    window.location.href = "./updateCourse";
  }
    useEffect(() => {
        getCourses();
    }, []);
    const getCourses = async () => {
        let result = await fetch('http://localhost:8000/courses');
        result = await result.json();
        setCourses(result);
    }
    const deleteCourse = async (id) => {
        const confirmDeletion = window.confirm("Are you sure you want to delete this course?");
        if (confirmDeletion) {
          console.warn(id);
          let result = await fetch(`http://localhost:8000/courses/${id}`, { method: "Delete" });
          result = await result.json();
          if (result) {
            getCourses();
          }
          setSelectedCourse(null);
        }
      };
      const handleClicks = () => {
        window.location.href='/addCourse';
      };
      
    return(
      <>      
<Sidebar>
      <div className="auth-wrapper" style={{ height: "auto" }}>
      <div className="auth-inner" style={{ width: "auto" }}>
        <h3 className='ad'>Courses' list</h3>
        <table style={{borderCollapse: 'collapse'}}>
          <tr >
            <th >Name</th>
            <th >Price</th>
            <th >Category</th>
            <th >Field</th>
            <th >Description</th>
            <th >Action</th>
            <th >Update course</th>
          </tr>
          {selectedCourse && (
          <div className="confirmation-dialog">
          <p>Are you sure you want to delete this course?</p>
          <button onClick={() => deleteCourse(selectedCourse)}>Yes</button>
          <button onClick={() => setSelectedCourse(null)}>No</button>
         </div>
         )}

          {courses.map((i) => {
            return (
              <tr >
                <td >{i.name}</td>
                <td >{i.price}</td>
                <td >{i.category}</td>
                <td >{i.field}</td>
                <td >{i.description}</td>
                <td >
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteCourse(i._id, i.name)}
                  />
                </td>
                <td >
                <button class="edit-button" onClick={() => handleClick()}>Edit</button>
                    
                </td>
              </tr>
            );
          })}
        </table></div></div>
        <button  type="submit"  className="btn" onClick={handleClicks}>
           Add Course
          </button>
          </Sidebar>
        </>
    )
}
export default Courses;