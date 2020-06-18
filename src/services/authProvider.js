const axios = require("axios");

const authProvider = {
  login: ({ username, password }) => {
    let user = "eve.holt@reqres.in",
      pwd = "cityslicka",
      url = "https://reqres.in/api/login";

    if (username == user) {
      return axios
        .post(url, {
          email: user,
          password: pwd,
        })
        .then(function (response) {
          localStorage.clear();
          localStorage.setItem("usrToken", response.data.token);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      return Promise.reject({ error: "In valid credentials" });
    }
  },
  logout: (params) => {
    localStorage.removeItem("usrToken");
    return Promise.resolve();
  },
  checkAuth: (params) =>
    localStorage.getItem("usrToken") ? Promise.resolve() : Promise.reject(),
  checkError: (error) => Promise.resolve(),
  getPermissions: (params) => Promise.resolve(),
};

export default authProvider;
