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
  productByCategory() {
    const url = `/products/category`;
    return axiosClient.get(url);
},
countproduct() {
  const url = `/countproduct`;
  return axiosClient.get(url);
},
getProductPaginate(page, limit, gte, lte, category) {

  if (lte === 0 && category === 0) {
      const url = `/product/pagination?limit=${limit}&page=${page}&gte=${gte}`;
      return axiosClient.post(url);
  } else if (category && lte) {
      const url = `/product/pagination?cateId=${category}&limit=${limit}&page=${page}&gte=${gte}`;
      return axiosClient.post(url);
  } else if (lte) {
      const url = `/product/pagination?limit=${limit}&page=${page}&gte=${gte}&lte=${lte}`;
      return axiosClient.post(url);
  } else if (category) {
      const url = `/product/pagination?cateId=${category}&limit=${limit}&page=${page}&gte=${gte}`;
      return axiosClient.post(url);
  }

}
}
export default productAPI;