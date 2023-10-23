import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { GiAbstract010 } from "react-icons/gi";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            WINFRED <GiAbstract010 />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <>
              <IoIosMenu />
            </>

            {/* its not working whyy */}
            <p className={click ? <FaTimes /> : <IoIosMenu />}></p>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-links" onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/help" className="nav-links" onClick={closeMenu}>
                Help
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-links" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
