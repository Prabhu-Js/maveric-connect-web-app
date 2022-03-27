import React from "react";
import "./style.css";
import logo from "../../logos/maveric-logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="mt-2">
        <div className="ml-2">
          <ul class="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                <p
                  className="text-center"
                  style={{
                    color: "white",
                    marginBottom: "1px",
                    fontSize: "15px",
                  }}
                >
                  <img src={logo} style={{ width: "25%", marginLeft: "0%" }} />
                  &emsp;@Copyright, Maveric Systems Ltd 2022
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
