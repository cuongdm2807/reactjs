import { Link } from "react-router-dom";
import productAPI from "../../../api/productAPI";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await productAPI.getAll();
      console.log(data)
        setProducts(data);
      } catch (error) {
        toast.error(error.response.data);
      }
    };

    getProducts();
  }, []);

  const ProductList = () => {
    return (
      <div className="grid grid-cols-3 gap-4 w-full">
      {products.map(product => {
          return (
              <div className=" h-auto w-auto group overflow-hidden relative" key={product.id}>
                  <div
                      className=" w-full h-80 bg-gray-100 flex justify-center items-center "
                  >
                      <img src={product.image} alt="" className="w-40 h-40" />
                  </div>
                  <div className="text-center mt-5">
                      <Link className="text-md font-semibold uppercase text-gray-900 hover:text-main" to={`/shop/${product.id}`} >{product.name}</Link>
                      <div className="flex mt-3">
                          <div className="flex-1">
                              <button
                                  
                                  className="border-b-2 border-main font-bold text-main  text-sm add-to-cart focus:outline-none transform -translate-x-32 group-hover:translate-x-20 transition-all duration-500">THÊM</button>
                          </div>
                          <div className="flex-1">
                              <p className="font-extrabold text-md transform -translate-x-16 group-hover:translate-x-40 transition-all duration-500 text-main">$ {product.price}.00</p>
                          </div>
                      </div>
                  </div>
              </div>
          )
      })}
  </div>
    )
}
  return (
    <div>
      <div className="bg-gray-100 h-32 flex justify-center items-center">
                <Link to='/' className="font-semibold text-md ">Home </Link> / Shop
            </div>
            <div className=" flex px-32  mt-10">
                <div className="w-1/4 px-5">
                    
                </div>
                <div className="w-3/4">
                    {ProductList()}
                    
                </div>
            </div>
    </div>
    
  );
};

export default Products;
