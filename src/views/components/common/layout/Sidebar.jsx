import React from "react";
import { Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Sidebar = ({ showMenu }) => {
  const location = useLocation();

  return (
    <React.Fragment>
      <div className="bg-dark border-right min-vh-100" id="sidebar">
        <h1 className="fs22 fw-600 text-white p-5">Admin Portal</h1>
        <Nav className="flex-column pt-3">
          <Nav.Link href="/dashboard" className={location.pathname === '/dashboard' ? 'active text-white' : 'text-white'}
          ><i className="fa fa-home me-2 text-white fs20"></i>Dashboard</Nav.Link>
          <Nav.Link href="/manage-user" className={location.pathname === '/manage-user' ? 'active text-white' : 'text-white'}><i className="fa fa-user me-2 text-white fs20"></i>Manage User</Nav.Link>
        </Nav>
      </div>



    </React.Fragment>
  );
};

export default Sidebar;
