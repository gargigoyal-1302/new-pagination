import Axios from "axios";

export const getApi = (count) => {
  return Axios.get(`${process.env.REACT_APP_BASE_URL}&page=${count}`);
};
