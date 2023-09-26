import React, { Component } from "react";
import "../custom-css/style.css";
import "../css/main.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";

class News extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row my-3 justify-content-center justify-content-lg-start">
            <div className=" col-md-10 bg-primary-subtle rounded p-4">
              {this.props.message}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default News;
