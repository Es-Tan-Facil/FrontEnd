import React from 'react'

function RowTableDonations({donation}) {
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="border border-slate-700">{donation.name}</td>
            <td className="border border-slate-700">{donation.kmDonated}</td>
            
            <td className="border border-slate-700">
                <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">Editar</button>
            </td>
            <td className="border border-slate-700">
                <button  className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded">Eliminar</button>
            </td>
        </tr>
  )
}

export default RowTableDonations