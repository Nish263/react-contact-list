import Axios from "axios";
const apiUrl = "https://randomuser.me/api/?";
export const FetchUsers = () => {
  return Axios.get(apiUrl).then((res) => res.data);
};
