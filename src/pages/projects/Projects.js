import React from 'react';
import ProjectCard from '../../components/project/ProjectCard';
import './Projects.css';
import projects from '../../data/projects.data';

const Projects = () => {
  return (
    <section id="projects">
      <header className="proj-header">
        <h2>Projects I've developed so far</h2>
      </header>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
