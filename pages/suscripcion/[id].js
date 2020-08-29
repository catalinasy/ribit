import Suscriptions from "../../src/Components/Suscriptions";
import "./styles.scss";
import Link from 'next/link';
import Logo from "../../public/favicon.svg";


const SUSCRIPCION = {
  id: 1,
  name: "Suscripcion 1",
  description: "Esta suscripcion de manda cositas re lindas, aca voya poner igual una descripcion mas larga porque la idea es que esta descripcion si tenga texto tambien vas a tener mucha info por aca, y espacioes en el medio idealmente",
  suscribed: true,
};

const Suscripcion = () => {
  return (
    <div className="suscriptionRoot">
      <h2>{SUSCRIPCION.name}</h2>
      <div className="imageContainer">
        <Logo width="100px" />
        <Logo width="100px" />
        <Logo width="100px" />

      </div>
      <p className='descriptionContainer'>
    {
        SUSCRIPCION.description
    }
      </p>
      <Link href={"/"}>Volver a Home</Link>
    </div>
  );
};

export default Suscripcion;
