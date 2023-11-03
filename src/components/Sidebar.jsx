import React, { useState } from 'react';
import { PiNumberFourFill } from "react-icons/pi";
import { TbSquareLetterP } from "react-icons/tb";
import { FaRadio } from "react-icons/fa6";
import { PiTextTThin } from "react-icons/pi";
import { SiYoutubemusic } from "react-icons/si";
import { BiSolidLandscape } from "react-icons/bi";
import { FcFilmReel } from "react-icons/fc";
import {
    FaTh,
    FaBars,
    FaTv,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/canal26",
            name:"Canal26",
            icon:<FaTv/>
        },
        {
            path:"/latinatv",
            name:"Latina",
            icon:<FaRadio/>
        },
        {
            path:"/telemax",
            name:"Telemax",
            icon:<PiTextTThin/>
        },
        {
            path:"/musictop",
            name:"MusicTop",
            icon:<SiYoutubemusic/>
        },
        {
            path:"/tierramia",
            name:"TierraMia",
            icon:<BiSolidLandscape/>
        },
        {
            path:"/tlcpreview",
            name:"TlcPreview",
            icon:<TbSquareLetterP/>
        },
        {
            path:"Cuatrok",
            name:"Telecentro 4k",
            icon:<PiNumberFourFill/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">MultiView</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;