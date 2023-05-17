import React from 'react'
import NewsForm from '../../Components/NewsForm/NewsForm'
import NavBar from '../../Components/NavBar/NavBar'

function AdminPage() {
  return (
    <>
      <div data-testid="navbar-component">
        <NavBar />
      </div>
      <div data-testid="news-form-component">
        <NewsForm />
      </div>
    </>
  )
}

export default AdminPage