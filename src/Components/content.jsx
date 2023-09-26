import React, { Component } from "react";
import "../custom-css/style.css";
import "../css/main.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.js";

import logo from "../imgs/logo.png";
import News from "./news";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid ms-0 ">
        <div className="p-2 row justify-content-center justify-content-lg-start">
          <div className="col-md ms-4">
            <img
              src={logo}
              className="img-fluid w-100 h-auto d-none d-lg-block"
            />
          </div>
          <div className="col-md-10 justify-content-center">
            <div>
              <h1 className="lead display-4">Welcome, FCI Community</h1>
              <p className="lead">This is your homepage</p>
            </div>

            <div>
              <News
                message={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta ratione temporibus, consequatur odio perferendis eos repellendus quia cum assumenda tenetur aliquid natus aliquam quo quis iure asperiores recusandae ad incidunt officia inventore unde veritatis! Dolorum, commodi doloribus. Unde, magni ea! Asperiores itaque est praesentium sed commodi? Esse facilis eius in, possimus sint provident. Illum saepe aperiam vero assumenda nesciunt voluptates cum sed, quae omnis optio error modi sapiente asperiores, nemo consequatur, quis nihil libero? Vel aspernatur atque sequi fuga optio tempore ducimus a perspiciatis quibusdam dolorem deserunt debitis harum nemo temporibus alias porro quaerat quasi, molestias aperiam repellat repudiandae."
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
