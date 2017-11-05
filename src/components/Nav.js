import React from 'react';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';

// The Header creates links that can be used to navigate
// between routes.
const Nav = () => (
  <header>
    <nav>
      <ul>
        <li><Link to = "/home">Home</Link></li>
        <li><Link to = "/employees">Employees</Link></li>
        <li><Link to = "/businesses">Businesses</Link></li>
      </ul>
    </nav>
  </header>
)

export default Nav;
