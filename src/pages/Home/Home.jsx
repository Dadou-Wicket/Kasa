import { useState, useEffect } from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setLogements(data));
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
