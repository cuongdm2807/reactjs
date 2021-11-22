import React from 'react'

const Footer = () => {
    return (
        <div className ="grid grid-cols-4 bg-main text-white py-4 mt-24">
                <div class="px-7 ">
                    <img className="w-32" src="https://firebasestorage.googleapis.com/v0/b/ecomerce-37241.appspot.com/o/img%2Flogo2.png?alt=media&token=e1ea88aa-89fd-4c67-b402-888fe7a87dc9"/>
                </div>
                <div class="px-7">
                    <h1 className="font-bold text-white">Trang</h1> <hr/>
                    <a href="#/Home"><p className="pt-2 text-sm">Home</p></a>
                    <a href="#/about"><p className="text-sm py-1">About</p></a>
                    <a href="#/product"><p className="text-sm pb-1">Menu</p></a>
                    
                </div>
                <div className="px-7">
                    <h1 className="font-bold">Liên hệ</h1> <hr/>
                    <p className="pt-2 text-sm">Address: 22, 63/180 Lê Đức Thọ, Nam Từ Liêm, Hà Nội.</p>
                    <p className="py-3 text-sm">Hotine:  +84 917 454 310</p>
                    <p className="text-sm">Email: cuongdmph09856@fpt.edu.vn</p>
                </div>
                <div className="px-7">
                    <h1 className="font-bold">Kết nối với chúng tôi</h1> <hr/>
                    <div className="w-52 py-3">
                        <img src="https://firebasestorage.googleapis.com/v0/b/ecomerce-37241.appspot.com/o/img%2Ficons.png?alt=media&token=1cc9acdb-3238-419a-99ad-c142e61083ee"/>
                    </div>
                    <div className="w-52">
                        <img src="https://firebasestorage.googleapis.com/v0/b/ecomerce-37241.appspot.com/o/img%2Funnamed.png?alt=media&token=3d684ce8-5bc6-4a1b-876a-88e8f2c0eaa6"/>
                    </div>
                </div>
                
            </div>
    )
}

export default Footer
