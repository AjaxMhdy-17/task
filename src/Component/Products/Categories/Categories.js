import React, { useContext } from "react";
import { ProductContext } from "../../../ContextAndReducer/ContextAndReducer";
import { Link } from "react-router-dom";
import "./categories.css";

function Categories() {
  const ctx = useContext(ProductContext);
  const products = ctx.products;

  let cat = [];
  products.map((item) => {
    cat.push(item.category.toLowerCase());
  });
  const categories = [...new Set(cat)];
  
  let categoryWithNumber = [];
  for (let i = 0; i < categories.length; i++) {
    let count = 0;
    for (let j = 0; j < cat.length; j++) {
      if (categories[i] === cat[j]) {
        count += 1;
      }
    }
    var categoryName = categories[i];
    var wiz = {
      [categoryName]: count,
    };
    categoryWithNumber.push(wiz);
  }


  const it = categoryWithNumber.map((catWithNum) => {
    return Object.keys(catWithNum).map((item, idx) => {
      return (
        <div key={idx} className="col-lg-6">
          <div className="jumbotron text-center">
            <Link
              onClick={() => ctx.getSingleCategoryProduct(item)}
              to={`${item}`}
            >
              <h1>{item}</h1>
            </Link>
            <h3>Number of Produce <span>{catWithNum[item]}</span></h3>
          </div>
        </div>
      );
    });
  });

  return (
    <div className="container-fluid">
      <div className="jumbotron text-center">
        <h1>Categories</h1>
      </div>
      <div className="row">
       {it}
      </div>
    </div>
  );
}

export default Categories;
