import axiosClient from "./axios";

const categoryAPI = {
    getAll() {
      const url = `/category`;
      return axiosClient.get(url);
    },
    
    remove(id) {
      const url = `/category/${id}`;
      return axiosClient.delete(url);
    },
    add(category) {
      const url = `/category`;
      return axiosClient.post(url, category);
    },
    read(id) {
      const url = `/category/${id}`;
      return axiosClient.get(url);
    },
    update(category) {
      const url = `/category/${category.id}`;
      return axiosClient.put(url, category);
    }
  }
  export default categoryAPI;