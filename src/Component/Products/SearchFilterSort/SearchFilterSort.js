import React, { useState, useContext } from "react";
import { ProductContext } from "../../../ContextAndReducer/ContextAndReducer";
import "./searchFilterSort.css";

function SearchFilterSort() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("all");
  const [time, setTime] = useState("all");

  const ctx = useContext(ProductContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      price: price,
      time: time,
    };
    ctx.filterData(data);
  };

  return (
    <div className="container-fluid">
      <div className="row my-5">
        <div className="col-md-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="search by name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-3">
          <select
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="all">All</option>
            <option value="htl">High To Low</option>
            <option value="lth">Low To High</option>
          </select>
        </div>
        <div className="col-md-3 mb-3">
          <select
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="all">All</option>
            <option value="newest">Newest</option>
            <option value="older">Older</option>
          </select>
        </div>
        <div className="col-md-3 mb-3">
          <button disabled={ (name !== '' || time !== 'all' || price !== 'all' )? false : true } onClick={submitHandler} className="btn btn-success col-12">
            search
          </button>
        </div>
      </div>
      {ctx.filterdData.length === 0 ? (
            <div className="container">
            <div className="row">
                <div className="jumbotron mx-auto text-center">
                    <h1>
                        No Matched Found
                    </h1>
                </div>
            </div>
        </div>
      ) : (
        <div className="row mt-4">
        {ctx.filterdData.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-4">
              <div className="row">
                  <div className="col-md-4">
                      <img src={item.image} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-8">
                      <h3>{item.title}</h3>
                      <h4>Price : ${item.price}</h4>
                      <h2>Category: {item.category}</h2>
                  </div>
              </div>
          </div>
        ))}
      </div>
      ) }
    </div>
  );
}

export default SearchFilterSort;
