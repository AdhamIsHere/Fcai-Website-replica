import React, { Component } from "react";
import "../custom-css/style.css";
import "../css/main.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";

import logo from "../imgs/logo.png"; // Adjust the path based on your folder structure

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-altprim navbar-dark">
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
                    <a
                      className="dropdown-item bold-on-hover"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#Login"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="modal fade" id="Login" tabindex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="LoginLabel">
                  Login
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Email address
                    </label>
                    <input type="email" class="form-control" id="email" />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label">
                      Password
                    </label>
                    <input type="password" class="form-control" id="password" />
                  </div>
                  <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="rememberMe"
                    />
                    <label class="form-check-label" for="rememberMe">
                      Remember me
                    </label>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
