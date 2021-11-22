import React from 'react'
import { GiBattleship, GiPiggyBank, GiMoneyStack } from 'react-icons/gi'
import { FaUserAstronaut } from 'react-icons/fa'
const Item = () => {
    return (
        <div className="flex py-6 my-10 px-32">
            <div className=" flex-1 flex justify-center items-center border-r border-gray-500  group">
                <div className="flex justify-center items-center group-hover:text-main ">
                        <div className=" w-14 h-14">
                            <GiBattleship className="w-full h-full text-gray-700 group-hover:text-main " />
                        </div>
                        <div className=" px-3">
                            <p className="font-semibold text-lg">Giao hàng miễn phí</p>
                            <p className="text-gray-600 text-md">Giao hàng miễn phí cho tất cả các đơn đặt hàng</p>
                    </div>
                </div>              
            </div>

            <div className=" flex-1  flex justify-center items-center border-r border-gray-500 group">
                <div className="flex justify-center  items-center">
                        <div className=" w-14 h-14">
                            <GiPiggyBank className="w-full h-full text-gray-700 group-hover:text-main " />
                        </div>
                        <div className=" px-3">
                            <p className="font-semibold text-lg group-hover:text-main ">Hoàn trả tiền</p>
                            <p className="text-gray-600 text-md">Đảm bảo trở lại trong 7 ngày</p>
                    </div>
                </div>              
            </div>

            <div className=" flex-1 flex justify-center items-center border-r border-gray-500 group ">
                <div className="flex items-center justify-center ">
                        <div className=" w-14 h-14">
                            <GiMoneyStack className="w-full h-full text-gray-700 group-hover:text-main " />
                        </div>
                        <div className=" px-3">
                            <p className="font-semibold text-lg group-hover:text-main ">Giảm giá thành viên</p>
                            <p className="text-gray-600 text-md">Đơn đặt hàng trên $ 130</p>
                    </div>
                </div>              
            </div>


            <div className=" flex-1 flex justify-center items-center group">
                <div className="flex items-center justify-center">
                        <div className=" w-14 h-14">
                            <FaUserAstronaut className="w-full h-full text-gray-700 group-hover:text-main" />
                        </div>
                        <div className=" px-3">
                            <p className="font-semibold text-lg group-hover:text-main">Hỗ trợ trực tuyến</p>
                            <p className="text-gray-600 text-md">Hỗ trợ 24 giờ một ngày</p>
                    </div>
                </div>              
            </div>
        </div>
    )
}

export default Item
