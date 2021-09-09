import React from 'react';
import { Link } from "react-router-dom";


const Navbar = (props) => (
  <nav className="navbar">
    <Link to="/">
      <h1> { 'Shopping App' } </h1>
    </Link>
    <div className="links">
      {/* <Link to="/"> { 'Home' } </Link> */}
      <Link to="/create" className="create-button"> { 'Create Product' } </Link>
    </div>
  </nav>
);

Navbar.propTypes = {
  // bla: PropTypes.string,
};

Navbar.defaultProps = {
  // bla: 'test',
};

export default Navbar;
