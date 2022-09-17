import { NavLink } from 'react-router-dom'
import './styles.css'

const Home = () => {
  return (
    <>
      <div className="content-home">
        <h2>Desafio Github API</h2>
        <h1>Bootcamp Spring React - DevSuperior</h1>
      </div>
      <div className="button-home">
        <NavLink to="/before">
          <button className="content-button">
            <p>Começar</p>
          </button>
        </NavLink>
      </div>
    </>
  )
}

export default Home
