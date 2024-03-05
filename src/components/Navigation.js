import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import App from "../App";
import Navbar from "./Navbar";
import Profil from "../pages/profil/Profil";
import PrestatairesByServices from "../pages/prestataires/PrestatairesByServices";
import FichePrestataire from "../pages/prestataires/FichePrestataires";

export default function Navigation() {
  //const isAuthenticated = false;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/profil" element={<Profil />} />
        <Route
          path="/services/:serviceId"
          element={<PrestatairesByServices />}
        />
        <Route path="/prestataires/:id" element={<FichePrestataire />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
