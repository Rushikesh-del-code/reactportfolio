
import React from "react";
import "./App.css";

import {
  personalInfo,
  projectsList,
  skills,
  certificates,
} from "./data";

export default function App() {
  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.devopsAndCloud,
    ...skills.databases,
  ];

  function handleContactSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;

    event.target.reset();
  }

  return (
    <div className="container">

      {/* Certificates */}
      <h2 className="title">Certificates</h2>

      <div className="cert-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="cert-card">
            <small>{cert.provider}</small>
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>

      {/* About Me */}
      <h2 className="title">About Me</h2>

      <p className="subtitle">Get to know more about me</p>

      <div className="about-grid">
        <div>
          <span className="badge">
            {personalInfo.designation}
          </span>

          <h1 className="name">
            Hi, I'm {personalInfo.name}
          </h1>

          <p className="role">{personalInfo.title}</p>

          <p className="desc">
            {personalInfo.shortDescription}
          </p>

          <h3 className="sub-heading">
            Professional Summary
          </h3>

          <p className="desc">
            {personalInfo.about}
          </p>

          <div className="buttons">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              GitHub
            </a>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-blue"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h3 className="sub-heading">
            Personal Information
          </h3>

          <h4>Professional Highlights</h4>

          <div className="skills">
            {allSkills.map((tech, index) => (
              <span key={index} className="pill">
                {tech}
              </span>
            ))}
          </div>

          <h4>Email</h4>
          <p>{personalInfo.email}</p>

          <h4>Phone</h4>
          <p>{personalInfo.phone}</p>

          <h4>Location</h4>
          <p>{personalInfo.location}</p>

          <h4>Experience</h4>
          <p>{personalInfo.experience}</p>
        </div>
      </div>

      {/* My Projects */}
      <h2 className="title">My Projects</h2>

      <div className="cert-grid">
        {projectsList.map((project) => (
          <div key={project.id} className="cert-card">
            <h3>{project.title}</h3>

            <p>{project.shortDescription}</p>

            <p>
              <strong>Technologies:</strong>{" "}
              {project.techStack.join(", ")}
            </p>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                GitHub
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-blue"
              >
                Live Demo
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <h2 className="title">Contact Me</h2>

      <p className="subtitle">
        Have a project or opportunity? Let's connect!
      </p>

      <div className="contact-grid">

        {/* Contact Information */}
        <div className="contact-info">
          <h3>Let's Talk</h3>

          <p>
            Feel free to contact me for job opportunities,
            projects or collaborations.
          </p>

          <div className="contact-item">
            <h4>Email</h4>
            <a href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
            </a>
          </div>

          <div className="contact-item">
            <h4>Phone</h4>
            <a href={`tel:${personalInfo.phone}`}>
              {personalInfo.phone}
            </a>
          </div>

          <div className="contact-item">
            <h4>Location</h4>
            <p>{personalInfo.location}</p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={handleContactSubmit}
        >
          <h3>Send Me a Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            required
          />

          <button type="submit" className="btn btn-blue">
            Send Message
          </button>
        </form>

      </div>

    </div>
  );
}
