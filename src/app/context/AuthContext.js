"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
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
    // eslint-disable-next-line
  }, []);

  const handleLogin = async (email, senha) => {
    setLoading(true);
    const { success, data, message } = await login(email, senha);
    if (success && data.token) {
      localStorage.setItem("token", data.token);
      Cookies.set("token", data.token, { expires: 1, path: "/" });
      localStorage.setItem("user", JSON.stringify({ email }));
      setUser({ email });
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
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    Cookies.remove("token", { path: "/" });
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}