import { useState } from "react";

export default function FaqAccordion({ title, answer }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="main-font accordion-item">
      <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
        <div className="accordion-title">{title}</div>
        <img
          className={`accordion-icon ${isActive ? "rotate" : ""}`}
          src="/weather-app/public/images/arrow-up1.svg"
          alt="Toggle"
        />
      </div>

      {isActive && <div className="accordion-content">{answer}</div>}
    </div>
  );
}
