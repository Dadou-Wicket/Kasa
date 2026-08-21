import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import logements from "../../data/logements.json";

function Home() {
  return (
    <main>
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
    </main>
  );
}

export default Home;
