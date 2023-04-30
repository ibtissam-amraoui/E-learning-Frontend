import SidebarAdmin from '../components/SidebarAdmin';
import React, { useState ,useEffect} from 'react';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Teachers.css';
const Students=()=>{
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
    useEffect(() => {
        getStudents();
    }, []);
    const getStudents = async () => {
        let result = await fetch('http://localhost:8000/students');
        result = await result.json();
        setStudents(result);
    }
    const deleteStudent = async (id) => {
        const confirmDeletion = window.confirm("Are you sure you want to delete this student?");
        if (confirmDeletion) {
          console.warn(id);
          let result = await fetch(`http://localhost:8000/students/${id}`, { method: "Delete" });
          result = await result.json();
          if (result) {
            getStudents();
          }
          setSelectedStudent(null);
        }
      };
    return(
      <>      
<SidebarAdmin>
      <div className="auth-wrapper" style={{ height: "auto" }}>
      <div className="auth-inner" style={{ width: "auto" }}>
        <h3 className='ad'>Students' list</h3>
        <table style={{borderCollapse: 'collapse'}}>
          <tr >
            <th >First Name</th>
            <th >Last Name</th>
            <th style={{ textAlign: 'left' }}>Email</th>
            <th >User Type</th>
            <th >Delete</th>
          </tr>
          {selectedStudent && (
          <div className="confirmation-dialog">
          <p>Are you sure you want to delete this student?</p>
          <button onClick={() => deleteStudent(selectedStudent)}>Yes</button>
          <button onClick={() => setSelectedStudent(null)}>No</button>
         </div>
         )}
          {students.map((i) => {
            return (
              <tr >
                <td >{i.fname}</td>
                <td >{i.lname}</td>
                <td style={{ textAlign: 'left' }}>{i.email}</td>
                <td >{i.role}</td>
                <td >
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteStudent(i._id, i.fname)}
                  />
                </td>
              </tr>
            );
          })}
        </table></div></div>
          </SidebarAdmin>
        </>
    )
}
export default Students;