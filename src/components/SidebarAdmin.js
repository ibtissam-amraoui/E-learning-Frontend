import React, { useState } from 'react';
import {
    FaHome,
    FaInfoCircle,
    FaBook,
    FaBars,
    FaUserAlt,
    FaIndent,
    FaUserGraduate,
    FaUserTie,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const SidebarAdmin = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaInfoCircle/>
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/coursesA",
            name:"Courses",
            icon:<FaBook/>
        },
        {
            path:"/teachers",
            name:"Teachers",
            icon:<FaUserTie/>
        },
        {
            path:"/students",
            name:"Students",
            icon:<FaUserGraduate/>
        },

        {
            path:"/login",
            name:"Log Out",
            icon:<FaIndent/>
            
        }
    ]
    return (
        React.createElement("div", { className: "container" },
           React.createElement("div", { style: {width: isOpen ? "200px" : "50px"}, className: "sidebar" },
               React.createElement("div", { className: "top_section" },
                   React.createElement("h1", { style: {display: isOpen ? "block" : "none"}, className: "logo" }, "IBRA"),
                  React.createElement("div", { style: {marginLeft: isOpen ? "50px" : "0px"}, className: "bars" } ,
                       React.createElement(FaBars, { onClick: toggle })
                   )
               ),
               menuItem.map((item, index) => (
                   React.createElement(NavLink, { to: item.path, key: index, className: "link", activeClassName: "active" },
                       React.createElement("div", { className: "icon" }, item.icon),
                       React.createElement("div", { style: {display: isOpen ? "block" : "none"}, className: "link_text" }, item.name)
                   )
               ))
           ),
           React.createElement("main", null, children)
        )
    );
};
export default SidebarAdmin;
