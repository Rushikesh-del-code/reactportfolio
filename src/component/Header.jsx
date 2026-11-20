import React from "react";
import { personalInfo } from "../data";

export default function Header() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          {personalInfo.name}
        </a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#certificates">Certificates</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}