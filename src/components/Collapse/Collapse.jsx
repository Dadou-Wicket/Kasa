import { useState } from "react";
import arrow from "../../assets/arrow.svg";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <button className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <img src={arrow} alt="" />
      </button>

      <div className="collapse-content">
        <div className="collapse-content-inner">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
