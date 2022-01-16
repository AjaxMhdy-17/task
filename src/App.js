import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import Create from "./Component/Products/Create/Create";
import Products from "./Component/Products/Products";
import { data } from "./data/demoData";
import { ProductContext } from "./ContextAndReducer/ContextAndReducer";
import ProductDetail from "./Component/Products/Detail/ProductDetail";
import Categories from "./Component/Products/Categories/Categories";
import SingleCategory from "./Component/Products/Categories/SingleCategory/SingleCategory";
import SearchFilterSort from "./Component/Products/SearchFilterSort/SearchFilterSort";
import Home from "./Component/Home/Home";
import Update from "./Component/Products/Update/Update";

function App() {

  const ctx = useContext(ProductContext);

  console.log(ctx);

  useEffect(() => {
    ctx.setProductsInLocalStorage(data);
    ctx.getProductFromLocalStorage();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/products" element={<Products />} />
        <Route path="/update/:id" element={<Update/>} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:cat" element={<SingleCategory />} />
        <Route path="/searchFilterSort" element={<SearchFilterSort />} />
      </Routes>
    </div>
  );
}

export default App;
