import axiosInstance from "../config/axiosConfig";
import { API_PREFIX, AUTH_PREFIX } from "../enverment/devlopment.enverment";

const authService = {
  login: async (credentials) => {
    const response = await axiosInstance.post(
      `${API_PREFIX}${AUTH_PREFIX}/login`,
      credentials
    );
    return response.data;
  },
  register: async (credentials) => {
    const response = await axiosInstance.post(
      `${AUTH_PREFIX}/register`,
      credentials
    );
    return response.data;
  },
};

export default authService;
