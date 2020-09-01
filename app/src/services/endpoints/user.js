import { axiosInstance } from "../instance";

export const getUser = (user) => {
  return axiosInstance.get(`/users/${user}`);
};
