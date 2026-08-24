import { useState } from "react";
import arrowCollapse from "../../assets/arrow-collapse.svg";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <button className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <img src={arrowCollapse} alt="" />
      </button>

      <div className="collapse-content">
        <div className="collapse-content-inner">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
