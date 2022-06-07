import React from 'react'
import logo from "../../assets/logo.svg"
import "./styles.css"

const Navbar = () => {
  return (
    <div className="navbar vertical-flex-box">
        <div className="navbar-left vertical-flex-box">
            <div className="nav-item">
                <img src={logo} alt="logo" className="nav-logo"/>
            </div>
            <ul className="vertical-flex-box">
                <li className="nav-item">ABOUT</li>
                <li className="nav-item">POLLS</li>
            </ul>
        </div>
          <div className="navbar-right vertical-flex-box">
            <button className="btn btn-primary">SIGN IN</button>
        </div>
    </div>
  )
}

export default Navbar