"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { login, register, logout } from "../services/authService";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const token = Cookies.get("token");
    if (savedUser && token) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        handleLogout();
      }
    }
    setLoading(false);
  }, []);

  const handleLogin = async (email, password) => {
  setLoading(true);
  const { success, data, message } = await login(email, password);
  if (success && data.token && data.user) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    Cookies.set("token", data.token, { expires: 1, path: "/" });
    setUser(data.user);
    setLoading(false);
    return { success: true };
  } else {
    setLoading(false);
    return { success: false, message: message || "Credenciais inválidas." };
  }
};

  const handleRegister = async (userData) => {
    setLoading(true);
    const { success, data, message } = await register(userData);
    setLoading(false);
    if (success) return { success: true, data };
    return { success: false, message: message || "Erro ao cadastrar." };
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}