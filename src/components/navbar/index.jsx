import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import img from '../../assets/zoomlogo.png'
import {JwtId} from '../../helpers/JwtId'


const Navbarr = () => {
  const [collapsed, setCollapsed] = useState(true);
  const token= JwtId()
  console.log(token,"hi ai")
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  function handleMouseEnter() {
    setIsDropdownOpen(true);
  }

  function handleMouseLeave() {
    setIsDropdownOpen(false);
  }
  return (
    <>
    
    <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="/">
            <img style={{ height: "100px" }} src={img}></img>
          </Navbar.Brand>      <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white "/>
      <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="mr-auto">
        <Link to={"/about-us"} className="nav-link">About Us</Link>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
                <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link
                    className=" nav-link"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay="1000"
                    data-close-others="false"
                  >
                    Services
                  </Link>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
        <li>
          <Link
            className="dropdown-item"
            tabIndex="-1"
            to={`/services/${"Carpet Cleaning"}`}
          >
            Carpet Cleaning
          </Link>
        </li>
        <li className="divider"></li>
        <li>
          <Link
            className="dropdown-item"
            tabIndex="-1"
            to={`/services/${"Floor Cleaning"}`}
          >
            Floor Cleaning
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item"
            tabIndex="-1"
            to={`/services/${"Air Duct Cleaning"}`}
          >
            Air Duct Cleaning
          </Link>
        </li>
        <li className="divider"></li>
        <li>
          <Link
            className="dropdown-item"
            tabIndex="-1"
            to={`/services/${"Upholstery Cleaning"}`}
          >
            Upholstery Cleaning
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item"
            tabIndex="-1"
            to={`/services/${"Floor Installation"}`}
          >
            Floor Installation
          </Link>
        </li>
      </ul>
      )}
    </li>
                {/* <li className="dropdown ">
                  <Link
                    className="dropdown nav-link dropdown-toggle "
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay="1000"
                    data-close-others="false"
                  >
                    Services
                  </Link>
                

                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="text-dark"
                        tabIndex="-1"
                        to={`/services/${"Carpet Cleaning"}`}
                      >
                        Carpet Cleaning
                      </Link>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <Link
                        className="text-dark"
                        tabIndex="-1"
                        to={`/services/${"Floor Cleaning"}`}
                      >
                        Floor Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-dark"
                        tabIndex="-1"
                        to={`/services/${"Air Duct Cleaning"}`}
                      >
                        Air Duct Cleaning
                      </Link>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <Link
                        className="text-dark "
                        tabIndex="-1"
                        to={`/services/${"Upholstery Cleaning"}`}
                      >
                        Upholstery Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-dark"
                        tabIndex="-1"
                        to={`/services/${"Floor Installation"}`}
                      >
                        Floor Installation
                      </Link>
                    </li>
                  </ul>
                </li> */}
                <Link to={"/contact"} className="nav-link ">
                  Contact
                </Link>
        </Nav>
        <Nav className="ml-auto">
        <Link to={"/cart"} className="nav-link">
                <i className="fa fa-shopping-cart mr-1 text-warning"></i>Cart
                </Link>
                
                {Object.keys(token).length===0?<><Link to={"/login"} className="nav-link">
                Login
                </Link>
                <Link to={"/register"} className="nav-link">
                Register
                </Link></>:<><Link to={"/login"} className="nav-link">
                  Logout
                </Link></>}

                
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  
        {/* <Navbar bg="dark" >
        <Navbar.Brand href="/">
            <img style={{ height: "120px" }} src={img}></img>
          </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav " className="bg-light text-light"/>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mr-auto">
        <Link to={"/about-us"} className="nav-link">About Us</Link>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
                <li className="dropdown ">
                  <Link
                    className="dropdown nav-link dropdown-toggle "
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay="1000"
                    data-close-others="false"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="text-dark"
                        tabIndex="-1"
                        to={`/services/${"Carpet Cleaning"}`}
                      >
                        Carpet Cleaning
                      </Link>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <Link
                        className="text-dark"
                        tabIndex="-1"
                        to={`/services/${"Floor Cleaning"}`}
                      >
                        Floor Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-dark"
                        tabIndex="-1"
                        to={`/services/${"Air Duct Cleaning"}`}
                      >
                        Air Duct Cleaning
                      </Link>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <Link
                        className="text-dark "
                        tabIndex="-1"
                        to={`/services/${"Upholstery Cleaning"}`}
                      >
                        Upholstery Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-dark"
                        tabIndex="-1"
                        to={`/services/${"Floor Installation"}`}
                      >
                        Floor Installation
                      </Link>
                    </li>
                  </ul>
                </li>
                <Link to={"/contact"} className="nav-link ">
                  Contact
                </Link>
        </Nav>
        <Nav className="ml-auto">
        <Link to={"/cart"} className="nav-link">
                <i className="fa fa-shopping-cart mr-1 text-warning"></i>Cart
                </Link>
                <Link to={"/login"} className="nav-link">
                Login
                </Link>
                <Link to={"/register"} className="nav-link">
                Register
                </Link>
                <Link to={"/register"} className="nav-link">
                  Logout
                </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */}


      {/* <Navbar
        bg="dark"
        
      >
          <Navbar.Brand href="/">
            <img style={{ height: "110px" }} src={img}></img>
          </Navbar.Brand>
       
        
          <Navbar.Toggle
            aria-bs-controls="basic-navbar-nav"
            className="bg-light"
            onClick={toggleNavbar}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={collapsed ? "collapse" : ""}
          >
            
            
              <div className="navbar-nav">
                <Link to={"/about-us"} className="nav-link">About Us</Link>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
                <li className="dropdown ">
                  <Link
                    className="dropdown nav-link dropdown-toggle "
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay="1000"
                    data-close-others="false"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="text-dark"
                        tabIndex="-1"
                        to={`/services/${"Carpet Cleaning"}`}
                      >
                        Carpet Cleaning
                      </Link>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <Link
                        className="text-dark"
                        tabIndex="-1"
                        to={`/services/${"Floor Cleaning"}`}
                      >
                        Floor Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-dark"
                        tabIndex="-1"
                        to={`/services/${"Air Duct Cleaning"}`}
                      >
                        Air Duct Cleaning
                      </Link>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <Link
                        className="text-dark "
                        tabIndex="-1"
                        to={`/services/${"Upholstery Cleaning"}`}
                      >
                        Upholstery Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-dark"
                        tabIndex="-1"
                        to={`/services/${"Floor Installation"}`}
                      >
                        Floor Installation
                      </Link>
                    </li>
                  </ul>
                </li>
                <Link to={"/contact"} className="nav-link ">
                  Contact
                </Link>
                </div>
                <div className="navbar-nav">
                <Link to={"/cart"} className="nav-link">
                <i className="fa fa-shopping-cart mr-1 text-warning"></i>Cart
                </Link>
                <Link to={"/login"} className="nav-link">
                Login
                </Link>
                <Link to={"/register"} className="nav-link">
                Register
                </Link>
                <Link to={"/register"} className="nav-link">
                  Logout
                </Link>
                </div>
                
                
              
          </Navbar.Collapse>
        
      </Navbar> */}
    </>
  );
};

export default Navbarr;
