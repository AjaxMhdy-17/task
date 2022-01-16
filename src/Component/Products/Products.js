import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../../ContextAndReducer/ContextAndReducer";
import { Link } from "react-router-dom";
import "./products.css";

const Products = () => {
  const ctx = useContext(ProductContext);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  useEffect(() => {
    ctx.getProductFromLocalStorage();
  }, []);

  const len = ctx.products.length;

  const next = () => {
    setStart(start + 3);
    setEnd(end + 3);
  };

  const prev = () => {
    setStart(start - 3);
    setEnd(end - 3);
  };

  const products = ctx.products.slice(start, end);

  return (
    <>
      <div className="container-fluid">
        <h3 className="text-center my-5">Products</h3>
        <div className="row">
          {products.map((product) => {
            const { id, title, image, price } = product;
            return (
              <div key={id} className="col-md-6 col-lg-4 mb-5 text-center">
                <img src={image} className="img-fluid" alt='productImage' />
                <h3 className="my-3">{title}</h3>
                <h4>
                  <Link
                    onClick={() => ctx.getSingleProduct(id)}
                    to={`/detail/${id}`}
                  >
                    Detail About Product
                  </Link>
                </h4>
                <p>Price : ${price}</p>
                <Link
                  to={`/update/${id}`}
                  className="btn btn-primary"
                  onClick={() => {
                    ctx.getSingleProduct(id);
                  }}
                >
                  update
                </Link>
                <button
                  className="btn btn-danger ml-5"
                  onClick={() => ctx.deletePro(id)}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="d-block col-md-10 col-lg-8 mx-auto my-5">
            <div className="prev_next_buttons ">
              <button
                disabled={start === 0 ? true : false}
                onClick={prev}
                className="btn btn-dark"
              >
                prev page
              </button>
              <button
                disabled={end > len ? true : false}
                onClick={next}
                className="btn btn-dark"
              >
                next page
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
