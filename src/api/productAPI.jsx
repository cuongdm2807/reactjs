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
  update(id,product) {
    const url = `/products/${id}`;
    return axiosClient.put(url, product);
  }
}
export default productAPI;