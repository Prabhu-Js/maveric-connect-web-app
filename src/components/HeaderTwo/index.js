import React from "react";
import logo from "../../logos/maveric-logo-updated.png";
import profile from "../../logos/profile-img.png";
import "./style.css";

const HeaderTwo = () => {
  return (
    <div className="header">
      <div className="nav-item">
        <div className="mt-0">
          <div className="ml-3">
            <ul className="nav">
              <div class="d-flex w-150" width={100}>
                <div className="mt-3">
                <li className="nav-item">
                  <img src={logo} className="img-thumbnail" />
                </li>
                </div>
                <div className="mt-3">
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    <h4 style={{ color: "#224f8f" }}>Maveric Connect</h4>
                  </a>
                </li>
                </div>
                
                <li className="nav-item">
                  <img
                    src={profile}
                    className="img-thumbnail"
                    style={{ marginLeft: "300%", width: "25%" }}
                  />

                  <div class="dropdown" style={{ marginLeft: "300%", width:"20", backgroundColor:"#224f8" }}>
                    <a
                      class="btn btn-secondary btn-sm dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Profile
                    </a>

                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a class="dropdown-item" href="#">
                        My Profile
                      </a>
                      <a class="dropdown-item" href="#">
                        Settings
                      </a>
                      <a class="dropdown-item" href="/">
                        Logout
                      </a>
                    </div>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;
