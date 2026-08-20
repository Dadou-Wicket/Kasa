import logoWhite from "../../assets/logo-white.svg";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <img src={logoWhite} alt="Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
