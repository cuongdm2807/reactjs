import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    const signUpForm = () => {
        return (
            <form className="border border-gray-300 rounded shadow-xl px-5 py-3 " >
                <input type="hidden" id="id" />
                <div className="flex px-4 py-3">
                    <p className="w-1/4 text-gray-500 text-sm">Email <span className="text-red-600 font-bold">*</span> </p>
                    <div className="w-3/4 relative">
                        <input
                            type="text"
                            className="w-full py-2  px-4 border border-gray-300 rounded"
                            
                        />
                        
                    </div>
                </div>
                <div className="flex px-4 py-3">
                    <p className="w-1/4 text-gray-500 text-sm">User Name <span className="text-red-600 font-bold">*</span> </p>
                    <div className="w-3/4 relative">
                        <input
                            type="text"
                            className="w-full py-2  px-4 border border-gray-300 rounded"
                            
                        />
                        
                    </div>
                </div>
                <div className="flex px-4 py-3">
                    <p className="w-1/4 text-gray-500 text-sm">Password<span className="text-red-600 font-bold">*</span> </p>
                    <div className="w-3/4 relative">
                        <input
                            type="password"
                            className="w-full py-2  px-4 border border-gray-300 rounded"
                            
                        />
                        
                    </div>
                </div>
                <div className="flex justify-between items-center mt-10">
                    <button type="submit" className="px-8 py-3 text-sm bg-green-700 opacity-80  hover:opacity-100 text-white ">CREATE AN ACCOUNT</button>
                    <Link to="/login" className="font-normal text-gray-900">BACK</Link>
                </div>
            </form>
        )
    }
    return (
        <>
            <p className="text-gray-900 text-xl font-semibold my-4 text-center tracking-widest">CREATE NEW CUSTOMER ACCOUNT</p>
            <div className="resgiter flex justify-center mb-20">
                <div className="flex flex-col  w-2/5">
                    {signUpForm()}
                </div>
            </div>
        </>
    )
}

export default RegisterPage
