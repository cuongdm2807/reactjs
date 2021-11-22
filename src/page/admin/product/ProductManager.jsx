import { Link } from "react-router-dom";
import productAPI from "../../../api/productAPI";
import React from "react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const ProductManager = ({ onRemove }) => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await productAPI.getAll()
      console.log(data)
      setProduct(data)
    }

    getProduct()
  }, [])
  return (
    <table className="pl-32">
      <tbody>
        {product.map((item, index) => {
          return (
            <tr key={index}>
              <td className="">{item.name}</td>
              <td>
                <button onClick={() => onRemove(item.id)}>Remove</button>
                <Link to={`${item.id}/edit`}>Edit</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default ProductManager;
