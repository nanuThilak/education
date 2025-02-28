import React from "react";
import { MdCastForEducation } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import {Link} from "react-router-dom"
import "./navbar.css";
const Navbar = () => {
 
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__brand">
          <Link to={"/"}>
          <span>
            <MdCastForEducation fontSize={"30px"} />
          </span>
          <h1>SKILLEAD</h1>
          </Link>

          <ul className="navbar__nav">
            <li>CAREER TRANSITION PROGRAMS</li>
            <li>AI, ML PODCAST'S</li>
            <li>CONNECT WITH MENTOR</li>
          </ul>
          <div className="navbar__icon">
            <span>
              <IoMenu fontSize={"30px"} />
            </span>
          </div>
        </div>
        <div className="navbar__login">
          <Link to={"/login"}>
          <button className="navbar__btn">LOGIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
