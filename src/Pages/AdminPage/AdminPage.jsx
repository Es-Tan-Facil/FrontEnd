import React from 'react'
import NewsForm from '../../Components/NewsForm/NewsForm'
import NavBar from '../../Components/NavBar/NavBar'
import DonationForm from '../../Components/DonationForm/DonationForm'
import NewsAdmin from '../../Components/NewsAdmin/NewsAdmin'



function AdminPage() {
  return (
    <>
      <NavBar />
      <div className="flex mx-auto">
        <div className="w-1/2 mr-4">
          <NewsForm />
        </div>
        <div className="w-1/2 ml-4">
          <DonationForm />
        </div>
      </div>
      <div>
        <NewsAdmin />
      </div>
    </>
  )
}

export default AdminPage