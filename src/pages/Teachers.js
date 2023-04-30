import SidebarAdmin from '../components/SidebarAdmin';
import React, { useState ,useEffect} from 'react';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Teachers.css';
const Teachers=()=>{
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
    useEffect(() => {
        getTeachers();
    }, []);
    const getTeachers = async () => {
        let result = await fetch('http://localhost:8000/teachers');
        result = await result.json();
        setTeachers(result);
    }
    const deleteTeacher = async (id) => {
        const confirmDeletion = window.confirm("Are you sure you want to delete this teacher?");
        if (confirmDeletion) {
          console.warn(id);
          let result = await fetch(`http://localhost:8000/teachers/${id}`, { method: "Delete" });
          result = await result.json();
          if (result) {
            getTeachers();
          }
          setSelectedTeacher(null);
        }
      };
      
      
    return(
      <>      
<SidebarAdmin>
      <div className="auth-wrapper" style={{ height: "auto" }}>
      <div className="auth-inner" style={{ width: "auto" }}>
        <h3 className='ad'>Teachers' list</h3>
        <table style={{borderCollapse: 'collapse'}}>
          <tr >
            <th >First Name</th>
            <th >Last Name</th>
            <th style={{ textAlign: 'left' }}>Email</th>
            <th >User Type</th>
            <th >Delete</th>
          </tr>
          {selectedTeacher && (
          <div className="confirmation-dialog">
          <p>Are you sure you want to delete this teacher?</p>
          <button onClick={() => deleteTeacher(selectedTeacher)}>Yes</button>
          <button onClick={() => setSelectedTeacher(null)}>No</button>
         </div>
         )}

          {teachers.map((i) => {
            return (
              <tr >
                <td >{i.fname}</td>
                <td >{i.lname}</td>
                <td style={{ textAlign: 'left' }}>{i.email}</td>
                <td >{i.role}</td>
                <td >
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteTeacher(i._id, i.fname)}
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
export default Teachers;