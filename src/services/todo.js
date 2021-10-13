import { apiService } from "./";

export default {
  create: async (title) => {
    return await apiService
      .post(`/todos`, { title, checked: false })
      .then(({ data }) => data)
      .catch((err) => {
        throw err;
      });
  },

  get: async () => {
    return await apiService
      .get(`/todos`)
      .then(({ data }) => data)
      .catch((err) => {
        throw err;
      });
  },

  update: async (id, checked) => {
    return await apiService
      .patch(`/todos/${id}`, { checked })
      .then(({ data }) => data)
      .catch((err) => {
        throw err;
      });
  },

  delete: async (id) => {
    return await apiService
      .delete(`/todos/${id}`)
      .then(({ data }) => data)
      .catch((err) => {
        throw err;
      });
  },
};
