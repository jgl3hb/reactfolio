import React from "react";
import { projects } from "../data";

export default function Navbar() {
return (
  <section id="projects">
    <div className="container">
      <div>
        <h1>
          Apps I've Built
        </h1>
        <p>
          Check them out!
        </p>
      </div>
      <div>
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.image}
          >
          <h1>{project.title}</h1>
          <img 
              src={project.image}
              alt="gallery"
            />
            <h1>{project.subtitle}</h1>
            <p>{project.description}</p>
          </a> 
        ))}
      </div>
    </div>  
  </section>
  );
}