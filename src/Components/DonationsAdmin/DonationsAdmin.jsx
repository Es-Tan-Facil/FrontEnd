import React, { useEffect, useState } from 'react';
import RowTableDonations from './RowTableDonations';
import HTTPDonationService from '../../Services/HTTPDonationService';


function DonationsAdmin() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await HTTPDonationService().getAllDonation();
      setDonations(response);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="bg-white my-10 flex">
      <div className="container mx-auto">
        <table class=" text-sm text-left text-black">
          <thead class="text-lg text-white uppercase bg-[#51C8FC]">
            <tr>
              <th scope="col" className="py-3 pl-3">
                Nombre
              </th>
              <th scope="col" className="py-3 pl-3">
                Kms
              </th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <RowTableDonations key={donation.id} donation={donation} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DonationsAdmin;
