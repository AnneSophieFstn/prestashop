import axios from "axios";
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://127.0.0.1:3001/login", {
        email,
        password,
      });

      const token = response.data.token;

      console.log("token: ", token);
      if (token) {
        localStorage.setItem("token", response.data.token);
        await me();
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const me = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://127.0.0.1:3001/user", {
        headers: {
          Authorization: `Bearer ${token}`, // Envoyer le token JWT dans l'en-tête de la requête
        },
      });
      console.log("response.data: ", response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, login, me, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
