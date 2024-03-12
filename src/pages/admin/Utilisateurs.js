import { useEffect, useState } from "react";
import axios from "axios";
import UpdatePrestaireModal from "../../components/modal/UpdatePrestaireModal";
import DeleteUserModal from "../../components/modal/DeleteUserModal";
import AddUserModal from "../../components/modal/AddUserModal";

export default function Utilisateurs() {
  const [users, setUsers] = useState([]);

  const [idUser, setIdUser] = useState();
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const deleteToggleModal = (idUser) => {
    setIdUser(idUser);
    setDeleteModalVisible(!deleteModalVisible);
  };

  const actionSuccess = () => {
    // Mettre à jour la liste des utilisateurs après la suppression réussie
    getAllUsers();
    setDeleteModalVisible(false); // Fermer le modal de suppression
  };

  const addToggleModal = () => {
    setAddModalVisible(!addModalVisible);
  };

  const toggleModal = (idUser) => {
    setIdUser(idUser);
    setModalVisible(!modalVisible);
  };

  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:3001/users");

      if (Array.isArray(response.data)) {
        setUsers(response.data);
      } else {
        setUsers([]);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto">
        <button
          onClick={() => addToggleModal()}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 mx-5 rounded"
        >
          Ajouter un utilisateur
        </button>
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
            {users.length === 0 ? (
              <tr>
                <td className="text-center py-4" colSpan="3">
                  Aucun compte à valider
                </td>
              </tr>
            ) : (
              <>
                {users.map((account) => (
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
                    <td className="px-6 py-4 flex">
                      {account.role === "Prestataire" ? (
                        <>
                          <div>
                            <button
                              onClick={() => toggleModal(account.id)}
                              className="mr-2 bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                              Modifier
                            </button>
                          </div>
                          <div>
                            <button
                              onClick={() => deleteToggleModal(account.id)}
                              className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                              Supprimer
                            </button>
                          </div>
                        </>
                      ) : (
                        <button
                          onClick={() => deleteToggleModal(account.id)}
                          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Supprimer
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>

        <AddUserModal
          addModalVisible={addModalVisible}
          addToggleModal={addToggleModal}
          actionSuccess={actionSuccess}
        />

        <UpdatePrestaireModal
          idUser={idUser}
          modalVisible={modalVisible}
          toggleModal={toggleModal}
        />

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
