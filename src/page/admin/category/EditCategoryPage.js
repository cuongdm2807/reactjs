import React from 'react'
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import categoryAPI from '../../../api/categoryAPI';
import { toast } from 'react-toastify';

export default function EditCategoryPage(props) {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
    } = useForm();
    // Lấy ID trên url thông qua hook useParams
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
        // khai báo hàm getProduct
        const getCategory = async () => {
          try {
            // call API lấy thông tin sản phẩm thông qua ID gửi lên
            const { data } = await categoryAPI.read(id);
            reset(data);
            toast.success("Thêm danh mục thành công");
          } catch (error) { 
            toast.error(error.response.data);
           }
        };
        getCategory();
      }, [id, reset]);
  
    const onSUBMIT = (data) => {
      props.onUPDATE(data);
    };
  
      return (
        <form className="ml-10" onSubmit={handleSubmit(onSUBMIT)}>
          <h3 className="font-bold text-xl">Mời bạn sửa thông tin:</h3>
          <div className="mt-5">
            <p>* tên sản phẩm</p>
            <input className="border-2 border-gray-400 w-96 rounded p-2"
              type="text"
              {...register("name", { required: true })}
              placeholder="Tên sản phẩm"
            />
            {errors.name && <span>Field is required</span>}
          </div>
          <button className="mt-5 bg-green-600 p-1 rounded text-white px-2">Cập nhật</button>
          <button className="mt-5 ml-5 " onClick={() => navigate(-1)}>Quay lại</button>
        </form>
      );
  }
