import { useState, useEffect } from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/properties`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Impossible de récupérer les logements");
        }
        return response.json();
      })
      .then((data) => setLogements(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Banner />
      <section className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </>
  );
}

export default Home;
