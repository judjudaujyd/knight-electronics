import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav_inner">
          <div className="nav_left">
            <div className="nav_left_content">
                <h2>KNIGHT ELECTRONICS</h2>
                <small>SOMETHING YOU CAN TRUST</small>
            </div>
          </div>
          <div className="nav_right">
            <div className="nav_right_content">
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/">PRODUCTS</Link>
                    </li>
                    <li>
                        <Link to="/">SERVICES</Link>
                    </li>
                    <li>
                        <Link to="/">CONTACT US</Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
