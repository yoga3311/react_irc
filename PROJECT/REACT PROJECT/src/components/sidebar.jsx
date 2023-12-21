import React from 'react';
//import css file
import '../components/css/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav id="sidebar" className=" col-md-2 ">
      <div className="sidebar">
        {/* User logo and project name */}
        <div className="text-center p-3">
          
          <h5 className="mt-2">Project name</h5>
        </div>

        <div class="divider"></div>
        

        {/* Add your sidebar icons here */}
        <div className="   align-content-center">
          <div class="">
          <ul className="nav flex-column gap-3 align-content-center">
            <li className="nav-item ">
              <Link to='/Admin'>
               <FontAwesomeIcon icon={faHome}style={{ color:'lightgray', fontSize: '2rem' }}></FontAwesomeIcon>
               </Link>
            </li>
            <li className="">
              <Link to='/stats'>
               <FontAwesomeIcon icon={faGear}style={{ color:'lightgray', fontSize: '2rem' }}></FontAwesomeIcon></Link>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">
               {/* <FontAwesomeIcon icon={}style={{ color:'lightgray', fontSize: '2rem' }}></FontAwesomeIcon> */}
              </a>
            </li>
          </ul>
          </div>
          
          <div class="divider"></div>
          
          <div className="d-flex justify-content-center">
            
            <hr />
            <Link to='/Login'>
            <button className="sidebar-logout-icon btn btn-danger">Logout</button></Link>
          </div>
        </div>




      </div>

    </nav>
  );
};

export default Sidebar;
