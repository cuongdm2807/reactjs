import { NavLink, Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from 'react-redux'
import { GiShoppingCart } from 'react-icons/gi'

export default function LayoutWebsite({handleClickCart}) {
  const cart = useSelector(state => state.cart.data);
  return (
    <div className="">
      <div className="flex justify-around items-center m-5">
        
            <div >
                <img width="200px" src="https://firebasestorage.googleapis.com/v0/b/ecomerce-37241.appspot.com/o/images%2Flogo1.png?alt=media&token=9ec80348-73c4-4abc-895b-47c5ebb2f468" alt="" />
            </div>
            <ul className="flex justify-between uppercase text-sm font-semibold">
                <li className="p-3 "><NavLink exact to="/" className="text-gray-800 "  >Home</NavLink></li>
                <li className="p-3 "><NavLink exact to="/about" className="text-gray-800 " >About</NavLink></li>
                <li className="p-3 "><NavLink exact to="/product" className="" >Shop</NavLink></li>
                {/* <li className="p-3 "><NavLink exact to="/contact" className="text-gray-800 " >Contact</NavLink></li> */}
                <li className="p-3 "><NavLink to="/admin" activeClass="active" className="text-red-500">Admin</NavLink></li>

            </ul>
            
            <div className="flex">
            <div>
            
                    <Link to="cart"><GiShoppingCart className="text-3xl font-semibold"/></Link>
                    </div>
            <Link to="/signin" className="uppercase">login</Link>
            </div>
      </div>
      <Outlet />
      <Footer />
    </div>
    
  );
}
