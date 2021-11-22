import productAPI from "./api/productAPI";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./tailwind.css";
import "react-toastify/dist/ReactToastify.css";

import LayoutWebsite from "./layouts/LayoutWebsite";
import LayoutAdmin from "./layouts/LayoutAdmin";
import ProductAddPage from "./page/admin/product/ProductAdd";
import ProductManager from "./page/admin/product/ProductManager";
import Products from "./page/web/Product/index";
import ProductDetail from "./page/web/ProductDetail/index";
import ProductEditPage from "./page/admin/product/ProductEdit";
import HomePage from "./page/web/Home/index";
import AboutPage from "./page/web/About/index";


export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await productAPI.getAll();
        setProducts(data);
      } catch (error) {
        toast.error(error.response.data);
      }
    };

    getProducts();
  }, []);

  const onHandleRemove = async (id) => {
    try {
      const { data } = await productAPI.remove(id);
      const newProducts = products.filter((item) => item.id !== data.id);
      toast.success("Remove Item Successfully");
      setProducts(newProducts);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const onHandleAdd = async (product) => {
    try {
      // call api
      const { data } = await productAPI.add(product);
      // rerender
      setProducts([...products, data]);
      toast.success("Thêm sản phẩm thành công");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const onHandeUpdate = async (product) => {};
  return (
    <div className="App">
      <ToastContainer />

      <BrowserRouter>
        <div className="">
          <Routes>
            {/* Layout Website */}
            
            <Route path="/" element={<LayoutWebsite />}>
              <Route index element={<HomePage/>} />
              <Route path="about" element={<AboutPage />} />
              <Route
                path="product"
                element={<Products products={products} />}
              />
              <Route path="product/:id" element={<ProductDetail />} />
            </Route>
          

            {/* Layout Admin */}
            <Route path="admin/*" element={<LayoutAdmin />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<div>Dashboard</div>} />
              <Route
                path="product"  
                element={
                  <ProductManager
                    products={products}
                    onRemove={onHandleRemove}
                  />
                }
              />
              <Route
                path="product/add"
                element={<ProductAddPage onAdd={onHandleAdd} />}
              />
              {/* <Route
                path="product/:id/edit"
                element={<ProductEditPage onUpdate={onHandeUpdate} />}
              /> */}
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
