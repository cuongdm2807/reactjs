import { Link, NavLink, Outlet } from "react-router-dom";

export default function LayoutAdmin() {
  return (
    <div className="grid grid-cols-12">
    <div className="md:left-0 md:block md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 col-span-2 h-screen"  id="nav">
            <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                <button className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" type="button">
                    <i className="fas fa-bars" />
                </button>
                <Link className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0" to="/">
                    BRITISH TEA
    </Link>
                <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded hidden" id="example-collapse-sidebar">
                    <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
                        <div className="flex flex-wrap">
                            <div className="w-6/12">
                                <Link className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0" to="/">
                                BRITISH TEA
                                </Link>
                            </div>
                            <div className="w-6/12 flex justify-end">
                                <button type="button" className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent" >
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <form className="mt-6 mb-4 md:hidden">
                        <div className="mb-3 pt-0">
                            <input type="text" placeholder="Search" className="px-3 py-2 h-12 border border-solid border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal" />
                        </div>
                    </form>
                    {/* Divider */}
                    <hr className="my-4 md:min-w-full" />
                    {/* Heading */}
                    <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                        Admin Layout Pages
                    </h6>
                    {/* Navigation */}
                    <ul className="md:flex-col md:min-w-full flex flex-col list-none" id="navigation">
                        <li className="items-center li my-1 font-semibold hover:text-main">
                            <NavLink to="/admin/dashboard" >
                                DashBoards
                            </NavLink>
                        </li>
                        <li className="items-center li my-1 font-semibold hover:text-main">
                            <NavLink to="product" >
                                Products
                            </NavLink>
                        </li>
                        <li className="items-center li my-1 font-semibold hover:text-main">
                            <NavLink to="category">
                                Categories
                            </NavLink>
                        </li>
                    </ul>
                    
                </div>
                
            </div>
        </div>
        <div className="col-span-10">
            <Outlet />
        </div>
          
        </div>
        
        

  );
}