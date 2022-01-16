import React, { useContext } from "react";
import { ProductContext } from "../../../../ContextAndReducer/ContextAndReducer";
import "./singleCategory.css";

const SingleCategory = () => {
  const ctx = useContext(ProductContext);

  console.log(ctx.singleCategory);

  return (
    <div className="container">
      <div className="row">
        {ctx.singleCategory.map((pro, idx) => (
          <div key={idx} className="col-md-8 col-lg-6-mx-auto my-4">
              <div className="row">
                  <div className="col-md-6">
                      <img src={pro.image} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6">
                      <h2>
                          {pro.title}
                      </h2>
                      <h3 className="my-3">
                          Price : $ <span>{pro.price}</span>
                      </h3>
                      <h2>
                          category:<span className="badge">{pro.category}</span>
                      </h2>
                  </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCategory;
