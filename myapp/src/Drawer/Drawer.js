import React, { useState } from 'react';
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import './Drawer.css'; // Assuming you have a CSS file for styling

const BottomToTopDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`drawer-container ${isOpen ? 'open' : ''}`}>

      <div className="drawer-button" onClick={toggleDrawer}>
         {isOpen ? <SlArrowDown /> : <SlArrowUp />}
      </div>

      <div className="drawer-content">
        
        <a  href="https://www.instagram.com/hari_krish.zip/" target='_blank'  className="icons">
        <FaInstagram />
        </a>

        <a href="https://www.linkedin.com/in/hari-krishnan-823a74211/" target='_blank'  className="icons">
          <FaLinkedinIn />
        </a>

        <a href="https://github.com/Harikrishnan342004" target='_blank'  className="icons">
           <FaGithub />
        </a>
        
      </div>
    </div>
  );
};

export default BottomToTopDrawer;
