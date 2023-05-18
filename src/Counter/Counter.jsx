import React, { useEffect, useState } from 'react';
import HTTPDonationService from '../Services/HTTPDonationService';


const Counter = () => {
  const [totalKms, setTotalKms] = useState(1175);
  

  useEffect(() => {
    const getTotalKms = async () => {
      try {
        const response = await HTTPDonationService().getTotalKms();
        const totalKmsDonated = response;
        const kmsRemaining = 1175 - totalKmsDonated;
        setTotalKms(kmsRemaining);
      } catch (error) {
        console.error('Error al obtener el total de kilómetros donados:', error);
      }
    };
    
    getTotalKms();
  }, []);



  return (
   
    <div className="w-1/4 min-w-[70%] max-w-[70%] md:min-w-[23%] md:max-w-[23%] h-auto
    rounded overflow-hidden border-solid border-2 border-[#51C8FC] rounded-tl-none 
    rounded-br-none rounded-tr-3xl rounded-bl-3xl flex justify-center items-center flex-col  ml-14 md:ml-[65rem]">
    <h4 className="text-gray-700 text-justify text-[1rem] mt-4 ">Kilómetros restantes </h4>
        <p className="font-bold mb-4 h-15 text-[2.5rem] text-[#51C8FC]" >{totalKms}</p>
    </div>
  
 
  );
};

export default Counter;
