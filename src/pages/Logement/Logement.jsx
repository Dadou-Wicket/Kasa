import { Navigate, useParams } from "react-router-dom";
import logements from "../../data/logements.json";
import "./Logement.scss";
import starActive from "../../assets/star-active.svg";
import starInactive from "../../assets/star-inactive.svg";
import Collapse from "../../components/Collapse/Collapse";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <main className="logement">
      <div className="logement-image">
        <img src={logement.cover} alt={logement.title} />
      </div>
      <section className="logement-info">
        <div className="logement-left">
          <div className="logement-title">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <div className="logement-tags">
            {logement.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="logement-right">
          <div className="logement-host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="logement-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                src={
                  star <= Number(logement.rating) ? starActive : starInactive
                }
                alt=""
              />
            ))}
          </div>
        </div>
      </section>
      <div className="logement-collapses">
        <Collapse title="Description">{logement.description}</Collapse>

        <Collapse title="Équipements">
          {logement.equipments.map((equipment) => (
            <p key={equipment}>{equipment}</p>
          ))}
        </Collapse>
      </div>
    </main>
  );
}

export default Logement;
