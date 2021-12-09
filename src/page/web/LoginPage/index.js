import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { signin } from '../../../api/authApi';
import { authenticate } from '../../../components/Authenticate';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        signin(data).then((response) => {
            toast.success("đăng nhập thành công")
            authenticate(response.data.user)
            console.log(response.data.user)
            if(response.data.user.id === 1){
                navigate("/admin/product")
            }else{
                navigate("/")
            }
        })
            .catch((error) => toast.error('đăng nhập thất bại', error.response.data));
    }
    return (
        <div>
            <div>
                <p className="text-gray-900 text-xl font-semibold my-8 text-center ">ĐĂNG NHẬP</p>
                <div className="login flex flex-col items-center">
                <form className="border border-gray-300 shadow-lg h-96 w-2/5 px-8 py-10" onSubmit={handleSubmit(onSubmit)} >
                <p className="text-gray-400 my-3 text-sm">Nếu bạn có tài khoản, hãy đăng nhập bằng tên người dùng của bạn.</p>
                <div className="mb-7 relative">
                    <input
                        
                        type="text"
                        className="w-full border-2 border-gray-300 px-2 py-2 rounded focus:outline-none "
                        placeholder="Email"
                        {...register('email')}
                    />
                    
                </div>
                <div className="relative">
                    <input
                        type="password"
                        className="w-full border-2 border-gray-300 px-2 py-2 rounded focus:outline-none "
                        placeholder="Password"
                        {...register('password')}
                        />
                    
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="px-8 py-3 text-sm bg-green-700 opacity-80 mt-10 hover:opacity-100 text-white  ">ĐĂNG NHẬP</button>
                </div>
            </form>
                    <div className="w-2/5 mt-20 text-center mb-10">
                        <p className="text-gray-900 text-xl font-semibold mb-2">NHỮNG KHÁCH HÀNG MỚI</p>
                        <p className="text-gray-400 text-md mb-8">Tạo tài khoản có nhiều lợi ích: thanh toán nhanh hơn, giữ nhiều hơn một địa chỉ, theo dõi đơn đặt hàng và hơn thế nữa.</p>
                        <Link to="/signup" className="px-8 py-3 text-sm bg-green-700 opacity-80 mt-8 hover:opacity-100 text-white ">TẠO TÀI KHOẢN MỚI</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage