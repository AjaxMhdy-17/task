import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid">
      <div className="jumbotron text-center">
        <h1>This Is Home Page</h1>
      </div>
      <div className="row">
        <div className="col-md-8 col-lg-6 mx-auto text-center">
          <ul>
            <li>
              <h3>
                {" "}
                <Link to="/">Home</Link>
              </h3>
            </li>
            <li>
              <h3>
                {" "}
                <Link to="/create">Create</Link>
              </h3>
            </li>
            <li>
              <h3>
                {" "}
                <Link to="/products">Products</Link>
              </h3>
            </li>
            <li>
              <h3>
                {" "}
                <Link to="/categories">Categories</Link>
              </h3>
            </li>
            <li>
              <h3>
                {" "}
                <Link to="/searchFilterSort">SearchFilterSort</Link>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
