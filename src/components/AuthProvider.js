import axios from "axios";
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userLog, setUserLog] = useState();

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://127.0.0.1:3001/login", {
        email,
        password,
      });

      const token = response.data.token;
      const user = response.data.user;

      console.log(user);

      if (token && user) {
        localStorage.setItem("token", token);
        setUserLog(user)
        setIsAuthenticated(true);
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
      setUserLog(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, login, logout, userLog, me }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
