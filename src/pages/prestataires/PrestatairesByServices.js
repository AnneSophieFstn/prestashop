import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function PrestatairesByServices() {
  const { serviceId } = useParams();
  console.log("serviceId new: ", serviceId);
  const [prestataires, setPrestataires] = useState([]);

  useEffect(() => {
    // Charge les données JSON
    fetch("http://localhost:3030/prestataires")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data: ", data);
        // Filtre les prestataires en fonction de serviceId
        const filteredPrestataires = data.filter(
          (prestataire) => prestataire.serviceId === 1
        );
        console.log("filteredPrestataires: ", filteredPrestataires);
        setPrestataires(filteredPrestataires);
      })
      .catch((error) =>
        console.error("Erreur lors du chargement des données JSON:", error)
      );
  }, [serviceId]); // Réexécute le chargement des données lorsque serviceId change

  return (
    <>
      <div className="flex justify-center pt-5">
        <div className="flex-col text-center">
          <h1 className="text-3xl font-bold pb-5">Liste des domaines</h1>

          <div className="grid grid-cols-3 gap-4">
            {prestataires.map((prestataire) => (
              <Link
                key={prestataire.id}
                to={`/prestataires/${prestataire.id}`}
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {prestataire.name}
                </h5>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
