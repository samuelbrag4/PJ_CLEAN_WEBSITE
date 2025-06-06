import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://clean-2tds.coolify.fps92.dev";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export const login = async (email, password) => {
  try {
    // Corrigido: endpoint correto é /auth/login
    const response = await apiClient.post("/auth/login", { email, senha: password });
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Erro ao fazer login.",
    };
  }
};

export const register = async (userData) => {
  try {
    const response = await apiClient.post("/auth/register", userData);
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Erro ao cadastrar.",
    };
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  Cookies.remove("token", { path: "/" });
  return { success: true };
};

export const getProfile = async () => {
  try {
    const response = await apiClient.get("/auth/perfil");
    return {
      success: true,
      data: response.data.user ? response.data.user : response.data,
    };
  } catch (error) {
    return { success: false, message: "Erro ao buscar perfil." };
  }
};

export const updateProfile = async (data) => {
  try {
    const response = await apiClient.put("/user/update", data);
    return { success: true, data: response.data.updatedUser };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Erro ao atualizar perfil.",
    };
  }
};

export const deleteAccount = async () => {
  try {
    await apiClient.delete("/user/delete");
    return { success: true };
  } catch (error) {
    return { success: false, message: "Erro ao excluir conta." };
  }
};