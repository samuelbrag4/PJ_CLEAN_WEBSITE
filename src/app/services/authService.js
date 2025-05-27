import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

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
    const response = await apiClient.post("/login", { email, senha: password });
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
    // Altere aqui para o endpoint correto:
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
    const response = await apiClient.get("/perfil");
    return { success: true, data: response.data.user };
  } catch (error) {
    return { success: false, message: "Erro ao buscar perfil." };
  }
};

export const updateProfile = async (data) => {
  try {
    const response = await apiClient.put("/perfil", data);
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
    await apiClient.delete("/perfil");
    return { success: true };
  } catch (error) {
    return { success: false, message: "Erro ao excluir conta." };
  }
};