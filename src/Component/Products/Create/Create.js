import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "../../../ContextAndReducer/ContextAndReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const ctx = useContext(ProductContext);
  const navigate = useNavigate() 
  const onSubmit = (data) => {
    const randomId = Math.floor(Math.random() * (1000 - 2 + 1)) + 2;

    const product = {
      id: randomId,
      title: data.title,
      description: data.description,
      image: data.image,
      price: data.price,
      category: data.category,
      creation_time: new Date().toLocaleTimeString(),
      updated_time: "",
    };
    ctx.createProduct(product);
    navigate('/products',{replace : true})
    reset() 
   
  };

  return (
    <div className="container-fluid">
      <div className="jumbotron text-center">
        <h2>Create Product</h2>
      </div>
      <div className="row">
        <div className="col-md-8 mx-auto col-lg-6">
          <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-3">
              <p>{errors.title && <span>title required</span>}</p>
              <input
                type="text"
                className="form-control"
                placeholder="title of product"
                {...register("title", { required: true })}
              />
            </div>
            <div className="mt-3">
              <p>{errors.description && <span>description required</span>}</p>
              <textarea
                type="text"
                className="form-control"
                placeholder="description"
                {...register("description", { required: true })}
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="image url"
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
                {...register("price", { required: true, min: 1 })}
              />
            </div>
            <div className="mt-3">
              <p>{errors.category && <span>category required</span>}</p>

              <input
                type="text"
                className="form-control"
                placeholder="category"
                {...register("category", { required: true })}
              />
            </div>
            <div className="my-5">
              <button className="btn btn-dark text-uppercase col-12">
                create product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
