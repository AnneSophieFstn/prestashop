import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import App from "../App";
import Navbar from "./Navbar";
import Profil from "../pages/profil/Profil";
import PrestatairesByServices from "../pages/prestataires/PrestatairesByServices";
import FichePrestataire from "../pages/prestataires/FichePrestataires";
import { useAuth } from "./AuthProvider.js";
import ValidationAccount from "../pages/admin/ValidationAccount.js";
import Utilisateurs from "../pages/admin/Utilisateurs.js";

export default function Navigation() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  useEffect(() => {
    // Vérifier si l'utilisateur est authentifié (par exemple, si un token est disponible)
    const token = localStorage.getItem("token"); // Assurez-vous de stocker le token dans localStorage après la connexion
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        {!isAuthenticated && (
          <>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="/home" element={<App />} />
            <Route
              path="/prestataires/services/:serviceId"
              element={<PrestatairesByServices />}
            />
            <Route path="/prestataire/:id" element={<FichePrestataire />} />
          </>
        )}
        {isAuthenticated && (
          <>
            <Route path="/home" element={<App />} />
            <Route path="/profil" element={<Profil />} />

            <Route
              path="/prestataires/services/:serviceId"
              element={<PrestatairesByServices />}
            />
            <Route path="/prestataire/:id" element={<FichePrestataire />} />
            <Route
              path="/validation-inscription"
              element={<ValidationAccount />}
            />
            <Route path="/utilisateurs" element={<Utilisateurs />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
