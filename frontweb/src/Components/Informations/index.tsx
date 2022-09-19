import './styles.css'

type Props = {
  url: string;
  followers: string;
  location: string;
  name:string;
}



const Informations = ({url, followers,location,name}:Props) => {
  return (
    <>
  <div className="input-text"><h1>Perfil: {url}</h1></div>
  <div className="input-text"><h1>Seguidores: {followers}</h1></div>
  <div className="input-text"><h1>Localidade: {location}</h1></div>
  <div className="input-text"><h1>Nome: {name}</h1></div>
  </>
  )
}

export default Informations
