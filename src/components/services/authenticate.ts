import axios from "axios";

const authenticate = axios.create({
  baseURL: "https://ctk-server.herokuapp.com/api/v1/user/account/",
});

export { authenticate };
