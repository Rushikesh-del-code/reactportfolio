import React from "react";
import { personalInfo } from "../data";

export default function PersonalInfo() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know more about me</p>
      </div>

      <div className="about-card">
        {}
        <div>
          <h3 className="blue-heading">Professional Summary</h3>
          <p className="about-text">{personalInfo.about}</p>
        </div>

        {}
        <div>
          <h3 className="blue-heading">Personal Information</h3>
          <ul className="info-list">
            <li><strong>Experience:</strong> {personalInfo.experience}</li>
            <li><strong>Email:</strong> {personalInfo.email}</li>
            <li><strong>Phone:</strong> {personalInfo.phone}</li>
            <li><strong>Location:</strong> {personalInfo.location}</li>
          </ul>

          <h4 className="skills-heading">Professional Highlights</h4>
          <div className="skills-wrap">
            {personalInfo.technologies.map((tech, index) => (
              <span key={index} className="skill-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}