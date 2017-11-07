import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Nav = () => (
  <header>
    <nav>
      <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/employees">Employees</Link></li>
        <li><Link to = "/businesses">Businesses</Link></li>
        <li><Link to = "/table">Table</Link></li>
      </ul>
    </nav>
  </header>
)

export default Nav;
