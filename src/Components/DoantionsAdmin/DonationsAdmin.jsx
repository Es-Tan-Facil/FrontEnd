import React, { useEffect, useState } from 'react'
import RowTableDonations from './RowTableDonations';
import HTTPService from '../../Services/HTTPDonationService';

function DonationsAdmin() {
    const [donations, setDonations] = useState([]); 

    useEffect(() => {
    async function fetchDonations() {
      try {
        const response = await HTTPService().getAllDonation();
        setDonations(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchDonations();
  }, [setDonations]);

  return (
    <div className="bg-white">
  <div className="container mx-auto">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="py-3">Nombre</th>
          <th scope="col" class="py-3">Kms</th>
          <th scope="col" class="py-3">Editar</th>
          <th scope="col" class="py-3">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {donations.map(donation => {
          return (
            <RowTableDonations key={donation.id} donation={donation} />
          );
        })}
      </tbody>
    </table>
  </div>
</div>
  )
}

export default DonationsAdmin