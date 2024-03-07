import { useEffect, useState } from "react"
import axios from "axios";

export default function ValidationAccount() {
    const [accountNA, setAccountNA] = useState([]);

    const getAllAccountNA = async () => {
        await axios.get("http://127.0.0.1:3001/users-not-activated")
            .then((response) => {
                setAccountNA(response.data)
            });
    };

    useEffect(() => {
        getAllAccountNA();
    })

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
                        {accountNA.map((account) => (

                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {account.email}
                                </th>
                                <td className="px-6 py-4">
                                    {account.role}
                                </td>
                                <td className="px-6 py-4">
                                    <button class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Valider
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}