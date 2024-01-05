// Navbar.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Navbar = (props) => {
  const {  Addtaskorproject, pagelink } = props;
  return (
    <header className="navbar navbar-expand-md navbar-light  mt-2 " style={{backgroundColor:'orange'}}>
      <div className="container">
        {/* Buttons in the navigation bar */}
        <div className="d-flex justify-content-end align-items-center w-100 gap-3">
          {/* Left-aligned buttons */}
          <div>
            <a className=" btn align-items-center d-flex gap-2" href = {pagelink} style={{backgroundColor:'#353A56', color:'#d3d3d3'}}>

              {Addtaskorproject}
              <FontAwesomeIcon icon={faPlus}> </FontAwesomeIcon>
            </a>

          </div>

          {/* Right-aligned components */}
          <div className="d-flex gap-3 ">
            

            {/* Username with avatar */}
            <div className="navbar-user ml-1 ">
              <span className="navbar-username">YOGA NARASIMMAN S</span>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Navbar;
