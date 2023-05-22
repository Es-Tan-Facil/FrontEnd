import React, { useEffect, useState } from 'react'
import RowTableDonations from './RowTableDonations';
import HTTPDonationService from '../../Services/HTTPDonationService';

function DonationsAdmin() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    async function fetchDonations() {
      try {
        const response = await HTTPDonationService ().getAllDonation();
        setDonations(response);
      } catch (error) {
        console.log(error);
      }
    }

    fetchDonations();
  }, [setDonations]);

  return (
    <div className="bg-white my-10 flex ">
      <div className="container mx-auto">
        <table class=" text-sm text-left text-black">
          <thead class="text-lg text-white uppercase bg-[#38B5FF]">
            <tr>
              <th scope="col" class="py-3 pl-3">Nombre</th>
              <th scope="col" class="py-3 pl-3">Kms</th>
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