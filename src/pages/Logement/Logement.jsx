import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import "./Logement.scss";
import starActive from "../../assets/star-active.svg";
import starInactive from "../../assets/star-inactive.svg";
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Logement introuvable");
        }
        return response.json();
      })
      .then((data) => setLogement(data))
      .catch(() => setError(true));
  }, [id]);
  // Redirige vers la page 404 si l'API ne trouve pas le logement
  if (error) {
    return <Navigate to="/404" />;
  }

  return (
    <main className="logement">
      <Slideshow pictures={logement.pictures} title={logement.title} />
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
            <p>
              {logement.host.name?.split(" ")[0]}
              <br />
              {logement.host.name?.split(" ")[1]}
            </p>
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
