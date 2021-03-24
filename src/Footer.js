import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        {" "}
        <a
          href="https://github.com/ana-coimbra/shecodes-weather-app-react"
          target="_blank"
          rel="noreferrer"
          className="gitHubRepository"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/ana-ribeiro-coimbra/"
          target="_blank"
          rel="noreferrer"
          className="linkedinProfile"
        >
          Ana Coimbra
        </a>
      </footer>
    </div>
  );
}