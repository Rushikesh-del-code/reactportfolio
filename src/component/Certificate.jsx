import React from "react";
import { certificates } from "../data";

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <h2 className="section-title">Certificates</h2>
      <div className="grid-3">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <span className="cert-provider">{cert.provider}</span>
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
