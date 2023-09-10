import React, { Component } from "react";
import "../custom-css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";

import logo from "../imgs/logo.png"; // Adjust the path based on your folder structure

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="imaaaagooo"
              width="60"
              height="60"
              className="d-inline-block me-1"
            ></img>
            <b>FCI E-Community</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-house m-1"></i>Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-envelope m-1"></i>Messages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item bold-on-hover" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item bold-on-hover" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item bold-on-hover" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-calendar m-1"></i>Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-pen m-1"></i>Profile
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-download m-1"></i>Downloads
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item bold-on-hover" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item bold-on-hover" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item bold-on-hover" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person m-1"></i>Account
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item bold-on-hover" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item bold-on-hover" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item bold-on-hover" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
