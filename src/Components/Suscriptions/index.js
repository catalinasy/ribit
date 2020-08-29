import "./styles.scss";
import Link from "next/link";

const MOCKUP_SUSCRIPTIONS = [
  {
    id: 1,
    name: "Suscripcion 1",
    description: "Esta suscripcion de manda cositas re lindas",
    suscribed: true,
  },
  {
    id: 2,
    name: "Re copada esta",
    description:
      "Esta suscripcion de manda cositas re lindas pero distintas a la anterior",
    suscribed: true,
  },
  {
    id: 3,
    name: "Esta es otra",
    description:
      "Esta suscripcion de manda cositas re lindas pero distintas a la anterior",
    suscribed: true,
  },
  {
    id: 4,
    name: "Distinta",
    description:
      "Esta suscripcion de manda cositas re lindas pero distintas a la anterior",
    suscribed: false,
  },
  {
    id: 5,
    name: "Carlos es suave",
    description:
      "Esta suscripcion de manda cositas re lindas pero distintas a la anterior",
    suscribed: false,
  },
  {
    id: 6,
    name: "Imagenes",
    description:
      "Esta suscripcion de manda cositas re lindas pero distintas a la anterior",
    suscribed: false,
  },
  {
    id: 7,
    name: "Otra cosa",
    description:
      "Esta suscripcion de manda cositas re lindas pero distintas a la anterior",
    suscribed: false,
  },
];

const Suscriptions = () => {
    const id = 1
  return (
    <Link href={`/suscripcion/${id}`}>
      <div className="rootContainer">
        <h2>Tus suscripciones</h2>
        {MOCKUP_SUSCRIPTIONS.map((s) => (
          <div className="suscriptionCard">
            <h4 className="suscriptionTitle">{s.name}</h4>
            <p className="suscriptionDescription">{s.description}</p>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default Suscriptions;
