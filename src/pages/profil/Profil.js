import { Link } from "react-router-dom";

export default function Profil() {
  const secteursActivite = [
    { id: 1, nom: "Informatique et technologies de l'information" },
    { id: 2, nom: "Services financiers et comptabilité" },
    { id: 3, nom: "Consultation en management et stratégie" },
    { id: 4, nom: "Services de marketing et publicité" },
    { id: 5, nom: "Services de conception graphique et multimédia" },
    { id: 6, nom: "Services de traduction et linguistiques" },
    { id: 7, nom: "Services de photographie et vidéo" },
    { id: 8, nom: "Services de rédaction et édition" },
    { id: 9, nom: "Services juridiques et notariaux" },
    { id: 10, nom: "Services de santé et bien-être" },
  ];

  const villes = [
    { id: 1, nom: "Saint-Denis" },
    { id: 2, nom: "Saint-Paul" },
    { id: 3, nom: "Saint-Pierre" },
    { id: 4, nom: "Le Tampon" },
    { id: 5, nom: "Saint-André" },
    { id: 6, nom: "Le Port" },
    { id: 7, nom: "Saint-Louis" },
    { id: 8, nom: "La Possession" },
    { id: 9, nom: "Saint-Benoît" },
    { id: 10, nom: "Saint-Joseph" },
    { id: 11, nom: "Petite-Île" },
    { id: 12, nom: "La Plaine-des-Palmistes" },
    { id: 13, nom: "Sainte-Marie" },
    { id: 14, nom: "Sainte-Suzanne" },
    { id: 15, nom: "Salazie" },
    { id: 16, nom: "Cilaos" },
    { id: 17, nom: "Entre-Deux" },
  ];

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image
              </label>
              <img src="https://picsum.photos/200/300" alt="prestataires" />

              <div className="mt-2">
                <input
                  id="image"
                  name="image"
                  type="file"
                  placeholder="Choisir une image"
                  required
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nom de l'entreprise
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nom de l'entreprise"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mot de passe
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  placeholder="Mot de passe"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Numéro de téléphone
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  placeholder="0262-12-34-56"
                  type="tel"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Ville
                </label>
              </div>
              <div className="mt-2">
                <select
                  id="secteurActivite"
                  name="secteurActivite"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  {/* Mapping sur la liste des secteurs d'activité pour créer les options */}
                  {villes.map((ville) => (
                    <option key={ville.id} value={ville.id}>
                      {ville.nom}
                    </option>
                  ))}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Secteur d'activités
                </label>
              </div>
              <div className="mt-2">
                <select
                  id="secteurActivite"
                  name="secteurActivite"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  {/* Mapping sur la liste des secteurs d'activité pour créer les options */}
                  {secteursActivite.map((secteur) => (
                    <option key={secteur.id} value={secteur.id}>
                      {secteur.nom}
                    </option>
                  ))}
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  placeholder="Entrer une description"
                  type="description"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Modifier mon compte
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Voir ma page de prestataire.{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Cliquez-ici.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
