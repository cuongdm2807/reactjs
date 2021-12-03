import productAPI from "./api/productAPI";
import categoryAPI from "./api/categoryAPI";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./tailwind.css";
import "react-toastify/dist/ReactToastify.css";

import LayoutWebsite from "./layouts/LayoutWebsite";
import LayoutAdmin from "./layouts/LayoutAdmin";
import AddProductPage from "./page/admin/product/AddProductPage";
import Products from "./page/web/Product/index";
import ProductDetail from "./page/web/ProductDetail";
import EditProductPage from "./page/admin/product/EditProductPage";
import HomePage from "./page/web/Home/index";
import AboutPage from "./page/web/About/index";
import AddCategoryPage from "./page/admin/category/AddCategoryPage";
import EditCategoryPage from "./page/admin/category/EditCategoryPage";
import ListProduct from "./page/admin/product/ListProduct";
import ListCategory from "./page/admin/category/ListCategory";
import Cart from "./page/web/Cart";
import { deleteAllCart, setCart } from "./actions/cartAction";
import LoginPage from "./page/web/LoginPage";
import RegisterPage from "./page/web/RegisterPage";


export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const dispatch = useDispatch()
  //product
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

    //category
    const getCategory = async () => {
      try {
        const { data } = await categoryAPI.getAll();
        setCategory(data);
      } catch (error) {
        toast.error(error.response.data);
      }
    };
    getCategory();
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
  const onHandeUpdate = async (product) => {
    try {
      const { data } = await productAPI.update(product);
      const newProducts = products.map((item) =>
        item.id === data.id ? data : item
      );
      setProducts(newProducts);
      toast.success(`Cập nhật sản phẩm thành công`);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const onCategoryDelete = async (id) => {
    try {
      const { data } = await categoryAPI.remove(id);
      const newCategory = categories.filter((item) => item.id !== data.id);
      toast.success("Remove Item Successfully");
      setCategory(newCategory);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const onCategoryAdd = async (category) => {
    try {
      // call api
      const { data } = await categoryAPI.add(category);
      // rerender
      setCategory([...categories, data]);
      toast.success("Thêm sản phẩm thành công");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  const onCategoryUpdate = async (category) => {
    try {
      const { data } = await categoryAPI.update(category);
      const newCategory = categories.map((item) =>
        item.id === data.id ? data : item
      );
      setCategory(newCategory);
      toast.success(`Cập nhật sản phẩm thành công`);
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  // const cart = useSelector(data => data.cart.data);
  // logout
  // const onHadleLogout = () => {
  //   const userLogout = { ...userProfile, history: cart }
  //   const { token } = isAuthenticated()
  //   updateUser(userLogout, token)
  //     .then(data => {
  //       signout(() => {
  //         history.push('/login');
  //       })
  //     })
  //     .then(() => {
  //       dispatch(deleteAllCart());
  //       setProfile('');
  //     })


  // }
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
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              {/* <Route path="cart" element={<Cart />} /> */}
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
                  <ListProduct
                    products={products}
                    onRemove={onHandleRemove}
                  />
                }
              />
              <Route
                path="product/add"
                element={<AddProductPage category={categories} onAdd={onHandleAdd} />}
              />
              <Route
          path="product/:id/edit"
          element={<EditProductPage category={categories} onUpdate={onHandeUpdate} />}
        />
        {/* category */}
        <Route path="category" element={<ListCategory categories={categories} onDelete={onCategoryDelete}/>} />
        <Route path="category/add" element={<AddCategoryPage onADD={onCategoryAdd}/>}/>
        <Route
          path="category/:id/edit"
          element={<EditCategoryPage onUPDATE={onCategoryUpdate} />}
        />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
