import React from 'react'
import NewsForm from '../../Components/NewsForm/NewsForm'
import NavBarPages from '../../Components/NavBarPages/NavBarPages'

function AdminPage() {
  return (
    <>
      <div data-testid="navbar-component">
        <NavBarPages />
      </div>
      <div data-testid="news-form-component">
        <NewsForm />
      </div>
    </>
  )
}

export default AdminPage