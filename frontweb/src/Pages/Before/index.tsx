import axios from 'axios'
import Informations from 'Components/Informations'
import React, { useState } from 'react'
import './styles.css'

type FormData = {
  users: string
}
type Address = {
  avatar_url: string
  url: string
  followers: string
  location: string
  name: string
}

const Before = () => {
  const [address, setAddress] = useState<Address>()
  const [formData, setFormData] = useState<FormData>({
    users: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    axios
      .get(`https://api.github.com/users/${formData.users}`)
      .then(response => {
        setAddress(response.data)
      })
      .catch(error => {
        setAddress(undefined)
      })
  }
  return (
    <>
      <div className="pesquisa">
        <div className="content-before">
          <div className="text-before">
            <h1>Encontre um perfil Github</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-before">
            <div className="styling">
              <input
                type="text"
                name="users"
                value={formData.users}
                className="search"
                placeholder="Usuario GitHub"
                onChange={handleChange}
              />
              </div>
              
                <div className="button-before">
                  <button type="submit" className="content-button-before">
                    Encontrar
                  </button>
                </div>
              
            </div>
          </form>
        </div>
      </div>
      {address && (
        <div className="content-after">
          <div className="content-after-sub">
            <div>
              <img className="content-img" src={address.avatar_url} alt="Girl in a jacket" width="247" height="247" />

            </div>
            <div className="content-informations">
              <h2>Informações</h2>

              <Informations
                url={address.url}
                followers={address.followers}
                location={address.location}
                name={address.name}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Before
