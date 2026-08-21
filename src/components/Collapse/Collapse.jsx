import { useState } from "react";
import arrow from "../../assets/arrow.svg";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <img className={isOpen ? "arrow open" : "arrow"} src={arrow} alt="" />
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
