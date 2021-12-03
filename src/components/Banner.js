import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className="flex justify-center items-center bg-center bg-cover" style={{ height: 600, backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/ecomerce-37241.appspot.com/o/images%2Fset1.jpg?alt=media&token=9ad11794-8909-4c76-95eb-4b998deea72a)` }}>

<div className="text-center text-white">
    <p className="mb-8 font-semibold"></p>
    <div className="mb-4">
        <span className="text-6xl font-normal tracking-wide  "> ROYAL TEA</span>
    </div>
    <p className="text-lg font-normal">Giảm giá 10% cho thành viên</p>
    <button className="px-10 py-4 bg-black text-white rounded-full mt-8 font-semibold">
        KHÁM PHÁ NGAY BÂY GIỜ
    </button>
</div>
</div>
        </div>
    )
}

export default Banner
