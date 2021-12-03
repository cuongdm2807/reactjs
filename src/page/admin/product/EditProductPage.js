import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productAPI from "../../../api/productAPI";

  export default function EditProductPage(props) {
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
      const getProduct = async () => {
        try {
          // call API lấy thông tin sản phẩm thông qua ID gửi lên
          const { data } = await productAPI.read(id);
          console.log(data)
          reset(data);
        } catch (error) { }
      };
      getProduct();
    }, [id, reset]);
  
    const onSubmit = (data) => {
      props.onUpdate(data);
    };
  
    return (
      <form className="ml-10" onSubmit={handleSubmit(onSubmit)}>
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
  
        <div className="mt-5">
          <p>* giá sản phẩm</p>
          <input className="border-2 border-gray-400 mb-5 w-96 rounded p-2"
            type="text"
            {...register("price")}
            placeholder="Giá sản phẩm"
          />
        </div>
        <select style={{ width: 200 }}
        className='border-2 p-2 rounded'
        {...register('categorId')}
        >
          {props.category && props.category.map((item, index) => {
            return (
              <option className="p-2" value={item.id} key={index}>{item.name}</option>
            )
          })}
        </select>
        <div>
          <button className="mt-5 bg-green-600 p-1 rounded text-white px-2">Cập nhật</button>
          <button className="mt-5 ml-5 " onClick={() => navigate(-1)}>Quay lại</button>
        </div>
      </form>
    );
  }