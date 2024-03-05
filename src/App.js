import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function App() {
  const [services, setServices] = useState([]);

  const getAllServices = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    }; /*  */

    fetch("http://localhost:3030/services", requestOptions)
      .then((response) => response.json())
      .then((result) => setServices(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <>
      <div className="flex justify-center pt-5">
        <div className="flex-col text-center">
          <h1 className="text-3xl font-bold pb-5">Liste des domaines</h1>

          <div className="grid grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {service.name}
                </h5>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
