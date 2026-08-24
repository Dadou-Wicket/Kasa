import "./Banner.scss";
import bannerImage from "../../assets/banner.png";

function Banner() {
  return (
    <section className="banner">
      <img src={bannerImage} alt="" />
      <div className="banner-overlay"></div>
      <h1>Chez vous, partout et ailleurs</h1>
    </section>
  );
}

export default Banner;
