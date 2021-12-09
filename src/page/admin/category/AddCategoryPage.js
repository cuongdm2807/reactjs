import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Categoryadd(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    props.onADD(data);
    toast.success("Thêm danh mục thành công");
  };
  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow  sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...register("name", {
                      required: true,
                      pattern: /^[A-Za-z0-9 ]+$/i,
                    })}
                  />

                  {errors.name && errors.name.type === "required" && (
                    <span className="text-xs text-red-500 absolute top-3 right-3">
                      Không được để trống !
                    </span>
                  )}
                  {errors.name && errors.name.type === "pattern" && (
                    <span className="text-xs text-red-500 absolute top-3 right-3">
                      Tên sản phẩm sai định dạng !
                    </span>
                  )}
                </div>
              </div>
           
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500  focus:outline-none  mr-5"
            >
              Save
            </button>
          </div>
        </div>
      </form>
  );
}