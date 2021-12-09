import { useForm } from "react-hook-form";
import productAPI from "../.././../api/productAPI"
import { storage } from '../../../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
export default function AddProductPage({category}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // const { data } = await productAPI.add(data);
    const file = (data.image[0])
    const storageRef = ref(storage, 'products/' + file.name);
		const uploadTask = uploadBytesResumable(storageRef, file);
    console.log(uploadTask)
		uploadBytes(storageRef, file). then(() => {
      getDownloadURL(uploadTask.snapshot.ref). then((downloadURL) =>{
          console.log(downloadURL);
         const newProducts = {
            ...data,
            image: downloadURL
         }
         console.log(newProducts);
         productAPI.add(newProducts)
         toast.success("Thêm sản phẩm thành công");
      })
  })
    
  };

  const addProductForm = () => {
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
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <div className="relative">
                  <select
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...register("category")}
                  >
                    {category.map((cate) => {
                      return (
                        <option key={cate.id} value={cate.id}>
                          {cate.name}
                        </option>
                      );
                    })}
                  </select>
                  {errors.categgory && (
                    <span className="text-xs text-red-500 absolute top-3 right-3">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">
                  Image{" "}
                </label>
                <div className="relative">
                  <input
                    type="file"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...register("image")}
                    
                  />
                  
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Quantity{" "}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="quantity"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...register("quantity", { required: true, min: 0 })}
                  />

                  {errors.quantity && errors.quantity.type === "required" && (
                    <span className="text-xs text-red-500 absolute top-3 right-3">
                      Không được để trống !
                    </span>
                  )}
                  {errors.quantity && errors.quantity.type === "min" && (
                    <span className="text-xs text-red-500 absolute top-3 right-3">
                      Quantity không được là số âm !
                    </span>
                  )}
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="price"
                    min={0}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...register("price", { required: true, min: 0 })}
                  />

                  {errors.price && errors.price.type === "required" && (
                    <span className="text-xs text-red-500 absolute top-3 right-3">
                      Không được để trống !
                    </span>
                  )}
                  {errors.price && errors.price.type === "min" && (
                    <span className="text-xs text-red-500 absolute top-3 right-3">
                      Price không được là số âm !
                    </span>
                  )}
                </div>
              </div>

              <div className="col-span-6 ">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <div className="relative">
                  <textarea
                    id="description"
                    cols={30}
                    rows={5}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="description"
                    {...register("description", { required: true })}
                  />

                  {errors.description && (
                    <span className="text-xs text-red-500 absolute top-3 right-3">
                      Không được để trống !
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
  };

  return <div className="App">{addProductForm()}</div>;
}
