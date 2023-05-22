import React from 'react'
import NewsForm from '../../Components/NewsForm/NewsForm'
import NavBarPages from '../../Components/NavBarPages/NavBarPages'
import DonationForm from '../../Components/DonationForm/DonationForm'
import NewsAdmin from '../../Components/NewsAdmin/NewsAdmin'
import { useState } from 'react'



function AdminPage() {
  const [reload, setReload] = useState(false)


  return (
    <>
      
      
      <div data-testid="navbar-component">
        <NavBarPages />
      </div>
      <div className="flex mx-auto">
        <div className="w-1/2 mr-4" data-testid="news-form-component">
          <NewsForm />
        </div>
        <div className="w-1/2 ml-4">
          <DonationForm />
        </div>
      </div>
      <div>
        <NewsAdmin reload={reload} setReload={setReload}/>
      </div>
    </>
  )
}

export default AdminPage