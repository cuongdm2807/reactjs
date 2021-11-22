import React from 'react'
import Banner from '../../../components/Banner';
import Item from '../../../components/Item';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Item />
            <div className="pb-10">
                    <h1 class="text-2xl py-5 text-center font-bold">Trà là thức uống của sức khỏe</h1>
                    <p class="text-center py-3 px-32">
                    Trà không chỉ là một loại thức uống ấm để bạn khởi đầu một ngày mới mà còn là một thần dược của cơ thể. Đây là loại thức uống ngày càng trở nên phổ biến nhờ tác dụng làm giảm nguy cơ mắc các chứng bệnh tim mạch, ung thư, tiểu đường,bệnh nướu răng, đồng thời giúp giảm stress và giảm cân hiệu quả. Các chuyên gia nghiên cứu về trà khuyên chúng ta nên uống trà mỗi ngày…
                    </p>
                </div>
            <div className="flex h-96 ">
                <div className="bg-fixed h-full w-full flex flex-col justify-center items-center" style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/ecomerce-37241.appspot.com/o/img%2Fbg.jpg?alt=media&token=bb93cc08-e365-4b1e-a5e1-173a026bd448)` }}>

                <p className="flex text-3xl font-semibold  text-center mb-10 text-white">Nghệ thuật thưởng trà ?</p>

                    <div className=" flex justify-center items-center">
                        <div className="flex  w-3/6 py-2">
                            <p className="text-center text-md font-normal leading-6 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, perspiciatis vel provident obcaecati hic quisquam voluptas ea nesciunt! Commodi, odit asperiores unde officiis neque deserunt inventore illo tempora veniam eligendi!.</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomePage;
