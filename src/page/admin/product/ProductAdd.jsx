import { useForm } from 'react-hook-form';
export default function ProductAddPage(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    props.onAdd(data);
  };

  const addProductForm = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Tên sản phẩm"
          />
          {errors.name && <span>Field is required</span>}
        </div>

        <div>
          <input
            type="text"
            {...register("price")}
            placeholder="Giá sản phẩm"
          />
        </div>
        <button>Thêm</button>
      </form>
    );
  };

  return <div className="App">{addProductForm()}</div>;
}
