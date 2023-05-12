import React from 'react'
import NewsForm from '../../Components/NewsForm/NewsForm'
import NavBar from '../../Components/NavBar/NavBar'
import DonationForm from '../../Components/DonationForm/DonationForm'


function AdminPage() {
    return (
      <>
        <NavBar />
        <div className="flex mx-auto">
        <div className="w-1/2">
          <NewsForm />
        </div>
        <div className="w-1/2">
          <DonationForm />
        </div>
      </div>
      </>
    )
  }
  
  export default AdminPage