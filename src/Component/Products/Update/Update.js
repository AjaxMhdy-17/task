import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../../ContextAndReducer/ContextAndReducer";

import "./update.css";

function Update() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const ctx = useContext(ProductContext);
  const product = ctx.product;
  const navigate = useNavigate() 

  const onSubmit = (data) => {
    const pro = {
      id: product.id,
      title: data.title,
      description: data.description,
      image: data.image,
      price: data.price,
      category: data.category,
      updated_time: new Date().toLocaleTimeString(),
    };
    ctx.updateProduct(pro);
    reset();
    navigate('/products',{replace : true})
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-lg-6 mx-auto">
          <h3>This is update</h3>
          <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-3">
              <p>{errors.title && <span>title required</span>}</p>
              <input
                type="text"
                className="form-control"
                placeholder="title of product"
                defaultValue={product.title}
                {...register("title", { required: true })}
              />
            </div>
            <div className="mt-3">
              <p>{errors.description && <span>description required</span>}</p>
              <textarea
                type="text"
                className="form-control"
                placeholder="description"
                defaultValue={product.description}
                {...register("description", { required: true })}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="image url"
                defaultValue={product.image}
                {...register("image")}
              />
            </div>
            <div className="mt-3">
              <p>
                {errors.price && (
                  <span>price required price must be grater then 0</span>
                )}
              </p>
              <input
                type="number"
                className="form-control"
                placeholder="price"
                defaultValue={product.price}
                {...register("price", { required: true, min: 1 })}
              />
            </div>
            <div className="mt-3">
              <p>{errors.category && <span>category required</span>}</p>

              <input
                type="text"
                className="form-control"
                placeholder="category"
                defaultValue={product.category}
                {...register("category", { required: true })}
              />
            </div>
            <div className="my-5">
              <button className="btn btn-dark text-uppercase col-12">
                update product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
