import After from 'Pages/After'
import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import './styles.css'

const Before = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('imprimiu')
  }

  const handleSubmit = (event :React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    console.log("escreveu")
  }
  return (
    <>
      <div className="pesquisa">
        <div className="content-before">
          <div className="text-before">
            <h1>Encontre um perfil Github</h1>
          </div>
          <form onSubmit= {handleSubmit}>
            <div className="input-before">
              <input
                type="text"
                name="search"
                placeholder="Usuario GitHub"
                onChange={handleChange}
              />

              <div class-className="button-before">
                <NavLink to="/before/after">
                  <button type="submit" className="content-button-before">
                   Encontrar
                  </button>
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Switch>
        <Route path="/before/after">
          <After />
        </Route>
      </Switch>
    </>
  )
}

export default Before
