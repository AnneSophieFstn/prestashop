import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function FichePrestataire() {
  const { id } = useParams();
  console.log("id", id);
  const [prestataire, setPrestataire] = useState([]);

  useEffect(() => {
    // Charge les données JSON
    fetch(`http://localhost:3030/prestataires/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setPrestataire(data);
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des données JSON:", error)
      );
  }, [id]);

  return (
    <>
      <div className="flex flex-col text-center">
        <h1>Prestataire</h1>
        <p>{prestataire.name}</p>
        <p>{prestataire.telephone}</p>
        <p>{prestataire.email}</p>
        <p>{prestataire.description}</p>
      </div>
    </>
  );
}
