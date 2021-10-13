import { apiService } from "./";

export default {
  signin: async (user) => {
    return await apiService
      .get(`/users?username=${user.username}&password=${user.password}`)
      .then(({ data }) => {
        if (data.length > 0) {
          window.sessionStorage.setItem("logged", "y");
          window.sessionStorage.setItem("user", JSON.stringify(data[0]));
          return { logged: true, user: data[0] };
        } else {
          throw new Error("Username or password are invalid. Try again.");
        }
      })
      .catch((err) => {
        window.sessionStorage.setItem("logged", "n");
        window.sessionStorage.removeItem("user");
        throw err;
      });
  },

  signout: () => {
    window.sessionStorage.setItem("logged", "n");
    window.sessionStorage.removeItem("user");
  },
};
