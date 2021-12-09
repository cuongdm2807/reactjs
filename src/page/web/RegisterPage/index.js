import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { authenticate } from '../../../components/Authenticate'
import { signup } from '../../../api/authApi'

const RegisterPage = () => {
    
        const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        signup(data).then((response) => {
            toast.success("đăng ký thành công")
            authenticate(response.data.user)
            console.log(response.data.user)
            navigate('/signin')
        }
    )
    .catch((error)=> toast.error('đăng ký thất bại',error.response.data));
    }
    return (
        <>
            <p className="text-gray-900 text-xl font-semibold my-4 text-center tracking-widest">TẠO TÀI KHOẢN KHÁCH HÀNG MỚI</p>
            <div className="resgiter flex justify-center mb-20">
                <div className="flex flex-col  w-2/5">
                <form className="border border-gray-300 rounded shadow-xl px-5 py-3 " onSubmit={handleSubmit(onSubmit)} >
                <input type="hidden" id="id" />
                <div className="flex px-4 py-3">
                    <p className="w-1/4 text-gray-500 text-sm">Email <span className="text-red-600 font-bold">*</span> </p>
                    <div className="w-3/4 relative">
                        <input
                            type="text"
                            className="w-full py-2  px-4 border border-gray-300 rounded"
                            {...register('email')}
                        />
                        
                    </div>
                </div>
                <div className="flex px-4 py-3">
                    <p className="w-1/4 text-gray-500 text-sm">Tên người dùng<span className="text-red-600 font-bold">*</span> </p>
                    <div className="w-3/4 relative">
                        <input
                            type="text"
                            className="w-full py-2  px-4 border border-gray-300 rounded"
                            {...register('name', { required: true })}
                        />
                        
                    </div>
                </div>
                <div className="flex px-4 py-3">
                    <p className="w-1/4 text-gray-500 text-sm">Mật khẩu<span className="text-red-600 font-bold">*</span> </p>
                    <div className="w-3/4 relative">
                        <input
                            type="password"
                            className="w-full py-2  px-4 border border-gray-300 rounded"
                            {...register('password')}
                        />
                        
                    </div>
                </div>
                <div className="flex justify-between items-center mt-10">
                    <button type="submit" className="px-8 py-3 text-sm bg-green-700 opacity-80  hover:opacity-100 text-white ">TẠO TÀI KHOẢN</button>
                    <Link to="/signin" className="font-normal text-gray-900">BACK</Link>
                </div>
            </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage
