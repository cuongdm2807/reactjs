import axiosClient from "./axios";

const productAPI = {
  getAll() {
    const url = `/products`;
    return axiosClient.get(url);
  },
  
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
  add(product) {
    const url = `/products`;
    return axiosClient.post(url, product);
  },
  read(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  update(product) {
    const url = `/products/${product.id}`;
    return axiosClient.put(url, product);
  },
  productByCategory(id) {
    const url = `/products?category=${id}`;
    return axiosClient.get(url);
},

}
export default productAPI;