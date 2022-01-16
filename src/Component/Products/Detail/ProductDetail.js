import React, { useContext } from "react";
import { ProductContext } from "../../../ContextAndReducer/ContextAndReducer";
import { Link } from "react-router-dom";
import "./productDetail.css";

function ProductDetail() {
  const ctx = useContext(ProductContext);
  const product = ctx.product;

  if (product === "") {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>
            No Content After Refreshing , please go to{" "}
            <Link to="/products">products page</Link>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h2> Details about This Product</h2>
      </div>
      <div className="row">
        <div className="col-md-6 text-center">
          <img src={product.image} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6">
          <h3>{product.title}</h3>
          <h4>
            price : $<span className="badge">{product.price}</span>
          </h4>
          <div className="mt-3">
              <h2>Description</h2>
              <p>{product.description}</p>
          </div>
          <h2>Category : <span>{product.category}</span></h2>
          <h4 className="my-3">Creation_Time : {product.creation_time}</h4>
            {product.updated_time !== '' ?  <h4>Updated_Time : {product.updated_time}</h4> : null}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
