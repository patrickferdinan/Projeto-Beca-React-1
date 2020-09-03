import { axiosInstance } from "../instance";

export const getRepos = (user) => {
  return axiosInstance.get(`/users/${user}/repos`);
};
