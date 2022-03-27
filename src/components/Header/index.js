import React from "react";
import logo from "../../logos/maveric-logo-updated.png";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="nav-item">
      <div className="mt-3">
        <div className="ml-3">
          <ul className="nav">
            <li className="nav-item">
              <img src={logo} className="img-thumbnail" />
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                <h4 style={{ color: "#224f8f" }}>Maveric Connect</h4>
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
