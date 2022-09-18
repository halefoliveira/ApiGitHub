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
  <div className="input-text">{url}</div>
  <div className="input-text">{followers}</div>
  <div className="input-text">{location}</div>
  <div className="input-text">{name}</div>
  </>
  )
}

export default Informations
