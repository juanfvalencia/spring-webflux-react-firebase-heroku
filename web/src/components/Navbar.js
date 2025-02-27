import React, { children } from 'react'
import { Link } from 'react-router-dom'

export const PublicNavbar = () => (
  <nav className="navbar navbar-expand-lg navbar-black bg-black shadow-lg p-3 bg-body rounded">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src="./images/logo_navbar.png" width="100%" height="100%"/>
      </a>
      <section>
        <Link to="/login">Home</Link>
        <Link to="/questions">Questions</Link>
      </section>
    </div>
  </nav>
)

export const PrivateNavbar = ({ children }) => (
  <nav className="navbar navbar-expand-lg navbar-black bg-black shadow-lg p-3 bg-body rounded">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img src="./images/logo_navbar.png" width="100%" height="100%"/>
      </a>
      <section>
        <Link to="/">Home</Link>
        <Link to="/questions">Questions</Link>
        <Link to="/new">New</Link>
        <Link to="/list">My List</Link>
        <Link to="/user">My Profile</Link>
      </section>
      <div>
        {children}
      </div>
    </div>
  </nav>
)
