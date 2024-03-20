import { useEffect, useState } from "react";
import axios from "axios";
import DeleteUserModal from "../../components/modal/DeleteUserModal";

export default function ValidationAccount() {
  const [accountNA, setAccountNA] = useState([]);

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [idUser, setIdUser] = useState();

  const deleteToggleModal = (idUser) => {
    setIdUser(idUser);
    setDeleteModalVisible(!deleteModalVisible);
  };

  const actionSuccess = () => {
    // Mettre à jour la liste des utilisateurs après la suppression réussie
    getAllAccountNA();
    setDeleteModalVisible(false); // Fermer le modal de suppression
  };

  const getAllAccountNA = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:3001/users-not-activated"
      );

      if (Array.isArray(response.data)) {
        setAccountNA(response.data);
      } else {
        setAccountNA([]);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  const activateAccount = async (id) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:3001/validate-account/${id}`
      );

      if (response.status === 200) {
        await axios.post(`http://127.0.0.1:3001/prestataires/create`, {
          userId: id,
        });
      }
      console.log(response);
      getAllAccountNA();
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getAllAccountNA();
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {accountNA.length === 0 ? (
              <tr>
                <td className="text-center py-4" colSpan="3">
                  Aucun compte à valider
                </td>
              </tr>
            ) : (
              <>
                {accountNA.map((account) => (
                  <tr
                    key={account.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {account.email}
                    </th>
                    <td className="px-6 py-4">{account.role}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => activateAccount(account.id)}
                        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Valider
                      </button>
                      <button
                        onClick={() => deleteToggleModal(account.id)}
                        className="ml-5 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>

        <DeleteUserModal
          idUser={idUser}
          deleteModalVisible={deleteModalVisible}
          deleteToggleModal={deleteToggleModal}
          actionSuccess={actionSuccess}
        />
      </div>
    </>
  );
}
