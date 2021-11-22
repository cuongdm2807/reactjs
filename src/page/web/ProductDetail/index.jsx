import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productAPI from "../../../api/productAPI";

export default function ProductDetail() {
  // Lấy ID trên url thông qua hook useParams
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    // khai báo hàm getProduct
    const getProduct = async () => {
      try {
        // call API lấy thông tin sản phẩm thông qua ID gửi lên
        const { data } = await productAPI.read(id);
        setProduct(data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  return product && <div>{product.name}</div>;
}
