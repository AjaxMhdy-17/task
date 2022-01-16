import React, { createContext, useReducer } from "react";
import { data } from "../data/demoData";

export const ProductContext = createContext({
  products: [],
  isEdit: false,
  product: "",
  singleCategory: [],
  filterdData: [],
  closeModal: () => {},
  openModal: () => {},
  setProductsInLocalStorage: () => {},
  getProductFromLocalStorage: () => {},
  createProduct: (product) => {},
  getSingleProduct: (id) => {},
  updateProduct: (product) => {},
  deletePro: (id) => {},
  getSingleCategoryProduct: (category) => {},
  filterData: () => {},
});

const initialState = {
  products: [],
  isEdit: false,
  product: "",
  singleCategory: [],
  filterdData: [],
};

const productReducer = (state, action) => {
  if (action.type === "getProductFromLocalStorage") {

    return {
      ...state,
      products: action.payload,
    };
  } else if (action.type === "createProduct") {
    const updateProducts = [action.payload, ...state.products];
    localStorage.setItem("products", JSON.stringify(updateProducts));
    return {
      ...state,
      products: updateProducts,
    };
  } else if (action.type === "getSingleProduct") {
    const singleProduct = state.products.find(
      (item) => item.id === action.payload
    );

    return {
      ...state,
      product: singleProduct,
    };
  } else if (action.type === "updateProduct") {

    const pro = [...state.products];

    const idx = pro.findIndex((item) => item.id === action.payload.id);

    const element = pro[idx];

    const upElem = {
      ...element,
      title: action.payload.title,
      description: action.payload.description,
      image: action.payload.image,
      price: action.payload.price,
      category: action.payload.category,
      updated_time: action.payload.updated_time,
    };
    const final = [...state.products];
    final[idx] = upElem;
    localStorage.setItem("products", JSON.stringify(final));
    return {
      ...state,
      products: final,
    };
  } else if (action.type === "deletePro") {
    const updatedProducts = state.products.filter(
      (item) => item.id != action.payload
    );
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    return {
      ...state,
      products: updatedProducts,
    };
  } else if (action.type === "getSingleCategoryProduct") {

    const findCat = state.products.filter(
      (item) => item.category.toLowerCase() === action.payload
    );

    return {
      ...state,
      singleCategory: findCat,
    };
  } else if (action.type === "filterData") {
    let finalData;

    if (action.payload.name !== "") {
      finalData = state.products.filter((item) =>
        item.title.toLowerCase().includes(action.payload.name)
      );
    }
    if (action.payload.price !== "all") {
      if (action.payload.price === "htl") {
        finalData = state.products.sort((a, b) => b.price - a.price);
      } else {
        finalData = state.products.sort((a, b) => a.price - b.price);
      }
    }
    if (action.payload.time !== "all") {
      if (action.payload.time === "newest") {
        finalData = state.products.sort((a, b) => {
          return (
            new Date(...a.creation_time.split("/").reverse()) -
            new Date(...b.creation_time.split("/").reverse())
          );
        });
      } else {
        finalData = state.products.sort((a, b) => {
          return (
            new Date(...b.creation_time.split("/").reverse()) -
            new Date(...a.creation_time.split("/").reverse())
          );
        });
      }
    }
    return {
      ...state,
      filterdData: finalData,
    };
  } else if (action.type === "closeModal") {
    return {
      ...state,
      isEdit: false,
    };
  } else if (action.type === "openModal") {
    return {
      ...state,
      isEdit: true,
    };
  }

  return state;
};

const ContextAndReducer = (props) => {
  const [updateData, dispatchUpdateDataAction] = useReducer(
    productReducer,
    initialState
  );

  const setProductsInLocalStorage = () => {
    localStorage.setItem("products", JSON.stringify(data));
  };

  const getProductFromLocalStorage = () => {
    dispatchUpdateDataAction({
      type: "getProductFromLocalStorage",
      payload: JSON.parse(localStorage.getItem("products")),
    });
  };

  const createProduct = (product) => {
    dispatchUpdateDataAction({
      type: "createProduct",
      payload: product,
    });
  };

  const getSingleProduct = (id) => {
    dispatchUpdateDataAction({
      type: "getSingleProduct",
      payload: id,
    });
  };

  const updateProduct = (product) => {
    dispatchUpdateDataAction({
      type: "updateProduct",
      payload: product,
    });
  };

  const deletePro = (id) => {
    dispatchUpdateDataAction({
      type: "deletePro",
      payload: id,
    });
  };

  const openModal = () => {
    dispatchUpdateDataAction({
      type: "openModal",
    });
  };
  const closeModal = () => {
    dispatchUpdateDataAction({
      type: "closeModal",
    });
  };

  const getSingleCategoryProduct = (category) => {
    dispatchUpdateDataAction({
      type: "getSingleCategoryProduct",
      payload: category,
    });
  };

  const filterData = (data) => {
    dispatchUpdateDataAction({
      type: "filterData",
      payload: data,
    });
  };

  const finalProductContext = {
    products: updateData.products,
    product: updateData.product,
    isEdit: updateData.isEdit,
    singleCategory: updateData.singleCategory,
    filterdData: updateData.filterdData,
    setProductsInLocalStorage: setProductsInLocalStorage,
    getProductFromLocalStorage: getProductFromLocalStorage,
    createProduct: createProduct,
    getSingleProduct: getSingleProduct,
    updateProduct: updateProduct,
    openModal: openModal,
    closeModal: closeModal,
    deletePro: deletePro,
    getSingleCategoryProduct: getSingleCategoryProduct,
    filterData: filterData,
  };
  return (
    <ProductContext.Provider value={finalProductContext}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ContextAndReducer;
