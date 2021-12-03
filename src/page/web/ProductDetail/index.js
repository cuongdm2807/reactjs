import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productAPI from "../../../api/productAPI";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../actions/cartAction";

export default function ProductDetail() {
  // Lấy ID trên url thông qua hook useParams
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    // khai báo hàm getProduct
    const getProduct = async () => {
      try {
        // call API lấy thông tin sản phẩm thông qua ID gửi lên
        const { data } = await productAPI.read(id);
        setProduct(data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);
  const dispatch = useDispatch();
    const handleClick = (product) => {
        dispatch(addToCart({ ...product, image: '' }));
    } 

  return (
    <>
                <div className="bg-gray-100 w-screen h-32 flex justify-center items-center">
                    <Link to='/' className="font-semibold text-md ">Home </Link> / {product.name}
                </div>
                <div className="flex w-full px-24 mt-20 ">
                    <div className="w-2/5 h-auto flex justify-center ">
                        <div className="bg-gray-400 h-2/3 w-3/4 ">
                            <img src={product.image} className="h-full w-full" alt="" />
                        </div>
                    </div>
                    <div className="w-3/5  h-auto tracking-widest">
                        <p className="text-lg font-semibold text-gray-900 mb-10">{product.name}</p>
                        <p className="text-sm text-gray-600 mb-5 ">Availability:{product.status ? 'Stock' : 'Instock'}</p>
                        <p className="text-sm text-gray-600 mb-5">Quantity:{product.quantity}</p>
                        <p className="text-md text-gray-600 font-bold leading-8 mb-5">${product.price}.00</p>
                        <div className="border border-gray-200 w-full h-auto p-5 box-border bg-gray-100">
                            <div className=" w-1/3 h-auto  ">
                                <p className="text-lg font-bold text-gray-600 mb-2">Quantity</p>
                                <div className="flex ">
                                    <div className="w-1/5 bg-gray-300 text-black justify-center items-center flex hover:bg-black hover:text-white">
                                        <span>-</span>
                                    </div>
                                    <div className="w-3/5 ">
                                        <input type="text" className="outline-none p-2 border text-center w-full" defaultValue={1} />
                                    </div>
                                    <div className="w-1/5 bg-gray-300 text-black justify-center items-center flex hover:bg-black hover:text-white">
                                        <span>+</span>
                                    </div>
                                </div>
                                <div className="flex justify-center py-3 border-b border-gray-500 mb-4">
                                    <button
                                        onClick={() => { handleClick(product) }}
                                        className="border-b-2 border-black font-bold  text-sm add-to-cart focus:outline-none" >ADD TO CARD</button>
                                </div>
                                <div className="flex justify-center">
                                    <Link to='' className="text-gray-500 mr-6 uppercase text-sm"><i className="fab fa-behance" /></Link>
                                    <Link to='' className="text-gray-500 mr-6 uppercase text-sm"><i className="fab fa-facebook-f" /></Link>
                                    <Link to='' className="text-gray-500 mr-6 uppercase text-sm"><i className="fab fa-google" /></Link>
                                    <Link to='' className="text-gray-500 uppercase mr-6 text-sm"><i className="fab fa-twitter" /></Link>
                                    <Link to='' className="text-gray-500 uppercase text-sm"><i className="fab fa-instagram" /></Link>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 leading-8 mt-4">{product.description}</p>
                    </div>
                </div>
              
            </>
  )
}